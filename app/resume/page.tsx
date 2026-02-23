import Container from "../components/Container";

export default function ResumePage() {
  return (
    <Container className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Resume
        </h1>

        <div className="h-1 w-16 rounded-full bg-teal-500" />

        <p className="text-lg text-zinc-600 max-w-2xl">
          Download my resume or review a quick overview of my analytics,
          systems, and business experience.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/Sahvaan_Price_Resume.pdf"
            download
            className="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition shadow-sm"
          >
            Download Resume
          </a>

          <a
            href="/Sahvaan_Price_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-200 text-teal-700 bg-white px-6 py-3 rounded-xl hover:bg-teal-50 transition"
          >
            Open in New Tab
          </a>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Specialization",
            value: "Business Systems Analysis & Data Analytics",
          },
          {
            label: "Core Tools",
            value: "SQL • Power BI • Python",
          },
          {
            label: "Experience",
            value: "Dashboard Automation • Process Optimization • Business Sytems",
          },
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

      {/* QUICK SUMMARY */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">
          Quick Summary
        </h2>

        <ul className="space-y-3 text-zinc-600 leading-relaxed">
          <li>• Business Systems Analyst intern experienced in translating complex data into operational decisions</li>
          <li>• Developed automated Power BI dashboards that replaced manual Excel tracking and improved stakeholder visibility</li>
          <li>• Presented analytical finding and business value to cross-functional stakeholders to support decision making</li>
          <li>• Experience across analytics, business systems analysis, and process improvement initiatives</li>
        </ul>
      </section>
    </Container>
  );
}