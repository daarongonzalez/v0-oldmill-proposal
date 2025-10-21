"use client"

import { useState } from "react"

export function BrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<"brickwebb" | "accents" | "panelplus">("brickwebb")

  const brandImages = {
    brickwebb: "/modern-kitchen-with-wooden-cabinets-and-black-subw.jpg",
    accents: "/kitchen-with-brick-accent-wall.jpg",
    panelplus: "/modern-kitchen-with-brick-panel.jpg",
  }

  const brands = [
    {
      id: "brickwebb" as const,
      title: "Brickwebb",
      description:
        "Brickwebb is our thin brick that lets you get the patented mesh-mounted system that makes installation fast and easy. Our brick systems are designed to work with any wall type and can be applied almost anywhere.",
    },
    {
      id: "accents" as const,
      title: "Accents",
      description:
        "Old Mill Brick Accents offer a more affordable and streamlined solution for brick veneer with a lightweight design of less than 6lbs/sqft while still maintaining the authentic look and feel of real brick.",
    },
    {
      id: "panelplus" as const,
      title: "Panel Plus",
      description:
        "Old Mill Systems is our Panel Plus professional series which is a professional grade brick veneer system that offers the most realistic brick appearance available on the market today.",
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">Industry Trusted Brands</h2>
        <p className="text-base text-[#4a4a4a] mb-12 max-w-2xl leading-relaxed">
          Industry leading technology and a commitment to the highest quality standards are what set Old Mill apart from
          other brick products. Our products are trusted by architects, builders, and contractors to effectively at
          maximum brick at half the cost and time.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Kitchen Image */}
          <div className="relative">
            <img
              src={brandImages[selectedBrand] || "/placeholder.svg"}
              alt={`Kitchen with ${brands.find((b) => b.id === selectedBrand)?.title} products`}
              className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300"
            />
          </div>

          {/* Brand Descriptions */}
          <div className="space-y-8">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`text-left w-full transition-opacity duration-300 ${
                  selectedBrand === brand.id ? "opacity-100" : "opacity-70"
                } hover:opacity-100 cursor-pointer`}
              >
                <h3 className="text-xl font-bold text-[#8B1A1A] mb-3">{brand.title}</h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{brand.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
