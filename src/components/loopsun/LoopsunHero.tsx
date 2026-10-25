import { ArrowUpRight, Zap } from "lucide-react";
import ThermostatDial from "@/components/loopsun/ThermostatDial";

const navLinks = ["Home", "Solutions", "About", "Contact"];
const tags = ["Solar", "Battery Storage", "EV Charging"];
const WHATSAPP_URL = "https://wa.me/254700522058";

const LoopsunHero = () => (
  <section className="min-h-screen w-full p-3 sm:p-6 lg:p-8" style={{ backgroundColor: "#E8E8E8" }}>
    {/* Glass frame */}
    <div
      className="relative flex min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[28px] border border-white/80 sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.55) 0%, rgba(240,240,240,0.35) 45%, rgba(225,225,225,0.25) 100%)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a href="#" className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-[0.35em] text-[#1F1F1F]">LOOPSUN</span>
          <span className="hidden h-3 w-px bg-[#1F1F1F]/30 sm:block" aria-hidden="true" />
          <span className="hidden h-6 w-6 items-center justify-center rounded-full border border-[#1F1F1F]/20 sm:flex">
            <Zap className="h-3 w-3 text-[#1F1F1F]" strokeWidth={1.5} />
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-xs transition-colors hover:text-[#1F1F1F] ${
                i === 0 ? "text-[#1F1F1F]" : "text-[#9A9A9A]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-xs text-[#1F1F1F] underline underline-offset-4 sm:inline-flex"
          >
            Let's talk <ArrowUpRight className="h-3 w-3 text-[#FF9F2E]" />
          </a>
          <button type="button" aria-label="Open menu" className="flex flex-col items-end gap-1.5 p-1">
            <span className="block h-px w-7 bg-[#1F1F1F]" />
            <span className="block h-px w-5 bg-[#1F1F1F]" />
          </button>
        </div>
      </header>

      {/* Thermostat in the background */}
      <div className="relative flex flex-1 items-center justify-center py-6 lg:absolute lg:inset-0 lg:py-0">
        <div className="lg:-translate-y-[4%]">
          <ThermostatDial />
        </div>
      </div>

      {/* Soft floor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(180deg, rgba(232,232,232,0) 0%, rgba(220,220,220,0.5) 100%)" }}
      />

      {/* Bottom content */}
      <div className="pointer-events-none relative z-10 mt-auto grid gap-8 px-5 pb-6 sm:px-8 sm:pb-8 lg:grid-cols-2 lg:items-end">
        <div className="pointer-events-auto max-w-xl">
          <h1 className="text-4xl leading-[1.05] tracking-tight text-[#1F1F1F] sm:text-5xl xl:text-6xl">
            <span className="font-normal">Solutions for an</span>
            <br />
            <span className="font-extralight">Electric Future.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8A8A8A]">
            Clean power for homes and businesses across Kenya — designed, installed and monitored so your
            energy just works, rain or shine.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F2226] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
          >
            Let's talk <ArrowUpRight className="h-3.5 w-3.5 text-[#FFB347]" />
          </a>
        </div>

        <div className="pointer-events-auto max-w-sm lg:justify-self-end">
          <p className="text-sm leading-snug text-[#1F1F1F]">
            From rooftop solar to smart storage and EV charging,{" "}
            <span className="text-[#9A9A9A]">we build energy systems that keep pace with the way you live.</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#1F1F1F]/60 px-3 py-1 text-[10px] uppercase tracking-wider text-[#1F1F1F]"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-[#1F1F1F]/60 px-3 py-1 text-[10px] text-[#1F1F1F]">+</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LoopsunHero;
