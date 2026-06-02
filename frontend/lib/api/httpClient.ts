import type { ApiErrorResponse } from "@/types/api";
import { API_BASE_URL, API_TIMEOUT_MS } from "@/lib/api/config";

type Primitive = string | number | boolean;
type QueryValue = Primitive | Primitive[] | null | undefined;

type RequestQuery = Record<string, QueryValue>;

export class ApiClientError extends Error {
  status: number;
  payload?: ApiErrorResponse;

  constructor(message: string, status: number, payload?: ApiErrorResponse) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.payload = payload;
  }
}

function buildQueryString(query?: RequestQuery) {
  if (!query) {
    return "";
  }

  const params = new URLSearchParams();

  for (const [key, rawValue] of Object.entries(query)) {
    if (rawValue === undefined || rawValue === null) {
      continue;
    }

    if (Array.isArray(rawValue)) {
      if (rawValue.length === 0) {
        continue;
      }
      params.set(key, rawValue.join(","));
      continue;
    }

    params.set(key, String(rawValue));
  }

  const encoded = params.toString();
  return encoded.length > 0 ? `?${encoded}` : "";
}

async function parseErrorPayload(response: Response) {
  try {
    const parsed = (await response.json()) as ApiErrorResponse;
    if (parsed && typeof parsed.message === "string") {
      return parsed;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

export async function getJson<TResponse>(
  path: string,
  query?: RequestQuery,
): Promise<TResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  const url = `${API_BASE_URL}${path}${buildQueryString(query)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const payload = await parseErrorPayload(response);
      throw new ApiClientError(
        payload?.message ?? `Request failed with status ${response.status}`,
        response.status,
        payload,
      );
    }

    return (await response.json()) as TResponse;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ApiClientError("Request timed out", 408);
    }

    throw new ApiClientError("Network request failed", 0);
  } finally {
    clearTimeout(timeout);
  }
}
