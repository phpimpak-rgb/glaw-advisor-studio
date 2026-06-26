import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "คุยเบื้องต้น",
    desc: "ฟังความต้องการ ภาระ และความกังวลก่อน โดยยังไม่รีบเสนอแบบประกัน",
  },
  {
    no: "02",
    title: "เข้าใจภาพรวม",
    desc: "ดูว่าคุณต้องการปกป้องอะไร ใครต้องพึ่งพาคุณ และความเสี่ยงไหนควรจัดการก่อน",
  },
  {
    no: "03",
    title: "เสนอทางเลือก",
    desc: "อธิบายตัวเลือกที่เกี่ยวข้อง พร้อมข้อดี ข้อจำกัด เงื่อนไข และสิ่งที่ควรรู้ก่อนตัดสินใจ",
  },
  {
    no: "04",
    title: "ดูแลต่อเนื่อง",
    desc: "พร้อมช่วยตอบคำถาม ทบทวนแผน และดูแลเมื่อมีเรื่องต้องใช้สิทธิ์หรือปรับเปลี่ยนความคุ้มครอง",
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative scroll-mt-24 bg-cloud py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy/60">
            <span className="h-px w-8 bg-gold" /> ขั้นตอน
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy md:text-5xl">
            เริ่มปรึกษา<span className="text-gold">อย่างไร</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/65 md:text-lg">
            ขั้นตอนเรียบง่าย ตรงไปตรงมา ไม่มีการกดดัน
            ทุกคำตอบคือทางเลือกที่คุณตัดสินใจเองเสมอ
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-3xl border border-navy/10 bg-cream/50 p-7 backdrop-blur transition-all hover:border-gold/50 hover:bg-cream"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-semibold text-gold">{s.no}</span>
                <span className="text-xs uppercase tracking-widest text-navy/40">step</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
