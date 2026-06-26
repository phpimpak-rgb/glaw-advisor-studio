import { motion } from "framer-motion";
import { contact } from "@/config/contact";

const channels = [
  { label: "LINE", value: contact.lineId, href: contact.lineUrl, cta: "เพิ่มเพื่อน" },
  { label: "โทรศัพท์", value: contact.phoneDisplay, href: `tel:${contact.phone}`, cta: "โทรเลย" },
  { label: "อีเมล", value: contact.email, href: `mailto:${contact.email}`, cta: "ส่งอีเมล" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy py-24 text-cloud md:py-32">
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--gold) / 0.6), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--cream)), transparent)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cloud/70"
        >
          <span className="h-px w-8 bg-gold" /> ติดต่อ
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-4xl font-semibold leading-tight md:text-6xl"
        >
          พร้อมเริ่มต้น<br className="md:hidden" />
          <span className="text-gold"> วางแผนการเงิน</span> หรือยัง?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cloud/70 md:text-lg"
        >
          ปรึกษาฟรี ไม่มีค่าใช้จ่าย ไม่มีการขายแบบกดดัน
          เกล้าจะรับฟังและออกแบบแผนที่เหมาะกับคุณจริง ๆ
        </motion.p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="group rounded-3xl border border-cloud/15 bg-cloud/5 p-8 text-left backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/60 hover:bg-cloud/10"
            >
              <p className="text-xs uppercase tracking-widest text-cloud/60">{c.label}</p>
              <p className="mt-3 text-lg font-medium text-cloud">{c.value}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                {c.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 border-t border-cloud/10 pt-8 text-xs text-cloud/50">
          © {new Date().getFullYear()} Klao · AIA Financial Advisor · เข้าใจ ใส่ใจ ไม่ทิ้ง ไม่หาย
        </div>
      </div>
    </section>
  );
};
