import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

export default function Planet3CaseStudy() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-14 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-sm font-medium text-teal-700">Case Study</p>
        <h1 className="text-4xl font-bold tracking-tight">
          Planet3 Gym Membership Analytics System
        </h1>
        <p className="text-zinc-600 max-w-2xl">
          SQL Server database + Power BI reporting to track memberships, payments, and revenue KPIs.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://github.com/sahvaanprice/planet3-gym-analytics-system"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-teal-600 px-5 py-2.5 text-white hover:bg-teal-700 transition"
          >
            View GitHub →
          </a>

          <Link
            href="/projects"
            className="rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-zinc-700 hover:bg-zinc-50 transition"
          >
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero Image */}
    <section className="rounded-2xl border border-zinc-200 bg-white p-4">
        <a
            href="/images/planet3_exec_dashboard.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-zoom-in"
        >
        <div className="relative w-full aspect-[16/7] bg-white">
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


    <section className="grid gap-4 sm:grid-cols-3">
        {[
        { label: "Data Model", value: "Relational SQL Schema" },
        { label: "Dashboard Type", value: "Executive KPI Reporting" },
        { label: "Focus Area", value: "Revenue + Operations" },
            ].map((item) => (
        <div
            key={item.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
        >
        <p className="text-xs text-zinc-500">{item.label}</p>
        <p className="mt-2 text-sm font-semibold text-zinc-900">
        {item.value}
        </p>
        </div>
        ))}
    </section>

      {/* Content Grid */}
      <section className="grid gap-8 sm:grid-cols-3">
        <div className="sm:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Problem</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Membership, subscription, and payment data needed to be organized into a consistent system
              so performance could be monitored with clear KPIs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What I Built</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 list-disc pl-5">
              <li>Relational SQL Server schema to centralize operational data.</li>
              <li>Power BI dashboard with KPI cards and drilldowns.</li>
              <li>Reporting structure designed for quick decision support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What It Shows</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 list-disc pl-5">
              <li>Total members and membership type distribution.</li>
              <li>Revenue trends by subscription type.</li>
              <li>Payment timing and upcoming payment visibility.</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Tools</p>
            <p className="mt-2 text-sm font-medium text-zinc-900">
              SQL Server • Power BI • Data Modeling
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-2 text-sm font-medium text-zinc-900">
              KPI Reporting • Revenue Tracking • Operations Visibility
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Status</p>
            <p className="mt-2 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
              Complete
            </p>
          </div>
          <div className="border-t border-zinc-200 pt-8 flex justify-between text-sm font-medium">
            <Link href="/projects" className="text-zinc-600 hover:text-teal-700">
                ← Back to Projects
            </Link>

            <Link href="/projects/cinewave" className="text-teal-700 hover:text-teal-800">
                Next Project →
            </Link>
        </div>
        </aside>
      </section>
    </Container>
  );
}