import Image from 'next/image'

export default function PMIIStudyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

                {/* HERO */}
                <section className="space-y-8">
                    <p className="uppercase tracking-[0.3em] text-sm text-violet-300">
                        Case Study
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        PMII UNPAM Platform
                    </h1>

                    <p className="text-zinc-400 text-xl leading-9 max-w-4xl">
                        A centralized organizational platform built using
                        Next.js App Router, PostgreSQL, Prisma ORM,
                        JWT Authentication, and Supabase Storage.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {[
                            'Next.js',
                            'PostgreSQL',
                            'Prisma',
                            'JWT',
                            'Supabase',
                            'TailwindCSS',
                        ].map((item) => (
                            <div
                                key={item}
                                className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03]"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ARCHITECTURE */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-blue-300">
                            Architecture
                        </p>

                        <h2 className="text-4xl font-bold">
                            System Architecture Overview
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8">
                            The platform uses a modular architecture with
                            separated frontend, backend API, and data layer.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <Image
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/mermaid-diagram.webp"
                            alt="Architecture Diagram"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </section>

                {/* USE CASE */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-violet-300">
                            System Analysis
                        </p>

                        <h2 className="text-4xl font-bold">
                            Use Case Diagram
                        </h2>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <Image
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/mermaid-diagram%20(1).webp"
                            alt="Use Case Diagram"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </section>

                {/* ERD */}
                <section className="space-y-8">
                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-emerald-300">
                            Database Design
                        </p>

                        <h2 className="text-4xl font-bold">
                            Entity Relationship Diagram
                        </h2>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <Image
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/mermaid-diagram%20(3).webp"
                            alt="ERD"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </section>

                {/* TECHNICAL FLOW */}
                <section className="grid lg:grid-cols-2 gap-10">

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">
                            Authentication Flow
                        </h3>

                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                            <Image
                                src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/mermaid-diagram%20(4).webp"
                                alt="Sequence Diagram"
                                width={1200}
                                height={1600}
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">
                            Content Publishing Workflow
                        </h3>

                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                            <Image
                                src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/mermaid-diagram%20(2).webp"
                                alt="Activity Diagram"
                                width={1200}
                                height={1600}
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                </section>

            </div>
        </main>
    )
}