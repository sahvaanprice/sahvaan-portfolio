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
          Business Systems • Data Analytics • Decision Support
        </div>

        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
          Sahvaan Price
        </h1>

        <div className="h-1 w-16 rounded-full bg-teal-500" />

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Business Systems & Data Analytics student (May 2026) building SQL + Power BI
          solutions that turn messy data into clear, decision-ready insight.
        </p>

        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Experience: Business Systems Analyst Intern (Marathon Petroleum Company) • IT Intern (Spartan Chemical)
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

      {/* HIGHLIGHTS ROW */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Core tools", value: "SQL • Power BI • Python" },
          { label: "Analytical Strength", value: "Data Storytelling • Decision Support" },
          { label: "Professional Focus", value: "Analytics • Systems • Business Insights" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-zinc-500">{item.label}</p>
            <p className="mt-2 text-base font-semibold text-zinc-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* SKILLS STRIP */}
      <section className="flex flex-wrap gap-2">
        {[
          "SQL",
          "Power BI",
          "Python",
          "Data Visualization",
          "Business Analysis",
          "Dashboard Development",
          "Process Improvement",
          "Systems Analysis",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
          >
            {skill}
          </span>
        ))}
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 max-w-2xl">
              A few projects that show my analytics, database, and storytelling skills.
            </p>
          </div>

          {/* Desktop button */}
          <Link
            href="/projects"
            className="hidden sm:inline-flex bg-teal-600 text-white px-5 py-2.5 rounded-xl hover:bg-teal-700 transition shadow-sm"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Planet 3 Gym Membership & Analytics System"
            description="Designed a SQL Server database and Power BI reporting layer to centralize membership, payment, and revenue tracking—improving operational visibility and enabling automated performance monitoring."
            tech={["SQL Server", "Database Design", "Power BI", "Data Modeling"]}
            github="https://github.com/sahvaanprice/planet3-gym-analytics-system"
            image="/images/planet3-dashboard.png"
          />
          <ProjectCard
            title="CineWave User Behavior Analytics"
            description="Designed and built a simulated streaming analytics architecture to analyze user funnels, watch behavior, ad exposure, and premium upgrade conversion using SQL Server and Power BI."
            tech={["SQL Server", "Database Design", "Power BI", "Data Modeling"]}
            github="https://github.com/sahvaanprice/cinewave-user-behavior-analytics"
            status="In Progress"
            image="/images/cinewave_executive_dashboard.png" 
          />
        </div>

        {/* Mobile button */}
        <div className="sm:hidden">
          <Link
            href="/projects"
            className="inline-flex bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition shadow-sm"
          >
            View all →
          </Link>
        </div>
      </section>

      <section className="space-y-6">
  <div>
    <h2 className="text-3xl font-semibold tracking-tight">
      Next Plans
    </h2>

    <p className="mt-2 text-zinc-600 max-w-2xl">
      Projects I plan on developing as I continue improving my analytics,
      systems, and decision-support skills.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2">
    {[
      {
        title: "Financial Trend Dashboard",
        desc: "Developing an interactive financial analytics dashboard focused on identifying trends, spending patterns, and performance indicators.",
      }
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6"
      >
        <h3 className="font-semibold text-zinc-900">{item.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>

      </div>
    ))}
  </div>
</section>
    </Container>
  );
}