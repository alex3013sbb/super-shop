import ProductsOverviewClient, {
  type ProductOverviewItem,
} from "@/components/ProductsOverviewClient";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
    q?: string;
  }>;
};

const products: ProductOverviewItem[] = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29.9,
    category: "men",
    subcategory: "Hosen",
    image: "/images/collection-1-a.jpg",
  },
  {
    id: 2,
    name: "Oversize T-Shirt",
    price: 25.9,
    category: "men",
    subcategory: "Hemden",
    image: "/images/collection-2-b.jpg",
  },
  {
    id: 3,
    name: "Denim Regular Fit",
    price: 49.9,
    category: "men",
    subcategory: "Jacken",
    image: "/images/collection-3-a.jpg",
  },
  {
    id: 4,
    name: "Crewneck Sweater",
    price: 39.9,
    category: "men",
    subcategory: "Jeans",
    image: "/images/collection-4-a.jpg",
  },
  {
    id: 5,
    name: "Linen Shirt",
    price: 34.9,
    category: "women",
    subcategory: "Hemden",
    image: "/images/collection-1-b.jpg",
  },
  {
    id: 6,
    name: "Relaxed Blouse",
    price: 36.9,
    category: "women",
    subcategory: "Shorts",
    image: "/images/collection-2-a.jpg",
  },
  {
    id: 7,
    name: "Minimal Dress",
    price: 59.9,
    category: "women",
    subcategory: "Jeans",
    image: "/images/collection-3-b.jpg",
  },
  {
    id: 8,
    name: "Soft Knit Pullover",
    price: 42.9,
    category: "women",
    subcategory: "Jacken",
    image: "/images/collection-4-b.avif",
  },
];

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;
  const selectedCategory = (params.category || "all").toLowerCase();
  const q = (params.q || "").trim().toLowerCase();

  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-10">
      <ProductsOverviewClient
        products={products}
        selectedCategory={selectedCategory}
        q={q}
      />
    </div>
  );
}
