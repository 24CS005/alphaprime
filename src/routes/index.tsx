import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Rocket, Cpu, Cloud, Wifi, Shield, CheckCircle2, Sparkles, Menu, X,
  Wrench, Zap, Users, Lightbulb, Award, Network, TrendingUp, FolderKanban,
  Mail, Phone, Globe, ArrowRight, ChevronRight,
} from "lucide-react";
import logo from "@/assets/alpha-prime-logo.png.asset.json";
import iotBoard from "@/assets/iot-board.jpg";

export const Route = createFileRoute("/")({ component: Index });

const nav = [
  { label: "Home", href: "#home" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Who Can Join", href: "#audience" },
  { label: "Contact", href: "#contact" },
];

const pillars = [
  { icon: Wrench, title: "Hands-On Learning", desc: "Practical sessions with real-world projects." },
  { icon: Cpu, title: "Modern Technologies", desc: "Work with IoT devices, sensors, cloud & automation." },
  { icon: Users, title: "Expert Mentorship", desc: "Learn from industry professionals." },
  { icon: Zap, title: "Innovate & Build", desc: "Turn ideas into smart solutions." },
];

const curriculum = [
  "Introduction to Internet of Things (IoT)",
  "Sensors & Actuators Interface",
  "Microcontrollers (ESP32 / NodeMCU)",
  "Connectivity: Wi-Fi & IoT Protocols",
  "Front-End Foundations",
  "JavaScript Version Control",
];

const audience = [
  { title: " Students", desc: "Level up your academic projects with real hardware." },
  { title: "Tech Enthusiasts", desc: "Turn curiosity into working smart devices." },
  { title: "Innovators & Makers", desc: "Prototype ideas that live beyond the whiteboard." },
  { title: "Smart Tech Curious", desc: "No prior experience? Start here — we'll guide you." },
];

const perks = [
  { icon: FolderKanban, title: "Real Projects", desc: "Practical, industry-relevant builds." },
  { icon: Award, title: "Certificate", desc: "Recognized proof of your learning." },
  { icon: Network, title: "Network & Collaborate", desc: "Connect, share ideas, grow." },
  { icon: TrendingUp, title: "Boost Your Skills", desc: "Sharpen your profile & career." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen text-foreground overflow-x-hidden">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-4 md:mx-8">
          <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center gap-4">
            <a href="#home" className="flex items-center gap-3 min-w-0 shrink-0">
              <div className="h-10 w-10 shrink-0 rounded-xl overflow-hidden neon-border">
                <img src="/alp.png" alt="Alpha Prime" className="h-full w-full object-cover" />
              </div>
              <div className="hidden sm:block min-w-0 leading-tight">
                <div className="text-[13px] font-bold tracking-[0.18em] text-silver truncate">
                  ALPHA PRIME <span className="text-cyan-neon">TECHNOLOGIES</span>
                </div>
                <div className="text-[10px] tracking-[0.28em] text-muted-foreground">
                  INNOVATE • CONNECT • ELEVATE
                </div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-1 ml-auto">
              {nav.map((n) => (
                <a key={n.href} href={n.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-cyan-neon rounded-lg transition-colors relative group">
                  {n.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-cyan-neon scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </a>
              ))}
              <a href="#register"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/40 neon-glow-hover">
                Register <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
            <button onClick={() => setOpen((v) => !v)}
              className="md:hidden ml-auto p-2 rounded-lg text-cyan-neon" aria-label="menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col animate-fade-up">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-cyan-neon hover:bg-cyan-neon/5">
                  {n.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 grid-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-end mb-8 reveal">
            <div className="glass neon-border rounded-full px-4 py-2 flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] font-semibold">
              <Rocket className="h-4 w-4 text-cyan-neon drop-shadow-[0_0_8px_var(--cyan-neon)]" />
              <span className="text-silver">BUILD TODAY.</span>
              <span className="text-cyan-neon">INNOVATE TOMORROW.</span>
              <span className="text-silver hidden sm:inline">LEAD THE FUTURE.</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-6 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-cyan-neon animate-pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-neon" />
                </span>
                <span className="text-muted-foreground tracking-wider">SMART TECH WORKSHOP · 2026</span>
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.02]">
                <span className="text-gradient">ALPHA PRIME</span><br />
                <span className="text-silver">SMART TECH</span>{" "}
                <span className="text-gradient">WORKSHOP</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Explore. Connect. Innovate. Step into the world of smart technology
                and build intelligent solutions for a connected future.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#register"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-cyan-neon to-electric neon-glow hover:shadow-[0_0_40px_var(--cyan-neon)] transition-all">
                  <Rocket className="h-5 w-5" />
                  Register Early (Limited Seats)
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#curriculum" className="text-sm text-muted-foreground hover:text-cyan-neon transition-colors">
                  See curriculum →
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {[{ k: "6+", v: "Modules" }, { k: "Live", v: "Projects" }, { k: "1:1", v: "Mentorship" }].map((s) => (
                  <div key={s.v} className="premium-tech-card glow-emerald rounded-xl px-3 py-3 text-center">
                    <div className="text-2xl font-bold text-gradient">{s.k}</div>
                    <div className="text-[11px] tracking-widest text-muted-foreground uppercase">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

        {/* MANIFESTO */}
        <section id="manifesto" className="py-16 md:py-20 bg-gradient-to-b from-transparent to-navy-deep/5">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <SectionHead eyebrow="Manifesto" title={<><span className="text-gradient">The Alpha Prime Manifesto</span></>} />

            <div className="mt-8 glass rounded-2xl p-6 prose max-w-none text-sm text-muted-foreground">
              <h3>The Philosophy of Infinite Connections</h3>
              <p>
                Every transformative shift in human history has been driven by a change in how we connect. From the first
                spoken word to the printing press, connection is the engine of evolution. At Alpha Prime Technologies, we view
                the digital landscape not as a collection of isolated tools, but as an expansive, living nervous system.
              </p>

              <p className="font-semibold">Our fundamental belief is that <em>the distance between an idea (Zero) and its impact (Infinity) is bridged entirely by the quality of the connection.</em></p>

              <h4>Three Core Pillars of Our Engineering Ideology</h4>
              <ol>
                <li>
                  <strong>The Symmetry of Matter and Logic</strong>
                  <p>
                    We reject the modern tech divide that separates hardware engineers from software developers. True
                    innovation happens at the intersection. A physical sensor is a biological eye; a line of code is a thought
                    path. We build and teach so software gracefully commands the physical world, and the physical world
                    seamlessly informs software.
                  </p>
                </li>
                <li>
                  <strong>The Micro-to-Macro Scale (From Zero to Infinite)</strong>
                  <p>
                    Every massive network begins with a single bit — a 0 or a 1. Foundations must be flawless. A single
                    well-crafted microcontroller program or thoughtful web architecture can scale into dependable, global
                    systems. We treat the smallest component with the highest reverence.
                  </p>
                </li>
                <li>
                  <strong>Open Architectures, Unlimited Futures</strong>
                  <p>
                    Technology should liberate, not lock down. Whether building enterprise solutions or student frameworks,
                    our ideology demands open, modular, and scalable design. We do not build dead-ends; we build launching pads.
                  </p>
                </li>
              </ol>

              <h4>The Educational Manifesto: Rewriting the Human Code</h4>
              <p>
                Our workshops and training programs are not mere tutorials; they are an intervention in modern education. We
                move learners from passive consumption to active architecture — empowering students to become authors of
                technology rather than just users of it.
              </p>

              <h5>The End of Passive Consumption</h5>
              <p>
                The modern generation is surrounded by digital magic, yet most are merely passive consumers. We shatter this
                illusion and transform students into builders with practical kits, live servers, and project-driven learning.
              </p>

              <h5>Demystifying the Complex</h5>
              <p>
                No technology is too advanced for a curious mind when taught through intuitive analogy. We teach concepts as
                metaphors — HTML as the structural skeleton, CSS as the aesthetic wardrobe, JavaScript as the nervous system
                that animates ideas.
              </p>

              <h5>Democratizing Innovation</h5>
              <p>
                Genius is distributed evenly; opportunity is not. Our mission is to put development kits, microcontrollers, and
                live web servers directly into the hands of young minds so they can solve real-world problems immediately.
              </p>

              <h4>The Eternal Metric: How We Measure Success</h4>
              <p>
                Our ultimate benchmark is the awakening of creative agency: the exact moment a student, partner, or client
                sees a real-world problem and says, "I can build the solution myself." From the void of a blank screen to the
                infinite possibilities of a connected world, we are the architects of the bridge. We are Alpha Prime.
              </p>
            </div>
          </div>
        </section>
      {/* STRATEGIC MANIFESTOS */}
      <section id="strategic-manifestos" className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <SectionHead eyebrow="Strategic" title={<><span className="text-gradient">Alpha Prime Strategic Manifestos</span></>} />

          <div className="mt-8 glass rounded-2xl p-6 prose max-w-none text-sm text-muted-foreground">
            <p>
              Standard corporate goals talk about market share and revenue metrics. At Alpha Prime Technologies, we don't
              measure our horizon by standard parameters. Our main goals are built around a deeper, more striking mission:
              shifting humanity from blind, passive technological consumption into a future of active, infinite architecture.
            </p>

            <h4>1. The 100,000 "Architect" Directive</h4>
            <p>
              We refuse to evaluate the impact of our educational bootcamps through empty metrics like attendance sheets or
              certificates issued. Our concrete target is to turn <strong>100,000 passive device users into independent digital architects</strong>
              before the close of the decade.
            </p>
            <ul>
              <li><strong>The Benchmark:</strong> Tracked by unique, student-authored code repositories published online and the number of live IoT nodes running within our network.</li>
              <li><strong>The Shift:</strong> Success is when a student treats their device as a dynamic canvas for systematic programming rather than passive entertainment.</li>
            </ul>

            <h4>2. The Law of Radical Demystification (The "No-Black-Box" Mandate)</h4>
            <p>
              Technical intimidation is the greatest barrier preventing younger students from exploring advanced engineering.
              We enforce a strict law across all Alpha Prime tracks: <em>Every line of code and every piece of silicon must be mapped to an intuitive human equivalent.</em>
            </p>
            <ul>
              <li><strong>Structure as Flesh:</strong> HTML as the Structural Skeleton of human intent.</li>
              <li><strong>Design as Character:</strong> CSS as the Aesthetic Wardrobe of identity.</li>
              <li><strong>Logic as Life:</strong> JavaScript as the Nervous System that animates interfaces.</li>
              <li><strong>Hardware as Senses:</strong> IoT components presented as physical eyes, ears, and muscles.</li>
            </ul>

            <h4>3. Absolute Fusion of Matter and Logic</h4>
            <p>
              The industry is fractured—web devs rarely understand circuitry; hardware engineers rarely build interfaces.
              Alpha Prime's core objective is to obliterate this division: every track and system must fuse both worlds flawlessly.
            </p>

            <h4>4. Establishing the "Zero-Barrier" Sandbox Launchpad</h4>
            <p>
              Genius is distributed evenly, but access is not. Our primary goal is to eliminate financial and geographical
              barriers to advanced STEM learning by partnering with academic institutions to create plug-and-play
              Alpha Prime Innovation Labs on campuses.
            </p>
            <ul>
              <li><strong>The Infrastructure Goal:</strong> Permanently equipped campus labs with microcontrollers, cloud-hosting pipelines, and test components.</li>
              <li><strong>The Sandbox Blueprint:</strong> Students gain immediate agency to design, build, and deploy production-grade solutions from their desks.</li>
            </ul>

            <h4>🔮 The Ultimate Metric</h4>
            <p>
              Our ultimate milestone is reached when a student or institution confidently states: "I do not need to wait for a
              third-party corporation to build a solution for this. I possess the exact tools, the foundational logic, and the
              infinite connections required to design and deploy it myself."
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHead eyebrow="Core Pillars"
            title={<><span className="text-silver">Built to make you </span><span className="text-gradient">unstoppable</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {pillars.map((p) => (
              <div key={p.title} className="reveal premium-tech-card glow-cyan rounded-2xl p-6 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: "var(--gradient-glow)" }} />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl grid place-items-center bg-cyan-neon/10 border border-cyan-neon/30 text-cyan-neon group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-silver">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-5 h-px w-8 bg-gradient-to-r from-cyan-neon to-transparent group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM & AUDIENCE */}
      <section id="curriculum" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHead eyebrow="Curriculum & Audience"
            title={<><span className="text-gradient">Learn deeply.</span> <span className="text-silver">Build boldly.</span></>} />
          <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
            <div className="reveal">
              <div className="text-xs tracking-[0.3em] text-cyan-neon mb-4">WHAT YOU'LL LEARN</div>
              <ul className="space-y-3">
                {curriculum.map((c) => (
                  <li key={c} className="glass rounded-xl px-4 py-3.5 flex items-center gap-3 neon-glow-hover group">
                    <span className="grid place-items-center h-8 w-8 rounded-lg bg-cyan-neon/10 border border-cyan-neon/40 text-cyan-neon shrink-0 group-hover:bg-cyan-neon group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-silver">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="audience" className="reveal hidden lg:flex flex-col items-center justify-center px-4">
              <div className="relative h-56 w-56">
                <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                <div className="absolute inset-4 rounded-full border border-cyan-neon/30" />
                <div className="absolute inset-10 rounded-full border border-cyan-neon/20" />
                <div className="absolute inset-0 grid place-items-center">
                  <Lightbulb className="h-24 w-24 text-cyan-neon drop-shadow-[0_0_24px_var(--cyan-neon)] animate-float" />
                </div>
              </div>
              <div className="mt-4 text-[10px] tracking-[0.3em] text-muted-foreground">IDEAS · IGNITED</div>
            </div>

            <div className="reveal">
              <div className="text-xs tracking-[0.3em] text-cyan-neon mb-4 lg:text-right">WHO CAN JOIN?</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {audience.map((a) => (
                  <div key={a.title}
                    className="glass rounded-xl p-4 neon-glow-hover hover:scale-[1.03] transition-transform">
                    <div className="text-sm font-semibold text-silver">{a.title}</div>
                    <div className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-glow)" }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {perks.map((p) => (
                <div key={p.title}
                  className="group p-4 rounded-2xl border border-transparent hover:border-cyan-neon/40 hover:bg-cyan-neon/5 transition-all">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-muted text-muted-foreground group-hover:bg-cyan-neon/15 group-hover:text-cyan-neon group-hover:shadow-[0_0_20px_var(--cyan-neon)] transition-all">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-silver tracking-wide uppercase">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT STATUS */}
      <section id="register" className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { k: "DATE", v: "Coming Soon" },
              { k: "TIME", v: "Coming Soon" },
              { k: "VENUE", v: "To Be Announced" },
            ].map((e) => (
              <div key={e.k} className="glass rounded-2xl p-5 flex items-center gap-4 neon-glow-hover">
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-destructive animate-pulse-dot" />
                  <span className="relative h-3 w-3 rounded-full bg-destructive" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.3em] text-destructive font-bold">LIVE</div>
                  <div className="text-xs tracking-widest text-muted-foreground">{e.k}</div>
                  <div className="text-base font-semibold text-silver truncate">{e.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="mt-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl overflow-hidden neon-border">
                  <img src="/alp.png" alt="Alpha Prime" className="h-full w-full object-cover" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold tracking-[0.18em] text-silver">
                    ALPHA PRIME <span className="text-cyan-neon">TECHNOLOGIES</span>
                  </div>
                  <div className="text-[10px] tracking-[0.28em] text-muted-foreground">
                    INNOVATE • CONNECT • ELEVATE
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
                Empowering the next generation of engineers with hands-on smart
                technology, IoT, cloud & automation experiences.
              </p>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] text-cyan-neon mb-3">TEAM</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Founder:</strong> Aparna A</li>
                <li><strong>IoT Trainer:</strong> Ms Aparna</li>
                <li><strong>Web Development Trainer:</strong> Ms Joshika</li>
              </ul>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] text-cyan-neon mb-4">CONTACT</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="h-4 w-4 text-cyan-neon shrink-0" />
                  <a href="https://alphaprimetechnologies.in" className="hover:text-cyan-neon truncate">
                    www.alphaprimetechnologies.in
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-cyan-neon shrink-0" />
                  <a href="mailto:alphaprimetechnologies01@gmail.com" className="hover:text-cyan-neon truncate">
                    alphaprimetechnologies01@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-cyan-neon shrink-0" />
                  <a
                    href="https://wa.me/917810009612?text=Hello%20Alpha%20Prime%20Technologies%2C%20I%20would%20like%20to%20know%20more."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-neon"
                  >
                    +91 78100 09612
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Alpha Prime Technologies. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-cyan-neon" />
              Crafted for future engineers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="reveal text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] tracking-[0.3em] text-cyan-neon">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-neon animate-pulse-dot" />
        {eyebrow.toUpperCase()}
      </div>
      <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
    </div>
  );
}

function HeroVisual() {
  const orbits = [
    { icon: Wifi, label: "Wi-Fi", angle: 0 },
    { icon: Cloud, label: "Cloud", angle: 90 },
    { icon: Cpu, label: "IoT", angle: 180 },
    { icon: Shield, label: "Security", angle: 270 },
  ];
  return (
    <div className="reveal relative aspect-square max-w-[560px] mx-auto w-full">
      <div className="absolute inset-6 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 rounded-full border border-cyan-neon/20" />
      <div className="absolute inset-8 rounded-full border border-cyan-neon/15" />
      <div className="absolute inset-16 rounded-full border border-cyan-neon/10" />

      <div className="absolute inset-[18%] premium-tech-card glow-purple rounded-2xl overflow-hidden animate-float">
        <img src={iotBoard} alt="ESP32 microcontroller with DHT sensor"
          className="h-full w-full object-cover" width={1280} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
      </div>

      {orbits.map((o, i) => {
        const rad = (o.angle * Math.PI) / 180;
        const r = 44;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div key={o.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.6}s` }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" />
              <div className="glass neon-border rounded-full h-14 w-14 grid place-items-center text-cyan-neon">
                <o.icon className="h-5 w-5 drop-shadow-[0_0_8px_var(--cyan-neon)]" />
              </div>
              <div className="mt-1.5 text-center text-[10px] tracking-[0.2em] text-muted-foreground">
                {o.label.toUpperCase()}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
