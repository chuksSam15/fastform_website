import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import HeroCard from "@/components/cards/hero-card"
import ProblemCard from "@/components/cards/problem-card"
import SolutionCard from "@/components/cards/solution-card"
import UseCaseCard from "@/components/cards/use-case"
import ReviewCard from "@/components/cards/review"
import PricingCard from "@/components/cards/pricing"
import FaqCard from "@/components/cards/faq-card"

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-[420px_1fr] h-full">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:top-4 lg:sticky lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex flex-col justify-between bg-neutral-900/60 p-6 sm:p-8 border border-white/10 rounded-3xl h-full overflow-hidden"
              staggerChildren
            >
              {/* Texture background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="font-extrabold text-2xl tracking-tight">fastform</div>
                  <div className="bg-white/60 rounded-full w-2 h-2" aria-hidden="true" />
                </div>

                <AnimatedHeading
                  className="font-black text-4xl sm:text-5xl leading-[1.05] tracking-tight"
                  lines={["Your Patients Hate", "Your Intake Process"]}
                />

                <p className="mt-4 max-w-[42ch] text-white/70 text-lg">
                  Beautiful forms that integrate with everything. Set up in 1 day. Watch your practice transform.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="#demo">
                      See 3-Minute Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent rounded-full">
                    <Link href="#examples">View Live Examples</Link>
                  </Button>
                </div>

                <div className="space-y-2 mt-8">
                  <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1">🔒 HIPAA Compliant</span>
                    <span className="flex items-center gap-1">⚡ 500+ Practices</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1">🏥 SimplePractice Partner</span>
                    <span className="flex items-center gap-1">✨ 4.9/5 Patient Experience</span>
                  </div>
                </div>


              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT */}
          <div className="space-y-4">
            <HeroCard />
            <ProblemCard />
            <SolutionCard />
            <UseCaseCard />
            <ReviewCard />
            <PricingCard />
            <FaqCard />
          </div>
        </div>
      </section>
    </main>
  )
}
