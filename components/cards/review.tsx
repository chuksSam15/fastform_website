'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"

export default function ReviewCard() {
    const tags = ["Customizable", "Game-Changer", "intuitive"]

    const reviews = [
        {
            name: "Eric Johnson",
            role: "CTO, HealthPlus",
            content:
                "Fastform transformed our patient intake process. The customizable forms and seamless integrations saved us countless hours and improved patient satisfaction.",
            imageSrc: "/images/cto.png",
        },
        {
            name: "Sarah Lee",
            role: "Head of Operations, CareWell Clinic",
            content:
                "Implementing Fastform was a game-changer for our clinic. The HIPAA-compliant forms and AI-driven analytics have enhanced our workflow and patient engagement significantly.",
            imageSrc: "/images/hop.png",
        },
        {
            name: "Michael Smith",
            role: "Product Designer, MedSolutions",
            content:
                "Fastform's intuitive design and robust features made it easy for us to create patient-centric forms. The integration with our EHR system was seamless, boosting our efficiency.",
            imageSrc: "/images/prod_designer.png",
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
                            <h3 className="mt-3 mb-2 font-bold text-xl sm:text-2xl lg:text-3xl">Healthcare teams trust FastForm — and patients love it.</h3>
                            <p className="text-sm italic">What our Clients say about Fastform</p>

                            <div className="mt-6">
                                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
                                    <div className="gap-8 grid grid-cols-1 md:grid-cols-3">


                                        {reviews.map((review, index) => (
                                            <div className="bg-white/5 shadow-md hover:shadow-2xl backdrop-blur-sm p-2 border border-white/10 rounded-xl text-white/90 text-left hover:rotate-3 hover:scale-105 transition-transform duration-300 cursor-pointer" key={index}>
                                                <Image width={100} height={100} src={review.imageSrc} alt="" className="rounded-lg w-full object-cover aspect-video" />

                                                <div className="mt-4">
                                                    <div className="flex justify-between items-center gap-4">
                                                        <div>
                                                            <h3 className="font-semibold text-lg/tight text-left">
                                                                {review.name}
                                                            </h3>

                                                            <p className="mt-0.5 text-sm text-left">{review.role}</p>
                                                        </div>

                                                        <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-90 text-[#0072b1] dark:text-white transition-opacity">
                                                            <svg viewBox="0 0 20 20" fill="currentColor" className="size-7">
                                                                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    <p className="mt-2 text-left text-pretty">
                                                        {review.content}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </RevealOnView>
        </article>
    )
}
