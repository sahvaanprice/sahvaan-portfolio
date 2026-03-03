import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";

export default function CineWaveCaseStudy() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-medium text-teal-700">Case Study</p>
        <h1 className="text-4xl font-bold tracking-tight">
          CineWave User Behavior Analytics
        </h1>
        <p className="text-zinc-600 max-w-2xl">
          Simulated streaming analytics system measuring funnels, watch behavior, ad exposure, and upgrades.
        </p>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://github.com/sahvaanprice/cinewave-user-behavior-analytics"
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

          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
            In Progress
          </span>
        </div>
      </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-4">
            <a
                href="/images/cinewave_exec_dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-zoom-in"
            >
        <div className="relative w-full aspect-[16/7] bg-white">
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

        <section className="grid gap-8 sm:grid-cols-3">
        <div className="sm:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Goal</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Build an end-to-end analytics model that mirrors streaming product metrics using event-level data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What I’m Building</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 list-disc pl-5">
              <li>SQL Server event schema (users, sessions, events, plan history).</li>
              <li>Power BI executive dashboard for engagement and conversion.</li>
              <li>Funnel + upgrade conversion analysis using T-SQL.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Metrics Included</h2>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 list-disc pl-5">
              <li>Daily Active Users/Monthly Active Users, session duration, and engagement.</li>
              <li>Watch behavior and completion trends.</li>
              <li>Ad exposure impact and upgrade conversion rate.</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Tools</p>
            <p className="mt-2 text-sm font-medium text-zinc-900">
              SQL Server • Power BI • Data Modeling
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Next</p>
            <p className="mt-2 text-sm font-medium text-zinc-900">
              Finalize funnel measures + publish a v1 dashboard walkthrough.
            </p>
          </div>
        </aside>
      </section>
    </Container>
  );
}