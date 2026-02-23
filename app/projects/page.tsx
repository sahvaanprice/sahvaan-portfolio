import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
export default function ProjectsPage() {
  return (
    <Container className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          title="Gym Database System"
          description="Designed relational database and dashboards for membership tracking and revenue analytics."
          tech={["SQL Server", "Database Design", "Power BI"]}
          github="https://github.com/sahvaanprice/planet3-gym-analytics-system"
        />
      </div>
    </Container>
  );
}