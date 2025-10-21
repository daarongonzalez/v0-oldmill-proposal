"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

const brickStyles = [
  {
    id: "millhouse",
    name: "Millhouse",
    description: "Old savoy, barn house aesthetic",
    image: "/red-brick-texture-millhouse-style.jpg",
  },
  {
    id: "cascade",
    name: "Cascade",
    description: "Soft texture, modern aesthetic",
    image: "/white-brick-texture-cascade-style.jpg",
  },
  {
    id: "boston-mill",
    name: "Boston Mill",
    description: "Old savoy, barn house aesthetic",
    image: "/dark-grey-brick-texture-boston-mill-style.jpg",
  },
  {
    id: "shanghai",
    name: "Shanghai",
    description: "Old savoy, modern aesthetic",
    image: "/orange-brick-texture-shanghai-style.jpg",
  },
]

const layoutPatterns = [
  { id: "running-bond", name: "Running Bond", image: "/running-bond-brick-pattern.jpg" },
  { id: "herringbone", name: "Herringbone", image: "/herringbone-brick-pattern.jpg" },
]

const groutColors = [
  { id: "white", name: "White", color: "#E8E8E8" },
  { id: "beige", name: "Beige", color: "#D4C4B0" },
]

export function VisualizerSection() {
  const [selectedBrick, setSelectedBrick] = useState<string | null>(null)
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null)
  const [selectedGrout, setSelectedGrout] = useState<string | null>(null)

  return (
    <section className="bg-[#F5F1E8] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">See What Your Space Can Be</h2>
          <p className="text-base text-[#4a4a4a]">
            Use our custom visualizer to see what our patterns
            <br />
            would look like in your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-16">
          {/* Left Column - Upload Photo */}
          <div className="flex items-center">
            <div className="border-2 border-dashed border-[#8B1A1A]/30 rounded-lg p-8 lg:p-12 text-center bg-white/50 w-full">
              <Upload className="w-12 h-12 mx-auto mb-4 text-[#8B1A1A]/50" />
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Upload Your Photo</h3>
              <p className="text-sm text-[#4a4a4a] mb-4">
                Photos with clear lighting do best
                <br />
                when using our visualizer
              </p>
              <Button
                variant="outline"
                className="border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white bg-transparent"
              >
                Choose File
              </Button>
            </div>
          </div>

          {/* Right Column - All Selection Options */}
          <div className="space-y-12">
            {/* Brick Style Selection */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-6">Pick your Brick Style</h3>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#8B1A1A]/30 scrollbar-track-transparent">
                {brickStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedBrick(style.id)}
                    className={`group text-center transition-all flex-shrink-0 w-[calc(45%-12px)] ${selectedBrick === style.id ? "scale-105" : ""}`}
                  >
                    <div
                      className={`rounded-lg overflow-hidden mb-3 border-4 transition-colors ${
                        selectedBrick === style.id ? "border-[#8B1A1A]" : "border-transparent"
                      }`}
                    >
                      <img
                        src={style.image || "/placeholder.svg"}
                        alt={style.name}
                        className="w-full aspect-square object-cover scale-90"
                      />
                    </div>
                    <h4 className="font-bold text-[#8B1A1A] mb-1">{style.name}</h4>
                    <p className="text-xs text-[#4a4a4a]">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Pattern Selection */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-6">Pick your Layout Pattern</h3>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#8B1A1A]/30 scrollbar-track-transparent">
                {layoutPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(pattern.id)}
                    className={`group text-center transition-all flex-shrink-0 w-[calc(45%-12px)] ${selectedPattern === pattern.id ? "scale-105" : ""}`}
                  >
                    <div
                      className={`rounded-lg overflow-hidden mb-3 border-4 transition-colors ${
                        selectedPattern === pattern.id ? "border-[#8B1A1A]" : "border-transparent"
                      }`}
                    >
                      <img
                        src={pattern.image || "/placeholder.svg"}
                        alt={pattern.name}
                        className="w-full aspect-square object-cover scale-90"
                      />
                    </div>
                    <h4 className="font-bold text-[#8B1A1A]">{pattern.name}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Grout Color Selection */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-6">Pick your Grout Color</h3>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#8B1A1A]/30 scrollbar-track-transparent">
                {groutColors.map((grout) => (
                  <button
                    key={grout.id}
                    onClick={() => setSelectedGrout(grout.id)}
                    className={`group text-center transition-all flex-shrink-0 w-[calc(45%-12px)] ${selectedGrout === grout.id ? "scale-105" : ""}`}
                  >
                    <div
                      className={`rounded-lg overflow-hidden mb-3 border-4 transition-colors ${
                        selectedGrout === grout.id ? "border-[#8B1A1A]" : "border-transparent"
                      }`}
                    >
                      <div className="w-full aspect-square scale-90" style={{ backgroundColor: grout.color }} />
                    </div>
                    <h4 className="font-bold text-[#8B1A1A]">{grout.name}</h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Result Preview - Full Width Below Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-6">
            Here's What Your Space
            <br />
            Can Look Like
          </h3>
          <div className="border-2 border-dashed border-[#8B1A1A]/30 rounded-lg aspect-[4/3] bg-white/50 flex items-center justify-center">
            <p className="text-[#4a4a4a] text-center">Your visualization will appear here</p>
          </div>
        </div>
      </div>
    </section>
  )
}
