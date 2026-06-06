import { getJson } from "@/lib/api/httpClient";
import { USE_MOCK_API } from "@/lib/api/config";
import {
  getMockFilterOptions,
  getMockProductList,
} from "@/lib/api/productsMock";
import type {
  FilterOptionsResponse,
  ProductListResponse,
  ProductSearchRequest,
} from "@/types/api";

function requestToQuery(request: ProductSearchRequest) {
  return {
    q: request.q,
    category: request.category,
    sizes: request.sizes,
    colors: request.colors,
    collections: request.collections,
    minPrice: request.minPrice,
    maxPrice: request.maxPrice,
    sort: request.sort,
    page: request.page,
    pageSize: request.pageSize,
  };
}

export type ProductsApi = {
  getProductList: (request: ProductSearchRequest) => Promise<ProductListResponse>;
  getFilterOptions: (
    request?: Pick<ProductSearchRequest, "category" | "q">,
  ) => Promise<FilterOptionsResponse>;
};

async function getProductList(
  request: ProductSearchRequest,
): Promise<ProductListResponse> {
  if (USE_MOCK_API) {
    return getMockProductList(request);
  }

  return getJson<ProductListResponse>(
    "/alexshop/products/search",
    requestToQuery(request),
  );
}

async function getFilterOptions(
  request: Pick<ProductSearchRequest, "category" | "q"> = {},
): Promise<FilterOptionsResponse> {
  if (USE_MOCK_API) {
    return getMockFilterOptions(request);
  }

  return getJson<FilterOptionsResponse>("/alexshop/filters/options", {
    category: request.category,
    q: request.q,
  });
}

export const productsApi: ProductsApi = {
  getProductList,
  getFilterOptions,
};
