import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

export default function CineWaveCaseStudy() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
          Case Study
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            CineWave User Behavior Analytics
          </h1>

          <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            A streaming analytics project built to explore how user behavior,
            content engagement, ad exposure, and subscription upgrades connect
            across the product experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://github.com/sahvaanprice/cinewave-user-behavior-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            View GitHub →
          </a>

          <Link
            href="/projects"
            className="rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-50"
          >
            Back to Projects
          </Link>

          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            In Progress
          </span>
        </div>
      </header>

      {/* Hero Image */}
      <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur">
        <a
          href="/images/cinewave_exec_dashboard.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-zoom-in"
        >
          <div className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/cinewave_exec_dashboard.png"
              alt="CineWave Dashboard Preview"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>
        </a>
      </section>

      {/* Summary Cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Project Type", value: "Product + User Analytics" },
          { label: "Data Model", value: "Event-Level Streaming Schema" },
          { label: "Focus Area", value: "Engagement + Conversion" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              {item.label}
            </p>
            <p className="mt-3 text-sm font-semibold text-zinc-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* Content Grid */}
      <section className="grid gap-8 sm:grid-cols-3">
        <div className="space-y-6 sm:col-span-2">
          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">The Goal</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Streaming platforms generate a huge amount of behavioral data, but
              raw events alone do not explain what drives engagement or what
              pushes users toward conversion. This project is focused on turning
              event-level activity into a clearer view of how people browse,
              watch, interact with ads, and move from free to premium plans.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">What I’m Building</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600">
              <li>
                A SQL Server event schema covering users, sessions, content,
                events, and plan history.
              </li>
              <li>
                A Power BI dashboard designed to surface engagement patterns,
                funnel movement, and upgrade behavior.
              </li>
              <li>
                Query logic in T-SQL to support funnel analysis, retention
                signals, and conversion tracking.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">What It’s Measuring</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600">
              <li>
                Daily and monthly active usage, session behavior, and overall
                engagement trends.
              </li>
              <li>
                Watch activity including starts, completion patterns, and
                watchlist-related intent.
              </li>
              <li>
                Ad exposure and how it may relate to user friction, engagement,
                or subscription upgrades.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Why This Project Stands Out</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Unlike a traditional reporting project, CineWave is built around
              product behavior. It goes beyond static KPIs by focusing on user
              journeys, conversion moments, and the kinds of questions product
              and business teams actually ask when trying to improve platform
              performance.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Current Direction</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              The next phase is focused on refining funnel measures, validating
              upgrade logic, and publishing a stronger dashboard walkthrough
              that clearly ties behavior patterns back to product decisions and
              business value.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Tools
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-zinc-900">
              SQL Server • Power BI • Data Modeling
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Focus
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-zinc-900">
              Funnel Analysis • Engagement Metrics • Upgrade Conversion
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Status
            </p>
            <div className="mt-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              In Progress
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Next Up
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Finalize funnel measures, strengthen upgrade logic, and publish a
              cleaner v1 dashboard story.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Best For
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Showing product analytics thinking, event-level data modeling, and
              how behavioral signals can support conversion strategy.
            </p>
          </div>

          <div className="flex justify-between border-t border-zinc-200 pt-8 text-sm font-medium">
            <Link href="/projects/planet3" className="text-zinc-600 transition hover:text-teal-700">
              ← Previous Project
            </Link>

            <Link href="/projects" className="text-teal-700 transition hover:text-teal-800">
              Back to Projects →
            </Link>
          </div>
        </aside>
      </section>
    </Container>
  );
}