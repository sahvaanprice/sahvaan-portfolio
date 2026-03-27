import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

export default function Planet3CaseStudy() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
          Case Study
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Planet3 Gym Membership Analytics System
          </h1>

          <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Built to give gym teams a clearer view of memberships, revenue, and
            class activity through a structured SQL Server database and Power BI
            reporting experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://github.com/sahvaanprice/planet3-gym-analytics-system"
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
        </div>
      </header>

      {/* Hero Image */}
      <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur">
        <a
          href="/images/planet3_exec_dashboard.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-zoom-in"
        >
          <div className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/planet3_exec_dashboard.png"
              alt="Planet3 Dashboard Preview"
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
          { label: "Data Model", value: "Relational SQL Schema" },
          { label: "Dashboard Type", value: "Executive KPI Reporting" },
          { label: "Focus Area", value: "Revenue + Operations" },
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
            <h2 className="text-xl font-semibold text-zinc-950">The Problem</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Gym operations can get messy fast when membership, payment, and
              class data live across disconnected systems or manual tracking.
              That makes it harder to understand performance clearly and even
              harder to make confident decisions around pricing, scheduling, and
              growth.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">My Approach</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600">
              <li>
                Designed a relational SQL Server database to centralize member,
                subscription, and payment data.
              </li>
              <li>
                Generated realistic synthetic data to simulate gym activity and
                make the reporting experience more meaningful.
              </li>
              <li>
                Structured the data model to support clean reporting and
                accurate KPI calculations in Power BI.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">What I Built</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600">
              <li>
                An executive-style Power BI dashboard with KPI cards,
                drilldowns, and summary views.
              </li>
              <li>
                Reporting views and measures to track revenue, membership mix,
                and payment timing.
              </li>
              <li>
                A centralized system that brings subscriptions, payments, and
                class activity into one reporting workflow.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Key Takeaways</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600">
              <li>
                VIP members show stronger engagement and contribute a larger
                share of revenue.
              </li>
              <li>
                Class participation shifts by trainer and timing, which points
                to opportunities for schedule optimization.
              </li>
              <li>
                Revenue trends can be used to support more informed pricing and
                subscription planning.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">Why It Matters</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              This project turns scattered gym data into a clearer decision-making
              tool. Instead of relying on manual tracking, stakeholders can
              quickly understand operational performance, revenue movement, and
              membership patterns in one place.
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
              KPI Reporting • Revenue Tracking • Operations Visibility
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Status
            </p>
            <div className="mt-3 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
              Complete
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Best For
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Showing database design, BI reporting, and how raw data can be
              turned into cleaner operational visibility.
            </p>
          </div>

          <div className="flex justify-between border-t border-zinc-200 pt-8 text-sm font-medium">
            <Link href="/projects" className="text-zinc-600 transition hover:text-teal-700">
              ← Back to Projects
            </Link>

            <Link href="/projects/cinewave" className="text-teal-700 transition hover:text-teal-800">
              Next Project →
            </Link>
          </div>
        </aside>
      </section>
    </Container>
  );
}