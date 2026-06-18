import { ProductDetails } from "@/components/products/product-details";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

// Mock products data (should ideally come from an API or central store)
const products: Product[] = [
  {
    id: 1,
    name: "Pure Natural Honey",
    slug: "pure-natural-honey",
    price: 15.50,
    unit: "500g",
    image: "/img/products/product-1.svg",
    tag: "Sale",
    description: "Experience the pure essence of nature with our Pure Natural Honey. Harvested from wild blossoms, this honey is rich in antioxidants and offers a smooth, golden texture that's perfect for sweetening your morning tea or drizzling over fresh yogurt.",
    category: "Breakfast",
    sku: "HON-001",
    tags: ["Organic", "Natural", "Sweetener"],
    gallery: ["/img/products/product-2.svg", "/img/products/product-3.svg"]
  },
  {
    id: 2,
    name: "Organic Extra Virgin Olive Oil",
    slug: "organic-olive-oil",
    price: 24.99,
    unit: "750ml",
    image: "/img/products/product-2.svg",
    tag: "New",
    description: "Our Organic Extra Virgin Olive Oil is cold-pressed to preserve its delicate flavor and nutritional value. Sourced from Mediterranean groves, it features a peppery finish and a rich green hue, making it ideal for salad dressings and finishing gourmet dishes.",
    category: "Cooking Essentials",
    sku: "OIL-002",
    tags: ["Organic", "Cold Pressed", "Mediterranean"],
    gallery: ["/img/products/product-1.svg", "/img/products/product-3.svg"]
  },
  {
    id: 3,
    name: "Premium Ground Coffee",
    slug: "premium-ground-coffee",
    price: 12.80,
    unit: "250g",
    image: "/img/products/product-3.svg",
    description: "Start your day with the bold and aromatic notes of our Premium Ground Coffee. Made from 100% Arabica beans, it offers a balanced profile with hints of dark chocolate and roasted nuts, ensuring a perfect cup every time.",
    category: "Beverages",
    sku: "COF-003",
    tags: ["Coffee", "Arabica", "Premium"],
    gallery: ["/img/products/product-1.svg", "/img/products/product-2.svg"]
  },
  // Add more products if needed...
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    // For products not in our small mock list, let's create a generic one so the page still works
    const genericProduct: Product = {
        id: Math.random(),
        name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        slug: slug,
        price: 9.99,
        unit: "1kg",
        image: "/img/products/product-1.svg",
        description: "This is a high-quality product from BoroBazar. We ensure all our products meet the highest standards of freshness and quality. Enjoy the best of nature delivered straight to your door.",
        category: "Grocery",
        sku: "GEN-001",
        tags: ["Fresh", "Grocery"],
        gallery: ["/img/products/product-2.svg", "/img/products/product-3.svg", "/img/products/product-4.svg"]
    };
    
    const relatedProducts = products.slice(0, 4);
    return <ProductDetails product={genericProduct} relatedProducts={relatedProducts} />;
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 4);

  return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
