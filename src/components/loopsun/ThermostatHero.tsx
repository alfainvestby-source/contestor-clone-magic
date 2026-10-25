import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const NAIROBI = { latitude: -1.2864, longitude: 36.8172 };
const FALLBACK_TEMP = 21;

const fetchNairobiTemp = async (): Promise<number> => {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${NAIROBI.latitude}` +
    `&longitude=${NAIROBI.longitude}&current=temperature_2m&timezone=Africa%2FNairobi`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather request failed: ${res.status}`);
  const data = await res.json();
  return data.current.temperature_2m as number;
};

const ThermostatHero = () => {
  const [pressed, setPressed] = useState(false);
  const { data, isSuccess } = useQuery({
    queryKey: ["nairobi-temp"],
    queryFn: fetchNairobiTemp,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
  });

  const temp = Math.round(isSuccess ? data : FALLBACK_TEMP);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "#E8E8E8" }}
    >
      {/* Faint outer disc */}
      <div
        className="relative flex aspect-square w-[min(78vw,460px)] items-center justify-center rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 45%, #E9E9E9 0%, #E4E4E4 70%, #E1E1E1 100%)",
          boxShadow:
            "inset 0 2px 6px rgba(255,255,255,0.7), inset 0 -2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.015)",
        }}
      >
        {/* Amber backlight */}
        <div
          aria-hidden="true"
          className="absolute aspect-square w-[80%] rounded-full transition-all duration-700 ease-out"
          style={{
            transform: `translateY(${pressed ? 3 : 6}%)`,
            background:
              "radial-gradient(circle, rgba(255,166,64,0.55) 0%, rgba(255,176,90,0.28) 55%, rgba(255,190,120,0) 72%)",
            filter: "blur(18px)",
            opacity: pressed ? 0.75 : 1,
          }}
        />

        {/* Amber rim, peeking out from under the bottom edge of the dial */}
        <div
          aria-hidden="true"
          className="absolute aspect-square w-[80%] rounded-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(${pressed ? 0.6 : 1.4}%)`,
            background: "linear-gradient(180deg, rgba(255,200,130,0) 45%, #FFC070 85%, #FFAA45 100%)",
            boxShadow: "0 6px 22px rgba(255,160,60,0.35)",
          }}
        />

        {/* Main dial */}
        <button
          type="button"
          aria-label={`Current temperature in Nairobi: ${temp} degrees Celsius`}
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onPointerLeave={() => setPressed(false)}
          className="relative flex aspect-square w-[80%] cursor-pointer select-none items-center justify-center rounded-full outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#FFB347]/60 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(180deg, #F4F4F4 0%, #EEEEEE 55%, #E6E6E6 100%)",
            transform: pressed ? "translateY(1px) scale(0.99)" : undefined,
            boxShadow: [
              "inset 0 3px 2px rgba(255,255,255,0.95)",
              "inset 0 -4px 6px rgba(0,0,0,0.06)",
              "0 2px 3px rgba(0,0,0,0.06)",
              pressed ? "0 6px 14px rgba(0,0,0,0.08)" : "0 14px 30px rgba(0,0,0,0.10)",
            ].join(", "),
          }}
        >
          <span
            className="relative font-extralight leading-none tracking-tight text-[#2E2E2E]"
            style={{ fontSize: "clamp(4rem, 15vw, 7.5rem)" }}
          >
            {temp}
            <span
              aria-hidden="true"
              className="absolute -right-[0.42em] top-[0.02em] text-[0.3em] font-light text-[#9A9A9A]"
            >
              °
            </span>
          </span>
        </button>
      </div>

      <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-[#8A8A8A]">
        {isSuccess ? "Nairobi · Now" : "Nairobi"}
      </p>
    </section>
  );
};

export default ThermostatHero;
