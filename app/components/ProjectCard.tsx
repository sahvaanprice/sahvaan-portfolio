type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200">

      {/* Accent glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-teal-50 to-transparent" />

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex items-center gap-5 text-sm font-medium">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-800 transition"
          >
            GitHub →
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-800 transition"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}