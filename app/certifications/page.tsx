import Container from "../components/Container";
import Link from "next/link";
export default function CertificationsPage() {
  return (
    <Container className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Certifications
        </h1>

        <div className="h-1 w-16 rounded-full bg-teal-500" />

        <p className="text-lg text-zinc-600 max-w-2xl">
          Certifications and continued learning that strengthen my analytics,
          systems, and business strategy skillset.
        </p>
      </section>

      {/* CERTIFICATION GRID */}
      <section className="grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "TestOut IT Fundamentals Pro Certification",
            organization: "TestOut Corporation",
            year: "2023",
            link: "/it_fundamentals_pro.pdf"
          },
        ].map((cert) => (
          <Link
            key={cert.title}
            href={cert.link}
            target="blank"
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-teal-200"
          >
            <p className="text-sm text-zinc-500">{cert.organization}</p>

            <h2 className="mt-2 text-lg font-semibold text-zinc-900">
              {cert.title}
            </h2>

            <p className="mt-1 text-sm text-teal-700 font-medium">
              {cert.year}
            </p>
          </Link>
        ))}
      </section>
    </Container>
  );
}