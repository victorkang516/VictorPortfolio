import HeroSection from "./_components/hero-section";
import FeaturedGallery from "./_components/featured-gallery";
import FeaturedProjects from "./_components/featured-projects";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <FeaturedProjects />
      <FeaturedGallery />
    </main>
  );
}
