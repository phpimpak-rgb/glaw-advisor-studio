import { motion } from "framer-motion";
import portraitAsset from "@/assets/klao-portrait.png.asset.json";

const stats = [
  { value: "5+", label: "ปีในวงการประกัน" },
  { value: "200+", label: "ลูกค้าที่ดูแล" },
  { value: "AIA", label: "ตัวแทนทางการ" },
];

const values = [
  { title: "เข้าใจ", desc: "ฟังก่อนเสมอ เข้าใจเป้าหมายและความกังวลของคุณ" },
  { title: "ใส่ใจ", desc: "ออกแบบแผนเฉพาะคุณ ไม่ใช่แผนสำเร็จรูป" },
  { title: "ไม่ทิ้ง", desc: "อยู่เคียงข้างตลอดสัญญา ทั้งวันสุข และวันที่ต้องเคลม" },
];

export const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-portrait">
            <img
              src={portrait}
              alt="เกล้า ที่ปรึกษาการเงินและประกันจาก AIA"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy px-6 py-5 text-cloud shadow-soft md:block">
            <p className="font-semibold">เกล้า · Klao</p>
            <p className="mt-1 text-xs tracking-wider text-cloud/70">AIA FINANCIAL ADVISOR</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-navy/60">
            <span className="h-px w-8 bg-gold" /> โปรไฟล์
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy md:text-5xl">
            ที่ปรึกษาที่อยู่กับคุณ
            <br />
            <span className="text-gold">ในทุกบทของชีวิต</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
            เกล้าเชื่อว่าประกันไม่ใช่เรื่องของสัญญา แต่คือเครื่องมือที่ช่วยให้คุณใช้ชีวิตได้อย่างมั่นใจ
            ด้วยประสบการณ์การดูแลลูกค้าหลากหลายช่วงชีวิต ตั้งแต่วัยเริ่มทำงาน วางแผนครอบครัว ไปจนถึงวางแผนเกษียณ
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-navy/10 py-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold text-navy md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs text-navy/60 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{v.title}</h3>
                  <p className="mt-1 text-sm text-navy/65">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
