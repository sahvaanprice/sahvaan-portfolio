"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur">
  <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

    <Link
     href="/"
     className="flex items-center gap-1.5 text-lg font-semibold tracking-tight transition"
    >
  {/* Rose gold icon */}
    <FiHome
     size={18}
     className="text-[color:var(--warm-accent)]"
    />

  {/* Blue initials */}
    <span className="text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] transition">
     SP
    </span>
    </Link>

    <div className="hidden md:flex gap-6 text-sm font-medium">
      <Link href="/about" className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition">
        About
      </Link>

      <Link href="/projects" className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition">
        Projects
      </Link>
    </div>

    <div className="flex items-center gap-6">
      {/* Resume */}
      <div className="relative group flex flex-col items-center">
        <a
          href="/Sahvaan_Price_Resume.pdf"
          download
          className="text-[color:var(--muted)] hover:text-[color:var(--warm-accent)] transition transform hover:scale-105"
          aria-label="Download Resume"
        >
          <FaFileAlt size={20} />
        </a>

        <span className="pointer-events-none absolute top-8 whitespace-nowrap rounded bg-[color:var(--surface-2)] px-2 py-1 text-xs text-[color:var(--foreground)] opacity-0 group-hover:opacity-100 transition border border-[color:var(--border)]">
          Download Resume
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group flex flex-col items-center">
        <a
          href="https://github.com/sahvaanprice"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--muted)] hover:text-[color:var(--warm-accent)] transition transform hover:scale-105"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <span className="pointer-events-none absolute top-8 whitespace-nowrap rounded bg-[color:var(--surface-2)] px-2 py-1 text-xs text-[color:var(--foreground)] opacity-0 group-hover:opacity-100 transition border border-[color:var(--border)]">
          GitHub
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group flex flex-col items-center">
        <a
          href="https://www.linkedin.com/in/sahvaan-p-835456322/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--muted)] hover:text-[color:var(--warm-accent)] transition transform hover:scale-105"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        <span className="pointer-events-none absolute top-8 whitespace-nowrap rounded bg-[color:var(--surface-2)] px-2 py-1 text-xs text-[color:var(--foreground)] opacity-0 group-hover:opacity-100 transition border border-[color:var(--border)]">
          LinkedIn
        </span>
      </div>
    </div>
  </nav>
</header>
  );
}