import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Patients Slip Through the Cracks",
      subtitle:
        "Nearly 40% of new patients never finish your intake forms. They get overwhelmed, drop off, and end up booking somewhere else. For most practices, that means dozens of lost opportunities every month—not because of your care, but because of a broken process before they ever walk in the door",
      imageSrc: "/images/project-1.webp", // Using same background as card 3
      tags: ["Lost Patients", "Missed Revenue", "Incomplete Forms"],
      href: "#",
      priority: true,
      gradientFrom: "#7f1d1d",
      gradientTo: "#dc2626",
    },
    {
      title: "Your Team Is Stuck Doing Data Entry",
      subtitle:
        "Your staff spend hours each day re-typing the same patient information into multiple systems—EHRs, insurance portals, calendars, billing platforms. It’s repetitive, error-prone, and exhausting. That wasted time adds up to tens of thousands in labor costs annually, not to mention the burnout from doing robotic work instead of helping patients.",
      imageSrc: "/images/project-1.webp", // Using same background as card 3
      tags: ["Wasted Hours", "Manual Work", "Staff Burnout"],
      href: "#",
      priority: false,
      gradientFrom: "#92400e",
      gradientTo: "#f59e0b",
    },
    {
      title: "Flying Blind on Marketing Spend",
      subtitle:
        "Practices invest thousands every month into Google Ads, Psychology Today, and other referral sources—but have no clear picture of what’s actually working. Without visibility, it’s impossible to double down on the channels that bring quality patients and cut the ones that don’t. The result? Marketing dollars disappear with little to show for it.",
      imageSrc: "/images/project-1.webp",
      tags: ["No Visibility", "Ad Waste", "Poor ROI"],
      href: "#",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#6b7280",
    },
    {
      title: "So What Do We Offer?",
      subtitle:
        "One Platform. Everything Connected. Stop losing patients to broken intake processes. Start converting at 85%+ with forms that actually work. Watch patient data flow seamlessly into your EHR. Finally see which marketing channels bring your best patients.",
      imageSrc: "/images/project-1.webp", // Using same background as card 3
      tags: ["One Platform", "Everything Connected", "85% Conversion"],
      href: "#solution",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#4f46e5",
      isTransition: true,
    },
    {
      title: "Smarter Forms That Patients Finish",
      subtitle:
        "Create HIPAA-compliant intake forms in minutes with our drag-and-drop builder and healthcare-ready templates. The AI Copilot helps at every step—suggesting better question flow, flagging PHI issues, and even generating form components from plain English. Patients only see what’s relevant, so they actually complete the process instead of dropping off",
      imageSrc: "/images/project-1.webp", // Using same background as card 3
      tags: ["Patient-Friendly Design", "HIPAA-Ready Templates", "Higher Completion Rates"],
      href: "#ai-features",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Automations That Do the Work for You",
      subtitle:
        "Fastform connects seamlessly to your EHR, scheduling, billing, and communication tools. With AI-powered workflows, data flows where it belongs—insurance gets verified automatically, appointments book themselves, and records stay up to date. No more copy-paste, no more errors, and hours of staff time saved every day.",
      imageSrc: "/images/project-2.webp",
      tags: ["Zero Manual Entry", "Error-Free Sync", "Time Savings"],
      href: "#beautiful-forms",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "AI That Builds and Engages",
      subtitle:
        "AI works in two powerful ways with Fastform - Copilot for Builders: AI guides you while you design, optimize, and stay HIPAA-compliant. AI Agents for Patients: Add chatbots and assistants directly into your apps—answering FAQs, or guiding intake. This dual approach means AI helps you build faster and gives your patients a smarter, more engaging experience",
      imageSrc: "/images/project-3.webp",
      tags: ["AI Copilot for Builders", "In-App AI Agents", "Smarter Patient Experience"],
      href: "#perfect-sync",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Insights That Eliminate Guesswork",
      subtitle:
        " Finally understand what’s working. Fastform’s analytics show exactly which marketing channels bring real patients, where forms cause drop-offs, non-HIPAA compliant components, and how changes impact conversion, so you can continuously improve without the guesswork.",
      imageSrc: "/images/project-4.webp",
      tags: ["Better Understanding", "Drop-Off Analysis", "HIPAA compliance monitor"],
      href: "#smart-insights",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Import & Deploy in One Click",
      subtitle:
        "Already have a Next.js project? Import it directly into Fastform, let AI analyze and optimize the structure, then deploy with a single click. No DevOps required. Whether you’re starting fresh or migrating an existing app, Fastform takes you from code to production in minutes.",
      imageSrc: "/images/project-5.webp",
      tags: ["Next.js Ready", "One-Click Deployment"],
      href: "#psychiatry-template",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
  ]

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

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
                isTransition={p.isTransition}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
