"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryItem({ image, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
      }}
    >
      {/* Glassmorphic overlay that appears on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

      {/* Image container */}
      <div className="relative w-full overflow-hidden bg-slate-100">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`w-full h-auto object-cover transition-all duration-500 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-105`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Optional: Alt text overlay on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
        <p className="text-white text-sm font-medium backdrop-blur-md bg-white/10 px-3 py-2 rounded-lg border border-white/20">
          {image.alt}
        </p>
      </div>
    </div>
  );
}
