import { createFileRoute } from "@tanstack/react-router";
import { Section } from "react";
import logo from "@/assets/alpha-prime-logo.png.asset.json";

export const Route = createFileRoute("/manifesto")({ component: ManifestoPage });

function ManifestoPage() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="pt-8 pb-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl overflow-hidden neon-border">
              <img src={logo.url} alt="Alpha Prime" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-lg font-bold">Alpha Prime Technologies</div>
              <div className="text-xs text-muted-foreground">The Philosophy of Infinite Connections</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-24">
        <article className="glass rounded-2xl p-8 prose">
          <h1>The Alpha Prime Manifesto: The Philosophy of Infinite Connections</h1>
          <p>
            Every transformative shift in human history has been driven by a change in how we connect. From the first
            spoken word to the printing press, connection is the engine of evolution. At Alpha Prime Technologies, we view
            the digital landscape not as a collection of isolated tools, but as an expansive, living nervous system.
          </p>

          <h2>The Three Core Pillars of Our Engineering Ideology</h2>
          <h3>The Symmetry of Matter and Logic</h3>
          <p>
            We reject the modern tech divide that separates hardware engineers from software developers. True
            innovation happens at the intersection. A physical sensor is a biological eye; a line of code is a thought
            path.
          </p>

          <h3>The Micro-to-Macro Scale (From Zero to Infinite)</h3>
          <p>
            Every massive network begins with a single bit — a 0 or a 1. Foundations must be flawless. We treat the smallest
            component with the highest reverence.
          </p>

          <h3>Open Architectures, Unlimited Futures</h3>
          <p>
            Technology should liberate, not lock down. Our ideology demands open, modular, and scalable design.
          </p>

          <h2>The Educational Manifesto: Rewriting the Human Code</h2>
          <p>
            Our workshops and training programs are not mere tutorials; they are an intervention in modern education. We
            move learners from passive consumption to active architecture — empowering students to become authors of
            technology rather than just users of it.
          </p>

          <h2>The Eternal Metric: How We Measure Success</h2>
          <p>
            Our ultimate benchmark is the awakening of creative agency: the exact moment a student, partner, or client
            sees a real-world problem and says, "I can build the solution myself." From the void of a blank screen to the
            infinite possibilities of a connected world, we are the architects of the bridge. We are Alpha Prime.
          </p>
        </article>
      </main>
    </div>
  );
}
