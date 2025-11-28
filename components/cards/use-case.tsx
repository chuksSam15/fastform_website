'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"


export default function UseCaseCard() {
    const tags = ["Forms", " Dynamic Questionnaires", "Required Information"]



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
                            <h3 className="mb-2 font-bold text-xl sm:text-2xl lg:text-3xl">Real applications healthcare organizations build with fastform</h3>
                            <p className="text-sm italic">Products you can build with Fastform</p>

                            <div className="mt-6 pt-6">
                                <ol className="before:top-0 before:left-1/2 before:absolute relative space-y-4 before:bg-gray-200 before:rounded-full before:w-0.5 before:h-full before:-translate-x-1/2">
                                    <li className="relative gap-4 grid grid-cols-2">
                                        <div className="pr-4 text-right">
                                            <h3 className="font-bold text-lg">Patient intake and registration</h3>
                                            <p className="mt-0.5 text-sm">
                                                Digitize and automate the onboarding process so patients can submit their information quickly and securely.
                                            </p>
                                        </div>
                                        <div className="relative flex items-start">
                                            <span className="-left-1.5 absolute bg-blue-600 rounded-full size-3"></span>
                                        </div>
                                    </li>

                                    <li className="relative gap-4 grid grid-cols-2">
                                        <div className="relative flex justify-end items-start">
                                            <span className="-right-1.5 absolute bg-blue-600 rounded-full size-3"></span>
                                        </div>
                                        <div className="pl-4 text-left">
                                            <h3 className="font-bold text-lg">Telehealth platforms</h3>
                                            <p className="mt-0.5 text-sm">
                                                Streamline virtual consultations with forms for symptoms, consent, and pre-visit assessments.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="relative gap-4 grid grid-cols-2">
                                        <div className="pr-4 text-right">
                                            <h3 className="font-bold text-lg">Patient portals</h3>
                                            <p className="mt-0.5 text-sm">
                                                Power self-service features by letting patients update profiles, complete forms, and access records online.
                                            </p>
                                        </div>
                                        <div className="relative flex items-start">
                                            <span className="-left-1.5 absolute bg-blue-600 rounded-full size-3"></span>
                                        </div>
                                    </li>

                                    <li className="relative gap-4 grid grid-cols-2">
                                        <div className="relative flex justify-end items-start">
                                            <span className="-right-1.5 absolute bg-blue-600 rounded-full size-3"></span>
                                        </div>
                                        <div className="pl-4 text-left">
                                            <h3 className="font-bold text-lg">Appointment booking systems</h3>
                                            <p className="mt-0.5 text-sm">
                                                Collect patient details, preferences, and required information during appointment scheduling.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="relative gap-4 grid grid-cols-2">
                                        <div className="pr-4 text-right">
                                            <h3 className="font-bold text-lg">Health assessments and screenings</h3>
                                            <p className="mt-0.5 text-sm">
                                                Build dynamic questionnaires that evaluate patient health, risk factors, and clinical readiness.
                                            </p>
                                        </div>
                                        <div className="relative flex items-start">
                                            <span className="-left-1.5 absolute bg-blue-600 rounded-full size-3"></span>
                                        </div>
                                    </li>
                                </ol>
                            </div>


                        </div>
                    </div>

                </div>
            </RevealOnView>
        </article>
    )
}
