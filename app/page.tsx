import { HeroSlider } from "@/components/hero/hero-slider";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to BoroBazar</h1>
        <p className="mt-4 text-gray-600">Your favorite grocery store.</p>
      </div>
    </main>
  );
}
