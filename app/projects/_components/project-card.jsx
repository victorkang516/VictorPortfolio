"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Glassmorphic Card Container */}
      <div className="relative h-full backdrop-blur-xl bg-white/50 shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-300 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
            height={400}
            width={400}
          />
        </div>

        {/* Content Section - Glassmorphic */}
        <div className="relative p-6 backdrop-blur-md bg-white/40 border-t border-white/30 h-full">
          {/* Title and Date */}
          <div className="flex flex-col gap-1 mb-3">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              {project.title}
            </h2>
            <p className="text-xs text-gray-600">{project.date}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-800 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills - Glassmorphic */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm bg-teal-500/20 text-teal-800 border border-teal-400/30 hover:bg-teal-500/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            {project.links.map((link, idx) => (
              <ButtonLink
                key={idx}
                href={link.url}
                variant={link.type === "primary" ? "default" : "outline"}
                size="default"
                className="w-full"
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
