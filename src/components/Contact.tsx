import { motion } from "framer-motion";
import { contact } from "@/config/contact";

const channels = [
  { label: "LINE", value: contact.lineId, href: contact.lineUrl },
  { label: "โทรศัพท์", value: contact.phoneDisplay, href: `tel:${contact.phone}` },
  { label: "อีเมล", value: contact.email, href: `mailto:${contact.email}` },
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
          ติดต่อ<span className="text-gold">เกล้า</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cloud/70 md:text-lg"
        >
          สนใจวางแผน อยากเช็กความคุ้มครอง หรือมีคำถามเกี่ยวกับประกัน
          ติดต่อเกล้าได้ทาง LINE โทรศัพท์ หรืออีเมล
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={contact.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-medium text-navy shadow-soft transition hover:-translate-y-0.5 sm:w-auto"
          >
            คุยกับเกล้าทาง LINE <span aria-hidden>→</span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cloud/25 bg-cloud/5 px-7 py-4 text-base text-cloud backdrop-blur transition hover:border-gold sm:w-auto"
          >
            โทรหาเกล้า
          </a>
        </motion.div>

        <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
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
              className="group rounded-3xl border border-cloud/15 bg-cloud/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/60 hover:bg-cloud/10"
            >
              <p className="text-xs uppercase tracking-widest text-cloud/60">{c.label}</p>
              <p className="mt-3 break-all text-lg font-medium text-cloud">{c.value}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
                ติดต่อ <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
