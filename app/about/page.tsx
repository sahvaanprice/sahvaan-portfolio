import Container from "../components/Container";

export default function AboutPage() {
  return (
    <Container className="space-y-10">
      {/* Page Title */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          About Me
        </h1>

        <div className="h-1 w-16 rounded-full bg-teal-500" />

        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          I’m Sahvaan Price, an Information Systems student graduating May 2026
          focused on analytics, business systems, and decision support. I enjoy
          turning complex information into structured insights that help teams
          understand performance, improve processes, and make better decisions.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Focus", value: "Data Analytics • Business Systems • Decision Support" },
          { label: "Approach", value: "System Thinking • Process Improvement • Problem Solving" },
          { label: "Interests", value: "Analytics • Systems • Design" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-zinc-500">{item.label}</p>
            <p className="mt-2 font-semibold text-zinc-900">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">My Story</h2>

        <p className="text-zinc-600 leading-relaxed">
           I’m drawn to the intersection of business, systems, and analytics —
          where complex problems become clearer through data. Studying
          Information Systems shaped how I think about organizations: not just
          through technology, but through how people, processes, and systems
          work together.
        </p>

        <p className="text-zinc-600 leading-relaxed">
            I enjoy building dashboards, structuring data models, and translating
          technical information into insights teams can actually act on. My work
          focuses on making information accessible so decisions feel informed
          rather than uncertain.
        </p>

        <p className="text-zinc-600 leading-relazed">
            What motivates me is curiosity and continously learning how analytics can
            improve real world experiences, products, and strategies across industries.
        </p>
      </section>
    </Container>
  );
}