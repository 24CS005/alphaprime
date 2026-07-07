import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/manifesto")({ component: ManifestoPage });

function ManifestoPage() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="pt-8 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl overflow-hidden neon-border">
                <img src="/alp.png" alt="Alpha Prime" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-[0.16em] text-silver uppercase">
                  Alpha Prime Technologies
                </div>
                <div className="text-xs md:text-[11px] font-medium tracking-[0.28em] text-cyan-neon/80 uppercase">
                  The Philosophy of Infinite Connections
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-cyan-neon/30 bg-cyan-neon/10 px-4 py-2 text-sm font-semibold text-cyan-neon transition-all hover:bg-cyan-neon/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-24">
        <article className="glass rounded-2xl p-5 sm:p-6 md:p-10 text-slate-200 leading-relaxed relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.16)] hover:border-cyan-neon/30">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_40%)]" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-cyan-neon text-balance">
            The Alpha Prime Manifesto: The Philosophy of Infinite Connections
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-200/90">
            Every transformative shift in human history has been driven by a change in how we connect. From the first
            spoken word to the printing press, connection is the engine of evolution. At Alpha Prime Technologies, we view
            the digital landscape not as a collection of isolated tools, but as an expansive, living nervous system.
          </p>

          <h2 className="mt-8 text-xl md:text-2xl font-semibold tracking-tight text-silver uppercase">
            The Three Core Pillars of Our Engineering Ideology
          </h2>
          <h3 className="mt-5 text-lg md:text-xl font-semibold text-cyan-neon/90">
            The Symmetry of Matter and Logic
          </h3>
          <p className="mt-2 text-slate-200/90">
            We reject the modern tech divide that separates hardware engineers from software developers. True
            innovation happens at the intersection. A physical sensor is a biological eye; a line of code is a thought
            path.
          </p>

          <h3 className="mt-5 text-lg md:text-xl font-semibold text-cyan-neon/90">
            The Micro-to-Macro Scale (From Zero to Infinite)
          </h3>
          <p className="mt-2 text-slate-200/90">
            Every massive network begins with a single bit — a 0 or a 1. Foundations must be flawless. We treat the smallest
            component with the highest reverence.
          </p>

          <h3 className="mt-5 text-lg md:text-xl font-semibold text-cyan-neon/90">
            Open Architectures, Unlimited Futures
          </h3>
          <p className="mt-2 text-slate-200/90">
            Technology should liberate, not lock down. Our ideology demands open, modular, and scalable design.
          </p>

          <h2 className="mt-8 text-xl md:text-2xl font-semibold tracking-tight text-silver uppercase">
            The Educational Manifesto: Rewriting the Human Code
          </h2>
          <p className="mt-2 text-slate-200/90">
            Our workshops and training programs are not mere tutorials; they are an intervention in modern education. We
            move learners from passive consumption to active architecture — empowering students to become authors of
            technology rather than just users of it.
          </p>

          <h2 className="mt-8 text-xl md:text-2xl font-semibold tracking-tight text-silver uppercase">
            The Eternal Metric: How We Measure Success
          </h2>
          <p className="mt-2 text-slate-200/90">
            Our ultimate benchmark is the awakening of creative agency: the exact moment a student, partner, or client
            sees a real-world problem and says, "I can build the solution myself." From the void of a blank screen to the
            infinite possibilities of a connected world, we are the architects of the bridge. We are Alpha Prime.
          </p>
        </article>
      </main>
    </div>
  );
}
