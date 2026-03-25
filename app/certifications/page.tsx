"use client";

import Container from "../components/Container";

const certificates = [
  {
    title: "Six Sigma White Belt",
    issuer: "Council for Six Sigma Certification",
    date: "March 2026",
    description:
      "Focused on process improvement, quality management, and identifying inefficiencies using structured methodologies.",
    skills: ["Process Improvement", "Data Quality", "Problem Solving"],
    file: "/six_sigma_white_belt.pdf",
  },
  {
    title: "IT Fundamentals Pro",
    issuer: "TestOut",
    date: "August 2023",
    description:
      "Covers foundational IT concepts including hardware, databases, networking, security, and systems.",
    skills: ["IT Systems", "Databases", "Security Basics"],
    file: "/it_fundamentals_pro.pdf",
  },
];

export default function CertificationsPage() {
  return (
    <Container className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-8 backdrop-blur">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-sm font-medium text-[color:var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[color:var(--warm-accent)]" />
          Certifications
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[color:var(--foreground)]">
          Certifications
        </h1>

        <div className="h-1.5 w-20 rounded-full bg-[color:var(--warm-accent)] opacity-90" />

        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[color:var(--muted)]">
          A collection of certifications that reflect my continued learning in
          technology, analytics, and business systems.
        </p>
      </section>

      {/* CERTIFICATE CARDS */}
      <section className="grid gap-6 sm:grid-cols-2">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="space-y-4">
              {/* Title + Issuer */}
              <div>
                <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                  {cert.title}
                </h2>

                <p className="mt-1 text-sm text-[color:var(--muted)]">
                  {cert.issuer} • {cert.date}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-2)] text-[color:var(--muted)] border border-[color:var(--border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent-hover)] transition"
                >
                  View →
                </a>

                <a
                  href={cert.file}
                  download
                  className="rounded-xl border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] hover:bg-[color:var(--surface-2)] transition"
                >
                  Download
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}