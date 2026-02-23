"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* LOGO / NAME */}
        <Link
          href="/"
          className="font-semibold text-zinc-900 hover:text-teal-600 transition"
        >
          Sahvaan Price
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/about" className="text-zinc-600 hover:text-teal-600 transition">
            About
          </Link>

          <Link href="/projects" className="text-zinc-600 hover:text-teal-600 transition">
            Projects
          </Link>

          <Link href="/certifications" className="text-zinc-600 hover:text-teal-600 transition">
            Certifications
          </Link>

          <Link href="/resume" className="text-zinc-600 hover:text-teal-600 transition">
            Resume
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sahvaanprice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-teal-600 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sahvaan-p-835456322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-teal-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

      </nav>
    </header>
  );
}