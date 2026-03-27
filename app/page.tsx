"use client";

import Container from "./components/Container";
import Link from "next/link";
import Intro from "./components/Intro";

export default function Homepage() {
  return (
    <>
      <Intro />
      <Container className="space-y-16">
        {/* HERO */}
        <section className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-8 backdrop-blur sm:p-10">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[color:var(--warm-accent)]" />
              Business Systems • Data Analytics • Decision Support
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight leading-[1.02] text-[color:var(--foreground)] sm:text-6xl">
                Sahvaan Price
              </h1>

              <div className="h-1.5 w-20 rounded-full bg-[color:var(--warm-accent)] opacity-90" />

              <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--muted)] sm:text-xl">
                I build SQL and Power BI solutions that improve how businesses and products operate, with a focus on systems, analytics, and better decision-making.
              </p>
            </div>

            {/* Subtext */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--muted)]">
              <span>Business Systems Analyst Intern @ Marathon Petroleum</span>
              <span className="hidden sm:inline">•</span>
              <span>IT Intern @ Spartan Chemical</span>
              <span className="hidden sm:inline">•</span>
              <span>BBA Information Systems, May 2026</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="rounded-2xl bg-[color:var(--accent)] px-6 py-3 text-[color:var(--background)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
              >
                View Projects
              </Link>

              <a
                href="/Sahvaan_Price_Resume.pdf"
                download
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[color:var(--surface-2)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* VALUE CARDS */}
        <section className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "What I Build",
              value: "Data models, dashboards, and reporting systems for clear decision-making",
            },
            {
              label: "What I Focus On",
              value: "Turning data into insights and business impact",
            },
            {
              label: "What I’m Growing In",
              value: "Product thinking, user behavior analysis, and data-driven strategy",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--foreground)]">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        {/* QUICK LINKS */}
        <section className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Projects",
              desc: "Explore case studies in SQL, Power BI, analytics systems, and product-focused reporting.",
              href: "/projects",
            },
            {
              title: "About",
              desc: "Learn more about my background, experience, and the kind of work I want to keep building.",
              href: "/about",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  {item.desc}
                </p>

                <p className="text-sm font-medium text-[color:var(--accent)]">
                  Open →
                </p>
              </div>
            </Link>
          ))}
        </section>
      </Container>
    </>
  );
}