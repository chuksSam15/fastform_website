'use client'

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import { useState } from "react"
import {
  Palette,
  UserCircle,
  Cable,
  Brain,
  ShieldCheck,
  Workflow,
} from "lucide-react"
import { motion } from "framer-motion"

export default function SolutionCard() {
  const tags = ["Lost Patients", "Missed Revenue", "Incomplete Forms"]

  const offerings = [
    { icon: Palette, text: "Beautiful branded forms in minutes" },
    { icon: UserCircle, text: "Patient centric ergonomics" },
    { icon: Cable, text: "Snappy, reliable integrations to your existing systems" },
    { icon: Brain, text: "AI driven analytics and insights" },
    { icon: ShieldCheck, text: "HIPAA compliant and security by design" },
    { icon: Workflow, text: "Build complex workflows easily" },
  ]

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
          {/* Image */}
          <div
            className={"relative w-full aspect-4/3 sm:aspect-video lg:aspect-auto lg:h-full"}
          >
            <Image
              src={"/images/project-1.webp"}
              alt={"hero section image"}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={true}
              className="opacity-44 brightness-90 object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/30 pointer-events-none" />
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

          <div className="absolute inset-0 flex justify-center items-center p-4 sm:p-6">
            <div className="text-center">
              <h3 className="mb-3 font-bold text-xl sm:text-2xl lg:text-3xl">WHAT WE OFFER</h3>

              {/* Animated List */}
              <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 pt-6 text-center">
                {offerings.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={text}
                    className="flex flex-col justify-center items-center gap-3 bg-white/5 shadow-md hover:shadow-lg backdrop-blur-sm p-6 border border-white/10 rounded-xl text-white/90 text-sm sm:text-base hover:scale-[1.02] transition-transform duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <Icon className="mb-2 w-10 h-10 text-red-400" />
                    <span className="font-medium">{text}</span>
                  </motion.li>
                ))}
              </ul>


            </div>
          </div>

        </div>
      </RevealOnView>
    </article>
  )
}
