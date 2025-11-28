'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"


export default function PricingCard() {
    const tags = ["Simple-Pricing", "Friendly-Plan", "No Surprises"]

    const proPlanFeatures = [
        "20 users included",
        "5GB of storage",
        "Email support",
        "Help center access",
        "Phone support",
        "Community access",
    ]

    const starterPlanFeatures = [
        "10 users included",
        "2GB of storage",
        "Email support",
        "Help center access",
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

                    <div className="absolute inset-0 flex justify-center items-center mt-23 p-4 sm:p-6">
                        <div className="text-center">
                            <h3 className="mb-2 font-bold text-xl sm:text-2xl lg:text-3xl">Simple pricing. Powerful value. No surprises.</h3>

                            <div className="mt-6">
                                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-3xl">
                                    <div className="sm:items-center gap-4 md:gap-8 grid grid-cols-1 sm:grid-cols-2">
                                        <div className="sm:order-last bg-white/5 shadow-2xl backdrop-blur-sm p-6 lg:p-12 sm:px-8 border border-indigo-600 rounded-2xl ring-1 ring-indigo-600">
                                            <div className="text-center">
                                                <h2 className="font-medium text-lg">
                                                    Pro
                                                    <span className="sr-only">Plan</span>
                                                </h2>

                                                <p className="mt-2 sm:mt-4">
                                                    <strong className="font-bold text-3xl sm:text-4xl"> 30$ </strong>

                                                    <span className="font-medium text-sm">/month</span>
                                                </p>
                                            </div>

                                            <ul className="space-y-2 mt-6">


                                                {proPlanFeatures.map((feature, index) => (
                                                    <li key={index} className="flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                                        </svg>

                                                        <span className="">{feature}</span>
                                                    </li>
                                                ))}

                                            </ul>

                                            <a href="#" className="block bg-indigo-600 hover:bg-indigo-700 mt-8 px-12 py-3 border border-indigo-600 rounded-full hover:ring-1 hover:ring-indigo-700 font-medium text-white text-sm text-center">
                                                Get Started
                                            </a>
                                        </div>

                                        <div className="shadow-xs p-6 lg:p-12 sm:px-8 border border-gray-200 rounded-2xl">
                                            <div className="text-center">
                                                <h2 className="font-medium text-lg">
                                                    Starter
                                                    <span className="sr-only">Plan</span>
                                                </h2>

                                                <p className="mt-2 sm:mt-4">
                                                    <strong className="font-bold text-3xl sm:text-4xl"> 20$ </strong>

                                                    <span className="font-medium text-sm">/month</span>
                                                </p>
                                            </div>

                                            <ul className="space-y-2 mt-6">


                                                {starterPlanFeatures.map((feature, index) => (
                                                    <li key={index} className="flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-white">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                                        </svg>

                                                        <span className="">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <a href="#" className="block bg-white mt-8 px-12 py-3 border border-indigo-600 rounded-full hover:ring-1 hover:ring-indigo-600 font-medium text-indigo-600 text-sm text-center">
                                                Get Started
                                            </a>
                                        </div>
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
