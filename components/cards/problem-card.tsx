"use client";

import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealOnView from "@/components/reveal-on-view";
import { useState, useEffect } from "react";

export default function ProblemCard() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Your Team Is Stuck Doing Data Entry",
      subtitle:
        "Your staff spend hours each day re-typing the same patient information into multiple systems—EHRs, insurance portals, calendars, billing platforms. It’s repetitive, error-prone, and exhausting. That wasted time adds up to tens of thousands in labor costs annually, not to mention the burnout from doing robotic work instead of helping patients.",
      imageSrc: "/images/project-4.webp",
      tags: ["Wasted Hours", "Manual Work", "Staff Burnout"],
      gradientFrom: "#92400e",
      gradientTo: "#f59e0b",
      imageSrcTwo: "/images/dashboard_two.png"
    },
    {
      title: "Flying Blind on Marketing Spend",
      subtitle:
        "Practices invest thousands every month into Google Ads, Psychology Today, and other referral sources—but have no clear picture of what’s actually working. Without visibility, it’s impossible to double down on the channels that bring quality patients and cut the ones that don’t. The result? Marketing dollars disappear with little to show for it.",
      imageSrc: "/images/project-1.webp",
      tags: ["No Visibility", "Ad Waste", "Poor ROI"],
      gradientFrom: "#1f2937",
      gradientTo: "#6b7280",
      imageSrcTwo: "/images/dashboard.png"
    },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <article className="group relative lg:h-[calc(100svh-2rem)]">
      <RevealOnView
        delay={0.06}
        className="shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] p-1 border border-white/10 rounded-3xl lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, ${slide.gradientFrom}, ${slide.gradientTo})`,
        }}
      >
        <div className="relative bg-black rounded-[1.35rem] lg:h-full overflow-hidden transition-all duration-700">
          {/* Background Image */}
          <div className="relative w-full lg:h-full aspect-4/3 sm:aspect-video lg:aspect-auto">
            <Image
              src={slide.imageSrc}
              alt={slide.title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
              className="opacity-44 brightness-70 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Tags */}
          <div className="top-4 left-4 absolute flex flex-wrap gap-2">
            {slide.tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-black/50 backdrop-blur-sm border-white/20 text-white"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-start items-center mt-7 p-6 text-center transition-all duration-700">
            <div className="mt-12">
              <h3 className="mb-3 font-bold text-white text-xl sm:text-2xl lg:text-3xl">
                {slide.title}
              </h3>
              <p className="mb-6 text-white/80 text-sm sm:text-base leading-relaxed">
                {slide.subtitle}
              </p>
              
            </div>

            <div className="w-full h-[65%]">
              <div className="border w-full" />
              <Image
                src={slide.imageSrcTwo}
                alt="Image"
                width={400}
                height={400}
                className="hover:grayscale-0 mx-auto rounded-xl w-full h-full opacit-80 mix-blend-normal"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="top-1/2 left-4 absolute bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white -translate-y-1/2"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="top-1/2 right-4 absolute bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full text-white -translate-y-1/2"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="bottom-4 left-1/2 absolute flex space-x-2 -translate-x-1/2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${current === i ? "bg-white" : "bg-gray-500/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </RevealOnView>
    </article>
  );
}
