import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "วางแผนประกันสุขภาพ",
    desc: "ช่วยดูแนวทางความคุ้มครองด้านค่ารักษาพยาบาล ชดเชยรายได้ และโรคร้ายแรง เพื่อให้เหมาะกับช่วงชีวิตและภาระที่ต้องดูแล",
  },
  {
    no: "02",
    title: "วางแผนประกันชีวิตและอุบัติเหตุ",
    desc: "ช่วยวางหลักประกันให้ตัวเอง ครอบครัว หรือคนที่ต้องพึ่งพารายได้ของคุณ หากเกิดเหตุไม่คาดคิด",
  },
  {
    no: "03",
    title: "วางแผนออมเงิน เกษียณ และควบการลงทุน",
    desc: "ช่วยดูทางเลือกสำหรับเป้าหมายระยะยาว เช่น การออม การเกษียณ และแบบประกันชีวิตควบการลงทุน โดยอธิบายทั้งโอกาส ข้อจำกัด และความเสี่ยงก่อนตัดสินใจ",
  },
  {
    no: "04",
    title: "ดูแลเจ้าของธุรกิจ ผู้บริหาร และองค์กร",
    desc: "ช่วยให้เจ้าของธุรกิจและผู้บริหารมองเห็นความเสี่ยงที่เกี่ยวข้องกับตัวเอง ครอบครัว พนักงาน และสวัสดิการองค์กร",
  },
  {
    no: "05",
    title: "ที่ปรึกษาส่วนตัวด้านประกัน",
    desc: "ช่วยฟังปัญหา ดูภาพรวม เปรียบเทียบทางเลือก และดูแลต่อเนื่องหลังการทำประกัน ไม่ทิ้ง ไม่หาย",
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
              บริการที่เกล้า<span className="text-gold">ดูแล</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-navy/65">
            ให้คำแนะนำเบื้องต้นและดูแลเกี่ยวกับแบบประกันและบริการของ AIA
            ครอบคลุมหลายหมวดตามความต้องการ เป้าหมาย และเงื่อนไขของแต่ละบุคคล
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
              <h3 className="mt-6 text-2xl font-semibold text-navy md:text-[26px]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/65">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
