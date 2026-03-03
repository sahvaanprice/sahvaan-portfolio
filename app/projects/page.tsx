import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-14">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-zinc-600 max-w-2xl">
          SQL + Power BI case studies focused on analytics, system design, and decision-ready reporting.
        </p>
      </header>

      {/* use a vertical stack so spacing is consistent */}
      <div className="mt-10 space-y-16">
        {/* PROJECTS GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Planet3 Gym Membership Analytics System"
            description="Built a SQL Server + Power BI system to track memberships, payments, and revenue with KPI reporting for operational decisions."
            tech={["SQL Server", "Database Design", "Power BI", "Data Modeling", "Analytics Dashboard"]}
            caseStudyHref="/projects/planet3"
            github="https://github.com/sahvaanprice/planet3-gym-analytics-system"
            image="/images/planet3-dashboard.png"
          />

          <ProjectCard
            title="CineWave User Behavior Analytics"
            description="Built a streaming-style analytics model to measure funnels, watch behavior, ads, and upgrades using event data in SQL Server + Power BI."
            tech={["SQL Server", "Database Design", "Power BI", "Data Modeling"]}
            caseStudyHref="/projects/cinewave"
            github="https://github.com/sahvaanprice/cinewave-user-behavior-analytics"
            status="In Progress"
            image="/images/cinewave_executive_dashboard.png"
          />
        </div>

        {/* FOOTER NOTE */}
        <div className="border-t border-zinc-200 pt-6">
          <p className="text-sm text-zinc-500">
            Each project includes a case study and a GitHub repo with scripts, schema, and documentation.
          </p>
        </div>
      </div>
    </Container>
  );
}