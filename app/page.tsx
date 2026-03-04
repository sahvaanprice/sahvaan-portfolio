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
        <section className="space-y-6 p-8 rounded-3xl bg-[color:var(--surface)]/80 border border-[color:var(--border)] backdrop-blur">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-sm font-medium text-[color:var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--warm-accent)]" />
            Business Systems • Data Analytics • Problem Solving
          </div>

          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-[color:var(--foreground)]">
            Sahvaan Price
          </h1>

          <div className="h-1.5 w-20 rounded-full bg-[color:var(--warm-accent)] opacity-90" />

          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed text-[color:var(--muted)]">
            Analyst-in-training (May 2026) building SQL + Power BI solutions that
            turn complex data into clear decisions.
          </p>

          <p className="text-sm text-[color:var(--muted)]">
            BSA Intern (Marathon Petroleum) • IT Intern (Spartan Chemical)
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="bg-[color:var(--accent)] text-[color:var(--background)] px-6 py-3 rounded-xl hover:bg-[color:var(--accent-hover)] transition shadow-sm"
            >
              View Projects
            </Link>

            <a
              href="/Sahvaan_Price_Resume.pdf"
              download
              className="border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] px-6 py-3 rounded-xl hover:bg-[color:var(--surface-2)] transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Projects",
              desc: "Dashboards, data models, and analytics systems.",
              href: "/projects",
            },
            {
              title: "About",
              desc: "My background, strengths, and what I’m learning.",
              href: "/about",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="font-semibold text-[color:var(--foreground)]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {item.desc}
              </p>

              <p className="mt-4 text-sm font-medium text-[color:var(--accent)]">
                Open →
              </p>
            </Link>
          ))}
        </section>
      </Container>
    </>
  );
}