import { motion } from "framer-motion";

const audiences = [
  "เจ้าของธุรกิจ",
  "ผู้บริหาร",
  "ครอบครัว",
  "คนที่เป็นเสาหลักของบ้าน",
  "คนที่มีคนพึ่งพารายได้",
  "คนที่อยากเริ่มวางแผน แต่ยังไม่รู้ว่าควรเริ่มจากตรงไหน",
];

export const WhoFor = () => {
  return (
    <section id="who-for" className="relative scroll-mt-24 bg-beige/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy/60">
            <span className="h-px w-8 bg-gold" /> เหมาะกับใคร
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy md:text-5xl">
            เหมาะกับ<span className="text-gold">ใคร</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
            เหมาะกับทุกท่าน ทุกวัย ที่อยากเข้าใจความเสี่ยงของตัวเอง
            และอยากวางแผนอย่างมีข้อมูลก่อนตัดสินใจ
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-navy/10 bg-white/70 p-8 backdrop-blur md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-gold">โดยเฉพาะ</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-2xl bg-cream/70 px-5 py-4 text-navy/85"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
