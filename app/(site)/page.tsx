import SiteFeatureSection from "./feature-section";
import HeroSection from "./hero-section";
import { ProductSection } from "./product-section";

export default function Home() {
  return (
    <main className="container space-y-10 mx-auto p-2">
      <HeroSection />
      <SiteFeatureSection />
      <ProductSection />
    </main>
  );
}
