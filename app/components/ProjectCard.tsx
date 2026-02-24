import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image?: string;          // preview image (local /public or remote)
  imageLink?: string;      // where the image click should go (full-size image URL)
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  image,
  imageLink,
  demo,
}: ProjectCardProps) {
  const primaryHref = demo || github;          // title click
  const imageHref = imageLink || image || primaryHref; // image click

  return (
    <div className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200">
      {/* Accent glow on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-teal-50 to-transparent" />

      <div className="relative z-10">
        {image && (
          <a
            href={imageHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block overflow-hidden rounded-xl border border-zinc-200 cursor-pointer hover:ring-2 hover:ring-teal-200 transition"
            aria-label={`Open image for ${title}`}
          >
            <div className="relative h-52 w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </a>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition"
          >
            {title}
          </a>
        </h3>

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
    </div>
  );
}