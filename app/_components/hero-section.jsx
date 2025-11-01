"use client";

import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { ButtonLink } from "@/components/ui/button-link";
import { useEffect, useRef, useState } from "react";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";
import Image from "next/image";

const TechIcon = ({ icon: Icon, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex flex-col items-center gap-1 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      title={label}
    >
      <Icon className="text-gray-900 text-3xl lg:text-4xl hover:text-teal-400 transition-colors cursor-default" />
      <span className="text-gray-900 text-xs font-medium">{label}</span>
    </div>
  );
};

const StatusBadge = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex items-center gap-2 bg-teal-300/30 border border-teal-400 text-teal-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
      Available for opportunities
    </div>
  );
};

const techStackLogos = [
  { icon: SiHtml5, label: "HTML" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiUnity, label: "Unity" },
];

export default function HeroSection() {
  const [animateLetters, setAnimateLetters] = useState(false);

  const bgRef = useRef(null);

  useEffect(() => {
    // Trigger letter animation on mount
    const timer = setTimeout(() => {
      setAnimateLetters(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const bgElement = bgRef.current;
      if (bgElement) {
        bgElement.style.top = `${scrollPos * 0.7}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen lg:h-[1080px]">
      <div
        className="flex lg:flex-row flex-col mx-auto pt-24 md:pt-32 md:pb-12 lg:py-48 px-4 md:px-8 max-w-6xl z-10 gap-8 lg:gap-12"
        id="about-me"
      >
        <div
          className={`flex-1 flex flex-col justify-center items-start gap-6 order-2 lg:order-1`}
        >
          {/* Main Headline */}
          <div>
            <h1 className="text-3xl lg:text-6xl/18 font-bold mb-2 z-10">
              <span className="text-sky-600">Frontend Developer </span>
              <span>with UI/UX Design in Mind</span>
            </h1>
          </div>

          {/* Value Proposition */}
          <div className="text-gray-900 text-base lg:text-xl leading-relaxed max-w-lg">
            👋 Hi, I'm Victor Kang — a frontend developer who builds responsive,
            user-centered web platforms that solve real user pain points and
            look visually appealing.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/projects" size="lg">
              View My Projects
            </ButtonLink>
            <ButtonLink
              href="./resume/victor-resume-2025-november.docx.pdf"
              variant="outline"
              size="lg"
            >
              View Resume
            </ButtonLink>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center transition-all cursor-default order-1 lg:order-2">
          <Image
            src="/img/home/potrait.jpg"
            alt="Victor Kang Portrait"
            className="object-contain w-[280px] md:w-[350px] lg:w-[400px] h-auto"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Infinite Moving Logos */}
      <div className="w-full flex justify-center px-4 md:px-8 mt-8 md:mt-0 lg:-mt-34">
        <div className="max-w-6xl w-full">
          {/* TODO - fix the sudden jump of logo layout at the end  */}
          <InfiniteMovingLogos
            items={techStackLogos}
            direction="left"
            speed="fast"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
