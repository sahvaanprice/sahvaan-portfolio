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

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Currently Building
        </h2>

        <p className="text-zinc-600 max-w-2xl">
          Active projects exploring financial analytics, behavioral insights,
          and Python-driven data analysis.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Financial Trend Dashboard",
              description:
                "Developing an interactive financial analytics dashboard focused on identifying revenue trends, spending patterns, and performance indicators to support budgeting and forecasting decisions.",
              tech: [],
            },
            {
              title: "User Behavioral Analytics (Python)",
              description:
                "Exploring user engagement patterns using Python to analyze behavior trends, retention indicators, and activity insights that support data-driven decision making.",
              tech:[],
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

              <span className="inline-block mt-5 text-xs font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>
          ))}
        </div>
      </section>     
      <div className="mt-12 border-t border-zinc-200 pt-6">
        <p className="text-sm text-zinc-500">
          Every project represents something I wanted to understand better —
          whether that’s data, systems, or how decisions get made behind the scenes.
        </p>
      </div>
    </Container>
  );
}