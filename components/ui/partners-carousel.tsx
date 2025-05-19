"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Partner {
  name: string
  logo: string
}

interface PartnersCarouselProps {
  partners: Partner[]
  autoScrollSpeed?: number
  direction?: "left" | "right"
}

export default function PartnersCarousel({
  partners,
  autoScrollSpeed = 155,
  direction = "left",
}: PartnersCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Adjust speed (lower = faster)
  const duration = partners.length * autoScrollSpeed * 0.05

  return (
    <div className="w-full overflow-hidden py-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
      <div className="relative" ref={containerRef}>
        <motion.div
          className={`flex items-center gap-16 px-8 w-max ${
            direction === "right" ? "flex-row-reverse" : ""
          }`}
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 w-[160px] relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        </div>
    </div>
  )
}
