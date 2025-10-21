import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { VisualizerSection } from "@/components/visualizer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandsSection />
      <VisualizerSection />
    </main>
  )
}
