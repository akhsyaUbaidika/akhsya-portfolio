import Image from 'next/image'

export default function PMIIStudyPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

                {/* HERO */}
                <section className="space-y-8">

                    <div className="space-y-4">
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
                    </div>

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

                    {/* ENGINEERING OVERVIEW */}
                    <div className="grid md:grid-cols-3 gap-6 pt-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-zinc-500 text-sm">
                                Architecture Style
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                Modular Monolith
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                Frontend, API routes, and data access are
                                centralized inside a single Next.js application
                                for easier deployment and maintenance.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-zinc-500 text-sm">
                                Authentication
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                JWT-Based Security
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                Administrative actions are protected using
                                signed JWT tokens with middleware verification
                                on secured routes.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-zinc-500 text-sm">
                                Storage System
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                Supabase Object Storage
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                Media assets are stored separately from the
                                database to improve scalability and simplify
                                image management.
                            </p>
                        </div>

                    </div>

                </section>

                {/* ARCHITECTURE */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-blue-300">
                            Architecture
                        </p>

                        <h2 className="text-4xl font-bold">
                            System Architecture Overview
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            The platform adopts a modular monolithic architecture
                            using Next.js App Router. Frontend rendering,
                            backend API routes, authentication services,
                            and database access are organized into separated
                            logical layers while remaining inside a unified codebase.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/pmiiunpam/architecture-diagram.webp"
                            alt="Architecture Diagram"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>

                    {/* ARCHITECTURE INSIGHT */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Layer Separation
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                The system separates presentation logic,
                                API handling, authentication, and persistence
                                layers to improve maintainability and reduce
                                coupling between components.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Server Components Strategy
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Public-facing pages primarily use Server Components
                                for SEO optimization and faster initial rendering,
                                while interactive dashboard components utilize
                                Client Components where necessary.
                            </p>
                        </div>

                    </div>

                </section>

                {/* ENGINEERING DECISIONS */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-orange-300">
                            Engineering Decisions
                        </p>

                        <h2 className="text-4xl font-bold">
                            Technical Considerations
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            Several technical decisions were made to balance
                            development speed, scalability, maintainability,
                            and deployment simplicity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Next.js App Router?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                App Router provides nested layouts,
                                server rendering capabilities, and
                                cleaner route organization suitable
                                for content-heavy organizational platforms.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Prisma ORM?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Prisma enables type-safe database operations,
                                cleaner query abstraction, and simplified
                                schema migrations for CRUD-focused systems.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why JWT Authentication?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                JWT authentication simplifies stateless
                                session management and integrates efficiently
                                with API-based dashboard operations.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Supabase Storage?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Separating media assets from the relational
                                database reduces storage overhead and improves
                                scalability for documentation galleries.
                            </p>
                        </div>

                    </div>

                </section>

                {/* USE CASE */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-violet-300">
                            System Analysis
                        </p>

                        <h2 className="text-4xl font-bold">
                            Use Case Diagram
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            The use case diagram models interactions between
                            public users and administrators. Public users
                            consume organizational content, while administrators
                            manage articles, documentation, and media uploads.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/pmiiunpam/useCase-diagram.webp"
                            alt="Use Case Diagram"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-2xl font-semibold mb-4">
                            Access Control Strategy
                        </h3>

                        <p className="text-zinc-400 leading-8">
                            Public users can freely access informational content
                            without authentication, while administrative
                            operations are protected through JWT verification
                            middleware and secured API routes.
                        </p>
                    </div>

                </section>

                {/* ERD */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-emerald-300">
                            Database Design
                        </p>

                        <h2 className="text-4xl font-bold">
                            Entity Relationship Diagram
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            The relational schema is designed to support
                            article publishing, documentation management,
                            media galleries, and administrator authentication
                            using normalized entity relationships.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/pmiiunpam/entityRelationship-diagram.webp"
                            alt="ERD"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Database Considerations
                            </h3>

                            <ul className="space-y-4 text-zinc-400 leading-8">
                                <li>
                                    • Unique slug fields are used to generate
                                    SEO-friendly dynamic routes.
                                </li>

                                <li>
                                    • Documentation images are separated into
                                    dedicated relational tables to support
                                    scalable gallery management.
                                </li>

                                <li>
                                    • Cascading delete constraints prevent
                                    orphaned media records.
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Data Integrity
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Prisma ORM enforces schema consistency through
                                typed database access and migration tracking,
                                reducing risks associated with manual queries
                                and inconsistent data structures.
                            </p>
                        </div>

                    </div>

                </section>

                {/* SECURITY */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-red-300">
                            Security
                        </p>

                        <h2 className="text-4xl font-bold">
                            Authentication & Authorization
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            Administrative endpoints are secured using
                            JWT authentication and password hashing
                            to prevent unauthorized access.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-white/10 p-6 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                JWT Authentication
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Protected routes require signed JWT tokens
                                validated on every administrative request
                                before accessing dashboard resources.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 p-6 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Password Security
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                User passwords are hashed using bcrypt
                                before persistence to prevent plain-text
                                credential exposure.
                            </p>
                        </div>

                    </div>

                </section>

                {/* TECHNICAL FLOW */}
                <section className="space-y-12">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-cyan-300">
                            Technical Flow
                        </p>

                        <h2 className="text-4xl font-bold">
                            System Workflow Diagrams
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            The following diagrams illustrate the internal
                            authentication process and article publishing
                            workflow implemented inside the system.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* AUTH FLOW */}
                        <div className="space-y-6">

                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">
                                    Authentication Flow
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    This sequence diagram demonstrates how
                                    administrator credentials are validated,
                                    authenticated, and transformed into
                                    JWT-based sessions.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                                <img
                                    src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/pmiiunpam/sequence-diagram.webp"
                                    alt="Sequence Diagram"
                                    width={1200}
                                    height={1600}
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-2xl font-semibold mb-4">
                                    Security Validation Process
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    The API validates incoming credentials,
                                    compares hashed passwords using bcrypt,
                                    and generates signed JWT tokens for
                                    authenticated sessions.
                                </p>
                            </div>

                        </div>

                        {/* CONTENT FLOW */}
                        <div className="space-y-6">

                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">
                                    Content Publishing Workflow
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    This activity diagram illustrates the
                                    article publishing process from form
                                    submission to database persistence.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                                <img
                                    src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/pmiiunpam/activity-diagram.webp"
                                    alt="Activity Diagram"
                                    width={1200}
                                    height={1600}
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-2xl font-semibold mb-4">
                                    Validation & Persistence
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    Before article creation, the API validates
                                    authentication tokens, checks payload
                                    completeness, generates unique slugs,
                                    and stores validated content into PostgreSQL.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* PROJECT METRICS */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-yellow-300">
                            Project Metrics
                        </p>

                        <h2 className="text-4xl font-bold">
                            Technical Overview
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">5+</h3>
                            <p className="text-zinc-500 mt-2">
                                API Routes
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">JWT</h3>
                            <p className="text-zinc-500 mt-2">
                                Auth Strategy
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">Prisma</h3>
                            <p className="text-zinc-500 mt-2">
                                ORM Layer
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">SSR</h3>
                            <p className="text-zinc-500 mt-2">
                                Rendering Strategy
                            </p>
                        </div>

                    </div>

                </section>

                {/* FUTURE IMPROVEMENTS */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-pink-300">
                            Future Improvements
                        </p>

                        <h2 className="text-4xl font-bold">
                            Challenges & Scalability
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Role-Based Access Control
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Future iterations can implement RBAC
                                to support multiple administrator roles
                                with granular permission management.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Media Optimization
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Image optimization pipelines and CDN-level
                                caching strategies can improve loading
                                performance for documentation galleries.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Audit Logging
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Administrative activity logs can be added
                                to improve monitoring and traceability
                                for content management actions.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Authentication Hardening
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Refresh token rotation and session expiration
                                strategies can further improve authentication
                                security for production environments.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </main>
    )
}