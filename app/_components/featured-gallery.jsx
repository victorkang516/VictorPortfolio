"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../../components/ui/section-header";
import { ButtonLink } from "@/components/ui/button-link";
import { galleryImages } from "@/data/galleryImages";

export default function FeaturedGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Select first 3 images from gallery
  const featuredImages = galleryImages.slice(0, 3);

  return (
    <section
      className="bg-linear-to-b from-white to-gray-50 py-16 md:py-32 lg:py-40"
      id="gallery"
    >
      <div className="px-4 md:px-6 lg:px-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionHeader className="text-slate-900">Arts Gallery</SectionHeader>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            A collection of my graphic design work and drawing.
          </p>
        </div>

        {/* Dynamic Width Image Grid */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 md:mb-16 lg:mb-20">
          {featuredImages.map((image, index) => {
            const isHovered = hoveredIndex === index;
            const isWide = isHovered || (hoveredIndex === null && index === 0);

            return (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-in-out cursor-default ${
                  isWide ? "lg:w-2/4" : "lg:w-1/4"
                } h-[400px] lg:h-[500px]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Gallery Button */}
        <div className="flex justify-center">
          <ButtonLink
            href="/gallery"
            variant="outline"
            className="px-8 py-6 text-base"
          >
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
