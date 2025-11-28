'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"

export default function ProjectCard() {
  const tags = ["Patient-Facing", "HIPAA-Compliant", "Secure software"]

  return (
    <article className={"group relative lg:h-[calc(100svh-2rem)]"}>
      <RevealOnView
        delay={0.06}
        className="shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] p-1 border border-white/10 rounded-3xl lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, #7f1d1d, #dc2626)`,
        }}
      >
        <div className="relative bg-black rounded-[1.35rem] lg:h-full overflow-hidden">
          {/* Background Image */}
          <div className={"relative w-full aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-full"}>
            <Image
              src={"/images/project-1.webp"}
              alt={"hero section image"}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={true}
              className="object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Top-left tags */}
          <div className="top-4 left-4 absolute flex flex-wrap gap-2 pointer-events-none">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-black/50 backdrop-blur-sm border-white/20 text-white pointer-events-auto"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Content Section */}
          <div className="absolute inset-0 flex items-center p-4 sm:p-8 lg:p-12">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-8 lg:gap-12 mx-auto w-full max-w-7xl">

              {/* Text content on the left */}
              <div className="z-10 lg:flex-1 space-y-6 lg:space-y-8 lg:max-w-2xl lg:text-left text-center">
                <div className="space-y-4">
                  <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    Build Patient-Facing,{" "}
                    <span className="bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 text-transparent">
                      HIPAA-Compliant
                    </span>{" "}
                    Applications
                  </h3>
                  <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed">
                    Transform healthcare delivery with beautiful, secure software — built in hours, not months.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4">
                  <button className="bg-linear-to-r from-cyan-500 hover:from-cyan-400 to-blue-600 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300">
                    Start Building Free
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 border border-white/30 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300">
                    View Demo
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-white/60 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></div>
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></div>
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></div>
                    <span>99.9% Uptime</span>
                  </div>
                </div>
              </div>

              {/* Desktop mockup on the right */}
              <div className="hidden lg:block relative lg:flex-1">
                <div className="relative ml-auto w-full max-w-2xl animate-float">
                  {/* Glow effect */}
                  <div className="-z-10 absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full scale-110"></div>

                  {/* Laptop mockup */}
                  <div
                    className="relative w-full aspect-16/10"
                    style={{
                      transform: 'perspective(1200px) rotateY(-12deg) rotateX(3deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="relative w-full h-full">
                      {/* Screen */}
                      <div className="relative bg-gray-900 shadow-2xl border-4 border-gray-800 sm:border-8 rounded-t-2xl w-full h-[92%] overflow-hidden">
                        <Image
                          src="/images/desktop.png"
                          alt="Healthcare form interface"
                          fill
                          className="object-cover"
                        />
                        {/* Screen glare */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                      </div>

                      {/* Laptop base */}
                      <div
                        className="bottom-0 left-1/2 absolute bg-linear-to-b from-gray-700 to-gray-800 shadow-xl rounded-b-xl w-[110%] h-[8%] -translate-x-1/2"
                        style={{ transform: 'translateZ(-20px)' }}
                      >
                        <div className="bg-gray-600 mx-auto mt-1 rounded-full w-1/3 h-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnView>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </article>
  )
}