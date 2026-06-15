import { HeroSlider } from "@/components/hero/hero-slider";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 lg:gap-16 pb-10">
      <HeroSlider />
      
      <div className="container mx-auto px-4 lg:px-10">
        <section className="flex flex-col items-center justify-center py-12 lg:py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center px-4">
            Welcome to <span className="text-brand">BoroBazar</span>
          </h1>
          <p className="mt-4 text-sm lg:text-lg text-gray-600 text-center max-w-2xl px-6">
            Your favorite grocery store, delivering freshness and quality right to your doorstep. Explore our wide range of products today.
          </p>
          <button className="mt-8 rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand-hover shadow-lg shadow-brand/20">
            Start Shopping
          </button>
        </section>
      </div>
    </main>
  );
}
