import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-zinc-600 max-w-2xl">
          Each project reflects how I approach problems with structured thinking,
          practical analytics, and curiosity.
        </p>
      </header>

      {/* ✅ use a vertical stack so spacing is consistent */}
      <div className="mt-10 space-y-16">
        {/* PROJECTS GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Planet3 Gym Membership Analytics System"
            description="Designed a SQL Server database and Power BI reporting layer to centralize membership, payment, and revenue tracking—improving operational visibility and enabling automated performance monitoring."
            tech={[
              "SQL Server",
              "Database Design",
              "Power BI",
              "Data Modeling",
              "Analytics Dashboard",
            ]}
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

        {/* NEXT PLANS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Next Plans</h2>
            <p className="mt-2 text-zinc-600 max-w-2xl">
              Projects I plan developing as I continue improving my analytics,
              systems, and decision-support skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Financial Trend Dashboard",
                description:
                  "Developing an interactive financial analytics dashboard focused on identifying revenue trends, spending patterns, and performance indicators to support budgeting and forecasting decisions.",
                tech: [],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-500">
            Every project represents something I wanted to understand better —
            whether that’s data, systems, or how decisions get made behind the
            scenes.
          </p>
        </div>
      </div>
    </Container>
  );
}