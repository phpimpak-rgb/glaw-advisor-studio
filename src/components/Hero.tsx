import { motion, useReducedMotion } from "framer-motion";
import heroPortraitAsset from "@/assets/klao-hero.png.asset.json";
import { CloudScene } from "./CloudScene";
import { contact } from "@/config/contact";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const floatingLabels = [
  { text: "วางแผนความเสี่ยง", className: "top-[8%] -left-4 md:-left-10" },
  { text: "ประกันสุขภาพ", className: "top-[44%] -right-2 md:-right-8" },
  { text: "ที่ปรึกษาส่วนตัว", className: "bottom-[10%] left-4 md:left-2" },
];

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <CloudScene />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pb-16 pt-32 md:px-10 md:pt-36 lg:flex-row lg:gap-12 lg:pt-28">

        {/* LEFT — copy */}
        <div className="order-2 flex w-full flex-col lg:order-1 lg:w-[55%]">
          <motion.span
            {...fadeUp(0.1)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-cloud/60 px-4 py-1.5 text-xs tracking-wider text-navy/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            ที่ปรึกษาการเงินและประกัน
            <span className="text-navy/40">·</span>
            <span className="font-medium text-navy/80">AIA</span>
          </motion.span>

          <motion.h1
            {...fadeUp(0.25)}
            className="mt-8 font-display text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-navy md:text-6xl lg:text-[4.25rem]"
          >
            หากคุณไม่มีแผนการเงิน
            <br />
            เงินทุกก้อนที่หามาได้
            <br />
            <span className="text-gold">คือความเสี่ยง</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-navy-soft md:text-xl"
          >
            เข้าใจทุกมุมมอง ใส่ใจทุกความกังวล พร้อมให้คำปรึกษาทุกเรื่องด้านประกัน
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy/65 md:text-base"
          >
            เข้าใจทุกมุมมอง ใส่ใจทุกความกังวล พร้อมให้คำปรึกษาทุกเรื่องด้านประกัน
          </motion.p>


          <motion.div {...fadeUp(0.65)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={contact.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-navy px-7 py-4 text-sm text-cloud shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-20px_hsl(var(--navy)/0.5)] md:text-base"
            >
              <span className="relative z-10">คุยกับเกล้าทาง LINE</span>
              <span
                aria-hidden
                className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gold/90 text-navy transition-transform group-hover:translate-x-1"
              >
                →
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </a>

            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-cloud/70 px-6 py-4 text-sm text-navy backdrop-blur transition hover:border-gold hover:bg-cloud md:text-base"
            >
              <span className="text-gold">☏</span> โทรหาเกล้า
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.8)} className="mt-8 flex items-center gap-6 text-sm">
            <a href="#services" className="text-navy/70 underline decoration-gold/60 decoration-1 underline-offset-[6px] transition hover:text-navy">
              ดูบริการ
            </a>
            <span className="h-1 w-1 rounded-full bg-navy/20" />
            <a href="#about" className="text-navy/70 underline decoration-gold/60 decoration-1 underline-offset-[6px] transition hover:text-navy">
              ดูโปรไฟล์
            </a>
          </motion.div>
        </div>

        {/* RIGHT — portrait */}
        <div className="order-1 relative mb-4 flex w-full justify-center lg:order-2 lg:mb-0 lg:mt-0 lg:w-[45%]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[88%] max-w-[460px] lg:w-full"
          >
            {/* decorative frame */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] border border-gold/40"
              style={{ transform: "rotate(-2deg)" }}
            />
            <div
              aria-hidden
              className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-gold-soft to-gold/30 blur-2xl"
            />

            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] bg-cream shadow-portrait"
            >
            <img
              src={heroPortraitAsset.url}
              alt="เกล้า ที่ปรึกษาการเงินและประกันจาก AIA"
              width={896}
              height={1152}
              fetchPriority="high"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
              {/* subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/25 to-transparent" />

              {/* signature plate */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3 text-navy">
                <div>
                  <p className="font-display text-lg leading-none">Klao</p>
                  <p className="mt-1 text-[11px] tracking-wider text-navy/60">AIA · FINANCIAL ADVISOR</p>
                </div>
                <span className="flex h-9 items-center gap-1.5 rounded-full bg-navy px-3 text-[11px] text-cloud">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> พร้อมให้คำปรึกษา
                </span>
              </div>
            </motion.div>

            {/* floating labels */}
            {floatingLabels.map((l, i) => (
              <motion.div
                key={l.text}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={
                  reduce
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -8, 0] }
                }
                transition={{
                  opacity: { duration: 0.8, delay: 0.8 + i * 0.15 },
                  scale: { duration: 0.8, delay: 0.8 + i * 0.15 },
                  y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                }}
                className={`absolute z-20 flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-navy md:text-sm ${l.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {l.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom marquee strip */}
      <motion.div
        {...fadeUp(1)}
        className="relative z-10 mx-auto -mt-4 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-navy/10 px-6 py-6 text-xs text-navy/55 md:justify-between md:px-10"
      >
        <span className="tracking-widest">TRUSTED ADVISOR · AIA</span>
        <span className="hidden md:inline">เข้าใจ · ใส่ใจ · ไม่ทิ้ง · ไม่หาย</span>
        <span className="tracking-widest">EST. PERSONAL CARE</span>
      </motion.div>
    </section>
  );
};
