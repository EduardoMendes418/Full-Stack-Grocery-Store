import { HeroSlider } from "@/components/hero/hero-slider";
import { TopCategories } from "@/components/categories/top-categories";
import { PopularProducts } from "@/components/products/popular-products";
import { FeaturedProducts } from "@/components/products/featured-products";
import { BreakfastDairy } from "@/components/products/breakfast-dairy";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-16 pb-10 bg-white">
      <HeroSlider />
      <TopCategories />
      <FeaturedProducts />
      <BreakfastDairy />
      <PopularProducts />
    </main>
  );
}
