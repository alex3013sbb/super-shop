import ProductsOverviewClient from "@/components/ProductsOverviewClient";
import { productsApi } from "@/lib/api";
import type { ProductCategoryKey } from "@/types/api";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    q?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const selectedCategory = (
    params.category || "all"
  ).toLowerCase() as ProductCategoryKey;
  const q = (params.q || "").trim().toLowerCase();

  const apiCategory =
    selectedCategory !== "all"
      ? (selectedCategory as Exclude<ProductCategoryKey, "all">)
      : undefined;

  const [productList, filterOptions] = await Promise.all([
    productsApi.getProductList({ category: apiCategory, q }),
    productsApi.getFilterOptions({ category: apiCategory, q }),
  ]);

  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-10">
      <ProductsOverviewClient
        productList={productList}
        filterOptions={filterOptions}
        selectedCategory={selectedCategory}
        q={q}
      />
    </div>
  );
}
