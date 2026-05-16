import Image from 'next/image'

export default function ForecastStudyPage() {
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
                            KulinaStock Forecast System
                        </h1>

                        <p className="text-zinc-400 text-xl leading-9 max-w-4xl">
                            A stock forecasting platform designed to analyze
                            historical inventory usage using forecasting methods
                            such as SES, Holt, and Holt-Winters with
                            accuracy metric evaluation.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            'Next.js',
                            'TypeScript',
                            'PostgreSQL',
                            'Forecasting',
                            'SES',
                            'Holt',
                            'Holt-Winters',
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
                                System Focus
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                Forecast Analytics
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                The platform focuses on forecasting future
                                stock requirements based on historical
                                inventory consumption data.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-zinc-500 text-sm">
                                Forecast Engine
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                Time Series Models
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                Multiple forecasting methods are implemented
                                to compare prediction quality and improve
                                decision-making accuracy.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-zinc-500 text-sm">
                                Accuracy Metrics
                            </p>

                            <h3 className="text-2xl font-semibold mt-3">
                                MAE • MAPE • RMSE
                            </h3>

                            <p className="text-zinc-400 leading-7 mt-4">
                                Forecast quality is evaluated using
                                standard statistical error metrics
                                for performance comparison.
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
                            The system architecture separates frontend dashboard
                            operations, forecasting services, API handling,
                            and persistence layers to improve scalability
                            and maintainability.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/forecast/architecture-diagram.webp"
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
                                Forecast Engine Separation
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Forecasting logic is isolated into dedicated
                                processing modules to simplify method comparison
                                and future extensibility.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Modular Backend API
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                API routes handle forecasting requests,
                                historical data retrieval, and metric
                                calculations independently from the UI layer.
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
                            Forecasting Strategy
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            The forecasting system was designed to support
                            comparative analysis between multiple time-series
                            forecasting algorithms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why SES?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Simple Exponential Smoothing is effective
                                for stable datasets without strong trends
                                or seasonal patterns.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Holt Method?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Holt forecasting improves prediction quality
                                for datasets containing linear trends
                                over time.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Holt-Winters?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Holt-Winters supports trend and seasonality
                                detection for more complex forecasting scenarios.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Multiple Metrics?
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                MAE, MAPE, and RMSE provide different
                                perspectives on forecasting accuracy
                                and prediction error quality.
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
                            administrators, staff members, and forecasting
                            modules during inventory analysis workflows.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/forecast/useCase-diagram.webp"
                            alt="Use Case Diagram"
                            width={1600}
                            height={900}
                            className="w-full rounded-2xl"
                        />
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                        <h3 className="text-2xl font-semibold mb-4">
                            Forecasting Workflow
                        </h3>

                        <p className="text-zinc-400 leading-8">
                            Users can manage inventory data, input historical
                            stock usage, compare forecasting methods,
                            and evaluate prediction accuracy through
                            centralized dashboard operations.
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
                            The relational schema is designed to manage
                            inventory items, historical stock usage,
                            user authentication, and forecasting results.
                        </p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                        <img
                            src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/forecast/entityRelationship-diagram.webp"
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
                                    • Historical stock data is separated
                                    into dedicated relational records.
                                </li>

                                <li>
                                    • Forecast results are stored independently
                                    to support method comparison analysis.
                                </li>

                                <li>
                                    • Foreign key constraints maintain
                                    relational consistency between items
                                    and forecast records.
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Forecast Persistence
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Forecast outputs and accuracy metrics
                                are persisted for historical evaluation,
                                reporting generation, and future comparison.
                            </p>
                        </div>

                    </div>

                </section>

                {/* FORECAST ENGINE */}
                <section className="space-y-10">

                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-sm text-cyan-300">
                            Forecast Engine
                        </p>

                        <h2 className="text-4xl font-bold">
                            Prediction Processing
                        </h2>

                        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
                            Forecast calculations are executed using
                            multiple time-series methods to evaluate
                            prediction performance and trend behavior.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                SES Forecast
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Uses weighted averages from previous periods
                                to smooth forecasting fluctuations.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Holt Forecast
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Captures linear trend movement
                                to improve medium-term predictions.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Holt-Winters
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Supports seasonal forecasting behavior
                                using trend and seasonality components.
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
                            The following diagrams illustrate authentication,
                            forecasting execution flow, and inventory
                            prediction processing.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* AUTH FLOW */}
                        <div className="space-y-6">

                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">
                                    Forecast API Sequence
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    This sequence diagram demonstrates how
                                    forecasting requests are processed
                                    through API routes and forecasting engines.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                                <img
                                    src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/forecast/sequence-diagram.webp"
                                    alt="Sequence Diagram"
                                    width={1200}
                                    height={1600}
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-2xl font-semibold mb-4">
                                    Metrics Evaluation Flow
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    Forecast outputs are evaluated using
                                    MAE, MAPE, and RMSE calculations
                                    before results are returned to users.
                                </p>
                            </div>

                        </div>

                        {/* ACTIVITY FLOW */}
                        <div className="space-y-6">

                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">
                                    Forecasting Workflow
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    This activity diagram illustrates
                                    the forecasting process from authentication
                                    and data input to prediction generation.
                                </p>
                            </div>

                            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4">
                                <img
                                    src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/public/uml/forecast/activity-diagram.webp"
                                    alt="Activity Diagram"
                                    width={1200}
                                    height={1600}
                                    className="w-full rounded-2xl"
                                />
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="text-2xl font-semibold mb-4">
                                    Forecast Processing Pipeline
                                </h3>

                                <p className="text-zinc-400 leading-8">
                                    Users authenticate into the dashboard,
                                    select forecasting methods, calculate
                                    prediction metrics, and store forecast
                                    results into the database.
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
                            <h3 className="text-4xl font-bold">3</h3>
                            <p className="text-zinc-500 mt-2">
                                Forecast Methods
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">MAE</h3>
                            <p className="text-zinc-500 mt-2">
                                Error Metric
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">MAPE</h3>
                            <p className="text-zinc-500 mt-2">
                                Error Metric
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
                            <h3 className="text-4xl font-bold">RMSE</h3>
                            <p className="text-zinc-500 mt-2">
                                Error Metric
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
                            Scalability & Optimization
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Advanced Forecast Models
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Additional forecasting algorithms such as
                                ARIMA or Prophet can improve prediction
                                flexibility for complex datasets.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Interactive Visualization
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Dynamic forecasting charts and real-time
                                analytics dashboards can improve
                                forecasting interpretation.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Automated Parameter Tuning
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Forecast accuracy can be improved through
                                automatic alpha, beta, and gamma
                                optimization strategies.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Forecast History Tracking
                            </h3>

                            <p className="text-zinc-400 leading-8">
                                Historical forecast comparison features
                                can improve analytical validation
                                and reporting workflows.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </main>
    )
}