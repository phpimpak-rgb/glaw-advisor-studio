import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    desc: "ช่วยดูทางเลือกสำหรับเป้าหมายระยะยาว เช่น การออม การเกษียณ และแบบประกันชีวิตควบการลงทุน",
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

const cardBase =
  "group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500";

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

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {services.map((s, i) => {
            const isFeatured = i === 1;
            const isWide = i === 3 || i === 4;
            const isStandout = i === 4;

            return (
              <motion.article
                key={s.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={[
                  cardBase,
                  isFeatured
                    ? "md:col-span-6 lg:col-span-4 bg-navy text-cloud shadow-2xl md:-translate-y-4 hover:-translate-y-5"
                    : isStandout
                    ? "md:col-span-12 lg:col-span-6 border-2 border-gold/20 bg-cream/70 hover:border-gold/60 hover:shadow-soft"
                    : isWide
                    ? "md:col-span-12 lg:col-span-6 border border-navy/10 bg-white/70 backdrop-blur hover:border-gold/40 hover:shadow-soft"
                    : "md:col-span-6 lg:col-span-4 border border-navy/10 bg-white/70 backdrop-blur hover:border-gold/40 hover:shadow-soft",
                ].join(" ")}
              >
                {isFeatured && (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gold" />
                )}
                {isStandout && (
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <span
                      className={[
                        "text-4xl font-light transition-colors duration-500",
                        isFeatured
                          ? "text-gold/30 group-hover:text-gold/60"
                          : isStandout
                          ? "text-gold"
                          : "text-navy/10 group-hover:text-gold/60",
                      ].join(" ")}
                    >
                      {s.no}
                    </span>
                    {isStandout ? (
                      <span className="rounded-full bg-gold px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-cloud">
                        Recommended
                      </span>
                    ) : (
                      <div
                        className={[
                          "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300",
                          isFeatured
                            ? "border-gold bg-gold text-navy group-hover:rotate-45"
                            : "border-navy/15 text-navy/50 group-hover:border-gold group-hover:bg-gold group-hover:text-white",
                        ].join(" ")}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  <div className="mt-10 flex flex-col flex-grow">
                    <h3
                      className={[
                        "text-2xl font-semibold leading-snug md:text-[26px]",
                        isFeatured ? "text-cloud" : "text-navy",
                      ].join(" ")}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={[
                        "mt-4 text-[15px] leading-relaxed",
                        isFeatured ? "text-cloud/70" : "text-navy/65",
                      ].join(" ")}
                    >
                      {s.desc}
                    </p>

                    {isStandout && (
                      <a
                        href="#contact"
                        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-cloud transition-all hover:scale-105 hover:shadow-soft"
                      >
                        ปรึกษาฟรี
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
