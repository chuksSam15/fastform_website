import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
  isTransition?: boolean
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
  isTransition = false,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] p-1 border border-white/10 rounded-3xl lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative bg-black rounded-[1.35rem] lg:h-full overflow-hidden">
          {/* Image */}
          <div
            className={cn(
              "relative w-full lg:h-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto",
              imageContainerClassName,
            )}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30 pointer-events-none" />
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

          {isTransition ? (
            <div className="absolute inset-0 flex justify-center items-center p-4 sm:p-8">
              <div className="text-center">
                <h3 className="mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl">{title}</h3>
                <p className="mx-auto mb-8 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">{subtitle}</p>
                <div className="flex justify-center">
                  <div className="animate-bounce">
                    <ChevronDown className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex justify-center items-center p-4 sm:p-6">
              <div className="max-w-lg text-center">
                <h3 className="mb-3 font-bold text-xl sm:text-2xl lg:text-3xl">{title}</h3>
                <p className="mb-4 text-white/80 text-sm sm:text-base leading-relaxed">{subtitle}</p>
              </div>
            </div>
          )}
        </div>
      </RevealOnView>
    </article>
  )
}
