import Container from "../components/Container";

export default function AboutPage() {
  return (
    <Container className="space-y-12">
      {/* Page Title */}
      <section className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
          About
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          About Me
        </h1>

        <div className="h-1.5 w-20 rounded-full bg-[color:var(--warm-accent)] opacity-90" />

        <p className="max-w-3xl text-lg leading-relaxed text-[color:var(--muted)]">
          I’m Sahvaan Price, an Information Systems student graduating in May 2026
          with a growing focus on analytics, business systems, and decision support.
          I enjoy turning complex information into something clearer, more useful,
          and easier for people to act on.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "What I Focus On",
            value: "Analytics, business systems, and improving decision-making",
          },
          {
            label: "How I Think",
            value: "Curious, structured, and always looking for better ways to solve problems",
          },
          {
            label: "What I’m Growing In",
            value: "Product thinking, process improvement, and using data to guide strategy",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
              {item.label}
            </p>

            <p className="mt-3 text-sm leading-6 text-[color:var(--foreground)]">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="max-w-3xl space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
          My Story
        </h2>

        <p className="leading-8 text-[color:var(--muted)]">
          I’ve always loved learning, understanding how things work, and finding
          better ways to solve problems. A big part of what drives me is the idea
          that there is always something to learn from people, systems, and everyday
          challenges. That mindset continues to push me toward work where I can keep
          learning while also making things easier and clearer for others.
        </p>

        <p className="leading-8 text-[color:var(--muted)]">
          During my time at Marathon Petroleum, I had to adjust to what it really
          meant to work as a Business Systems Analyst. At first, the role felt less
          clear to me, but over time I started to understand how even small pieces
          of work could contribute to much larger outcomes. That shift helped me
          appreciate the role more deeply and made me more intentional about
          understanding the bigger picture behind the work.
        </p>

        <p className="leading-8 text-[color:var(--muted)]">
          My experience at the University of Toledo has also played a big role in
          shaping that growth. Through coursework, internships, and networking
          opportunities, I’ve been able to strengthen both my technical skills and
          my confidence. It has given me space to grow more comfortable in myself
          while also opening doors to experiences that helped me better understand
          where I want to keep developing.
        </p>

        <p className="leading-8 text-[color:var(--muted)]">
          As I continue building my path, I’m especially drawn to work that combines
          analytical thinking, systems understanding, and problem-solving. I want to
          keep growing in roles where I can improve processes, support better
          decisions, and create more clarity across business and product environments.
        </p>
      </section>
    </Container>
  );
}