'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"


export default function FaqCard() {
    const tags = ["Easy migration", "Comfortable Pricing", "Audit logs"]

    const questions = [
        {
            question: "Migration & Support?",
            answer:
                "Easy migration from existing system to fastform, comfortable pricing, white-glove assistance, no disruption to patient",
        },

        {
            question: "Trust & Compliance?",
            answer:
                "HIPAA-ready infrastructure, BAA included, audit logs, encrypted storage",
        }
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
                            <h3 className="mb-2 font-bold text-xl sm:text-2xl lg:text-3xl">Everything you want to know — simplified.</h3>
                            <p className="text-sm italic">Questions we are asked the most.</p>

                            <div className="mt-6 pt-6">
                                <div className="space-y-4">
                                    {questions.map((q, index) => (
                                        <details className="group [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer" >
                                            <summary className="flex justify-between items-center gap-1.5 dark:bg-gray-800 backdrop-blur-2xl p-4 border border-gray-100 rounded-md text-white">
                                                <h2 className="font-medium text-lg">{q.question}</h2>

                                                <svg className="size-5 group-open:-rotate-180 transition-transform duration-300 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </summary>

                                            <p className="backdrop-blur-2xl p-2 px-4 pt-4 text-white text-left">
                                                {q.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </RevealOnView>
        </article>
    )
}
