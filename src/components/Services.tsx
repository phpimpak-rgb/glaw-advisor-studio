import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "วางแผนความเสี่ยง",
    desc: "ออกแบบเกราะป้องกันชีวิตและทรัพย์สิน ให้แผนการเงินของคุณไม่สะดุดเมื่อเกิดเรื่องไม่คาดฝัน",
    points: ["ประกันชีวิต", "ประกันอุบัติเหตุ", "ประกันโรคร้ายแรง"],
  },
  {
    no: "02",
    title: "ประกันสุขภาพ",
    desc: "เลือกแผนสุขภาพที่เหมาะกับไลฟ์สไตล์และงบประมาณ ครอบคลุมทั้ง OPD, IPD และโรคเฉพาะทาง",
    points: ["เหมาจ่าย", "ค่ารักษาพยาบาล", "ดูแลครอบครัว"],
  },
  {
    no: "03",
    title: "วางแผนเกษียณ & ลงทุน",
    desc: "วางเป้าหมายระยะยาว สร้างความมั่งคั่งและกระแสเงินสดที่ยั่งยืนผ่านยูนิตลิงค์และประกันบำนาญ",
    points: ["Unit Linked", "ประกันบำนาญ", "ลดหย่อนภาษี"],
  },
  {
    no: "04",
    title: "ที่ปรึกษาส่วนตัว",
    desc: "ทบทวนพอร์ตประกันและการเงินเป็นรอบ ๆ พร้อมอยู่เคียงข้างเมื่อคุณต้องเคลม ไม่ทิ้ง ไม่หาย",
    points: ["รีวิวประจำปี", "บริการเคลม", "ดูแลตลอดสัญญา"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative scroll-mt-24 bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy/60">
              <span className="h-px w-8 bg-gold" /> บริการ
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy md:text-5xl">
              ดูแลทุกด้านของการเงิน
              <br />
              <span className="text-gold">ในที่เดียว</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-navy/65">
            ไม่ใช่แค่ขายประกัน แต่ออกแบบแผนการเงินที่เหมาะกับชีวิตคุณ
            พร้อมเป็นที่ปรึกษาระยะยาวที่คุณวางใจได้
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white/70 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium tracking-widest text-gold">{s.no}</span>
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy/50 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-white"
                >
                  →
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-navy md:text-3xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/65">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-cream px-3 py-1 text-xs text-navy/70"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
