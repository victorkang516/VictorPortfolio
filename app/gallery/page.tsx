"use client";

import SectionHeader from "@/components/ui/section-header";
import { galleryImages } from "@/data/galleryImages";
import GalleryItem from "./_components/gallery-item";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <div className="relative px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-16 md:pb-24 lg:pb-32 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionHeader className="text-slate-900">Arts Gallery</SectionHeader>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            A collection of my graphic design work, marketing materials, event
            posters, branding, and creative visuals from various projects and
            collaborations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="masonry-item">
              <GalleryItem image={image} index={index} />
            </div>
          ))}
        </div>

        {/* Gallery Count */}
        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <p className="text-slate-500 text-sm">
            Showing {galleryImages.length} design works
          </p>
        </div>
      </div>

      {/* Custom CSS for Masonry Layout */}
      <style jsx>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </main>
  );
}
