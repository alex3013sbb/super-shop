export type ProductCategoryKey = "all" | "men" | "women" | "kids";

export type ProductSortKey =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export type ProductSizeCode = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ProductColorCode =
  | "black"
  | "white"
  | "gray"
  | "blue"
  | "green"
  | "red"
  | "beige";

export type ProductCollectionCode =
  | "new-in"
  | "summer-2024"
  | "basics"
  | "rework-edition";

export type ProductSearchRequest = {
  q?: string;
  category?: Exclude<ProductCategoryKey, "all">;
  sizes?: ProductSizeCode[];
  colors?: ProductColorCode[];
  collections?: ProductCollectionCode[];
  minPrice?: number;
  maxPrice?: number;
  sort?: ProductSortKey;
  page?: number;
  pageSize?: number;
};

export type ProductCardResponse = {
  id: number;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  category: Exclude<ProductCategoryKey, "all">;
  collection: ProductCollectionCode;
  availableSizes: ProductSizeCode[];
  availableColors: ProductColorCode[];
  inStock: boolean;
};

export type ProductListResponse = {
  items: ProductCardResponse[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  requestEcho: ProductSearchRequest;
};

export type FilterOptionResponse<TCode extends string> = {
  code: TCode;
  label: string;
  count: number;
};

export type FilterOptionsResponse = {
  categories: FilterOptionResponse<Exclude<ProductCategoryKey, "all">>[];
  sizes: FilterOptionResponse<ProductSizeCode>[];
  colors: FilterOptionResponse<ProductColorCode>[];
  collections: FilterOptionResponse<ProductCollectionCode>[];
  priceRange: {
    min: number;
    max: number;
  };
};

export type ApiErrorResponse = {
  code: string;
  message: string;
  details?: string[];
};
