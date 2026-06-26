import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export const CloudScene = () => {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  const intensity = isMobile ? 0.5 : 1;

  const blob = (delay: number) =>
    reduce
      ? {}
      : {
          animate: {
            x: [0, 30 * intensity, -20 * intensity, 0],
            y: [0, -25 * intensity, 15 * intensity, 0],
            scale: [1, 1.05, 0.98, 1],
          },
          transition: {
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-cloud-scene">
      <motion.div
        {...blob(0)}
        className="absolute -left-32 top-10 h-[42rem] w-[42rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--cream) / 0.9), transparent)", filter: "blur(60px)" }}
      />
      <motion.div
        {...blob(4)}
        className="absolute right-[-10rem] top-[-6rem] h-[36rem] w-[36rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--gold-soft) / 0.7), transparent)", filter: "blur(70px)" }}
      />
      <motion.div
        {...blob(8)}
        className="absolute bottom-[-12rem] left-1/3 h-[40rem] w-[40rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--beige) / 0.85), transparent)", filter: "blur(80px)" }}
      />

      {/* light particles */}
      {!reduce &&
        !isMobile &&
        Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 47) % 100}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

      {/* subtle grain via gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, hsl(var(--navy) / 0.06) 100%)",
        }}
      />
    </div>
  );
};
