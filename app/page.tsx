"use client";

import Container from "./components/Container";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function HomePage() {
  return (
    <Container className="space-y-16">
      {/* HERO */}
      <section className="space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          Business Systems • Data Analytics • Problem Solving
        </div>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          Sahvaan Price
        </h1>

        <div className="h-1 w-16 rounded-full bg-teal-500" />

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Analyst-in-training (May 2026) building SQL + Power BI solutions that turn complex data into clear decisions.
        </p>

        <p className="text-sm text-zinc-500">
          BSA Intern (Marathon Petroleum) • IT Intern (Spartan Chemical)
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition shadow-sm"
          >
            View Projects
          </Link>

          <a
            href="/Sahvaan_Price_Resume.pdf"
            download
            className="border border-teal-200 text-teal-700 bg-white px-6 py-3 rounded-xl hover:bg-teal-50 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

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
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-zinc-900">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            <p className="mt-4 text-sm font-medium text-teal-700">Open →</p>
          </Link>
        ))}
      </section>
    </Container>
  );
}