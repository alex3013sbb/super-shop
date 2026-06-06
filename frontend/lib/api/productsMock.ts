import type {
  FilterOptionsResponse,
  ProductCardResponse,
  ProductCollectionCode,
  ProductColorCode,
  ProductListResponse,
  ProductSearchRequest,
  ProductSizeCode,
} from "@/types/api";

const mockProducts: ProductCardResponse[] = [
  {
    id: 1,
    slug: "basic-t-shirt",
    name: "Basic T-Shirt",
    price: 19,
    imageUrl: "/images/collection-1-a.jpg",
    category: "men",
    collection: "basics",
    availableSizes: ["S", "M", "L"],
    availableColors: ["white", "black"],
    inStock: true,
  },
  {
    id: 2,
    slug: "oversize-t-shirt",
    name: "Oversize T-Shirt",
    price: 25,
    imageUrl: "/images/collection-2-b.jpg",
    category: "men",
    collection: "summer-2024",
    availableSizes: ["M", "L", "XL"],
    availableColors: ["black", "gray"],
    inStock: true,
  },
  {
    id: 3,
    slug: "printed-shirt",
    name: "Bedrucktes Hemd",
    price: 29,
    imageUrl: "/images/collection-3-a.jpg",
    category: "men",
    collection: "new-in",
    availableSizes: ["S", "M", "L"],
    availableColors: ["green", "black"],
    inStock: true,
  },
  {
    id: 4,
    slug: "linen-shirt",
    name: "Leinenhemd",
    price: 29,
    imageUrl: "/images/collection-4-a.jpg",
    category: "men",
    collection: "rework-edition",
    availableSizes: ["M", "L", "XL"],
    availableColors: ["beige", "gray"],
    inStock: true,
  },
  {
    id: 5,
    slug: "regular-fit-jeans",
    name: "Jeans Regular Fit",
    price: 44,
    imageUrl: "/images/collection-1-b.jpg",
    category: "women",
    collection: "basics",
    availableSizes: ["XS", "S", "M", "L"],
    availableColors: ["blue", "black"],
    inStock: true,
  },
  {
    id: 6,
    slug: "basic-sweatshirt",
    name: "Basic Sweatshirt",
    price: 27,
    imageUrl: "/images/collection-2-a.jpg",
    category: "women",
    collection: "summer-2024",
    availableSizes: ["S", "M", "L"],
    availableColors: ["gray", "blue", "white"],
    inStock: true,
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toNumber(value: number | undefined, fallback: number) {
  if (value === undefined || Number.isNaN(value)) {
    return fallback;
  }
  return value;
}

function matchesAny<T extends string>(source: T[], selected: T[] | undefined) {
  if (!selected || selected.length === 0) {
    return true;
  }
  return selected.some((item) => source.includes(item));
}

function sortProducts(items: ProductCardResponse[], sort: ProductSearchRequest["sort"]) {
  if (sort === "price-asc") {
    return [...items].sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    return [...items].sort((a, b) => b.price - a.price);
  }

  if (sort === "name-asc") {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "newest") {
    return [...items].sort((a, b) => b.id - a.id);
  }

  return items;
}

function getPriceRange(items: ProductCardResponse[]) {
  if (items.length === 0) {
    return { min: 0, max: 0 };
  }

  const prices = items.map((item) => item.price);

  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

function countOptions<TCode extends string>(
  items: ProductCardResponse[],
  values: TCode[],
  getter: (item: ProductCardResponse) => TCode | TCode[],
) {
  return values.map((code) => {
    const count = items.filter((item) => {
      const picked = getter(item);
      if (Array.isArray(picked)) {
        return picked.includes(code);
      }
      return picked === code;
    }).length;

    return {
      code,
      label: code,
      count,
    };
  });
}

export async function getMockProductList(
  request: ProductSearchRequest,
): Promise<ProductListResponse> {
  await sleep(150);

  const page = Math.max(1, toNumber(request.page, 1));
  const pageSize = Math.max(1, toNumber(request.pageSize, 12));
  const q = request.q?.trim().toLowerCase() ?? "";

  const filtered = mockProducts.filter((product) => {
    const categoryMatch = !request.category || product.category === request.category;
    const searchMatch = q.length === 0 || product.name.toLowerCase().includes(q);
    const sizeMatch = matchesAny(product.availableSizes, request.sizes);
    const colorMatch = matchesAny(product.availableColors, request.colors);
    const collectionMatch =
      !request.collections ||
      request.collections.length === 0 ||
      request.collections.includes(product.collection);
    const minPriceMatch = request.minPrice === undefined || product.price >= request.minPrice;
    const maxPriceMatch = request.maxPrice === undefined || product.price <= request.maxPrice;

    return (
      categoryMatch &&
      searchMatch &&
      sizeMatch &&
      colorMatch &&
      collectionMatch &&
      minPriceMatch &&
      maxPriceMatch
    );
  });

  const sorted = sortProducts(filtered, request.sort);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;
  const items = sorted.slice(start, end);

  return {
    items,
    total,
    page: safePage,
    pageSize,
    totalPages,
    requestEcho: request,
  };
}

export async function getMockFilterOptions(
  request: Pick<ProductSearchRequest, "category" | "q"> = {},
): Promise<FilterOptionsResponse> {
  await sleep(120);

  const q = request.q?.trim().toLowerCase() ?? "";

  const basis = mockProducts.filter((product) => {
    const categoryMatch = !request.category || product.category === request.category;
    const searchMatch = q.length === 0 || product.name.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  });

  const categories = countOptions(
    basis,
    ["men", "women", "kids"],
    (item) => item.category,
  );

  const sizes = countOptions(
    basis,
    ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    (item) => item.availableSizes,
  );

  const colors = countOptions(
    basis,
    ["black", "white", "gray", "blue", "green", "red", "beige"],
    (item) => item.availableColors,
  );

  const collections = countOptions(
    basis,
    ["new-in", "summer-2024", "basics", "rework-edition"],
    (item) => item.collection,
  );

  return {
    categories,
    sizes,
    colors,
    collections,
    priceRange: getPriceRange(basis),
  };
}

export const mockCatalog = {
  products: mockProducts,
};

export type MockCatalogShape = {
  products: ProductCardResponse[];
  allSizes: ProductSizeCode[];
  allColors: ProductColorCode[];
  allCollections: ProductCollectionCode[];
};
