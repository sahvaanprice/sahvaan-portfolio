import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  image?: string;
  imageLink?: string;

  caseStudyHref?: string; // NEW: internal route like "/projects/planet3"

  demo?: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  image,
  imageLink,
  caseStudyHref,
  status,
  demo,
}: ProjectCardProps) {
  const imageHref = imageLink || caseStudyHref || demo || github || image || "#";

  return (
    <div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200">
      {/* Accent glow on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-teal-50 to-transparent" />

      <div className="relative z-10">
        {image && caseStudyHref && (
          <Link
            href={caseStudyHref}
            className="mb-4 block overflow-hidden rounded-xl border border-zinc-200 bg-white p-3 cursor-pointer hover:ring-2 hover:ring-teal-200 transition"
            aria-label={`Open case study for ${title}`}
          >
      <div className="relative aspect-[16/7] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain bg-white transition duration-300 group-hover:scale-[1.01]"
        />
      </div>
        </Link>
      )}

        {/* Title + Status */}
        <div className="flex items-start justify-between gap-3">
        {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="text-lg font-semibold tracking-tight text-zinc-900 hover:text-teal-700 transition"
            >
              {title}
            </Link>
              ) : (
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              {title}
            </span>
          )}

          {status && (
          <span className="shrink-0 inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
          {status}
          </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>

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

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
        {caseStudyHref && (
          <Link
            href={caseStudyHref}
            className="text-teal-700 hover:text-teal-800 transition"
          >
            View Case Study →
          </Link>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-teal-700 transition"
          >
            GitHub →
          </a>
        )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-teal-700 transition"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}