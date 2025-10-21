import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-[#F5F1E8] overflow-hidden min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="flex items-center">
          <img src="/old-mill-logo.png" alt="Old Mill Brick" className="h-12 w-auto" />
        </div>
      </header>

      <div className="container mx-auto px-6 pt-24 pb-16 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#1a1a1a] mb-6 text-balance">
              Timeless Appeal,
              <br />
              New Technology.
            </h1>
            <p className="text-base text-[#4a4a4a] mb-8 leading-relaxed">
              With patented technology, Old Mill delivers unmatched beauty, lasting durability, and easy installation.
              Our brick systems elevate the timeless appeal of real brick while meeting the highest standards of energy
              efficiency you expect the stringent environmental requirements of the construction industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#8B1A1A] hover:bg-[#6B1515] text-white px-6">Contact Sales</Button>
              <Button
                variant="outline"
                className="border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white px-6 bg-transparent"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image with Unique Clipping Shape - positioned absolutely from top-0 with z-30 to layer over navbar */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-30 pointer-events-none">
        <div className="relative h-full">
          {/* Clipped Image Container */}
          <div
            className="absolute inset-0 lg:left-12 pointer-events-auto"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="/modern-kitchen-with-white-countertops-and-stainles.jpg"
              alt="Modern kitchen showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay Lines with Reduced Opacity */}
          <div
            className="absolute inset-0 lg:left-12 pointer-events-none"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {/* Diagonal line from top-left */}
            <div
              className="absolute top-0 left-0 w-full h-0.5 bg-white/40 origin-top-left"
              style={{
                transform: "rotate(-12deg)",
                transformOrigin: "0 0",
                width: "120%",
              }}
            />
            {/* Vertical line on left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/40" />
            {/* Top horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
