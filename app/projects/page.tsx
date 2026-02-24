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

      <div className="mt-12 border-t border-zinc-200 pt-6">
        <p className="text-sm text-zinc-500">
          Every project represents something I wanted to understand better —
          whether that’s data, systems, or how decisions get made behind the scenes.
        </p>
      </div>
    </Container>
  );
}