import { motion } from "framer-motion";
import portraitAsset from "@/assets/klao-portrait.png.asset.json";
import { contact } from "@/config/contact";

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
              src={portraitAsset.url}
              alt="GLAW พิมพ์พักตร์ ภัทรกิจไพศาล ตัวแทนและที่ปรึกษาการเงิน AIA"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-navy px-6 py-5 text-cloud shadow-soft md:block">
            <p className="font-semibold">GLAW</p>
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
            GLAW คือ<span className="text-gold">ใคร</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70 md:text-lg">
            GLAW ไม่อยากให้คนจำว่าเป็นแค่ตัวแทนประกัน แต่อยากให้จำว่าเป็นคนที่ใส่ใจ
            ไม่ทิ้ง ไม่หาย และพร้อมให้คำปรึกษาได้ทั้งในวันที่ทุกอย่างปกติ
            หรือวันที่มีเรื่องไม่คาดคิดเกี่ยวกับประกันและการวางแผนการเงิน
          </p>

          <div className="mt-10 rounded-3xl border border-navy/10 bg-white/60 p-7 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-navy/50">Profile</p>
            <p className="mt-3 text-2xl font-semibold text-navy">{contact.fullNameEn}</p>
            <p className="mt-1 text-lg text-navy/80">{contact.fullNameTh}</p>
            <p className="mt-1 text-sm text-navy/60">ชื่อเล่น {contact.nickname}</p>
            <div className="mt-5 space-y-1.5 border-t border-navy/10 pt-5 text-sm text-navy/75">
              <p>{contact.role}</p>
              <p>
                ใบอนุญาตตัวแทนประกันชีวิตเลขที่:{" "}
                <span className="font-semibold text-navy">{contact.licenseNo}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
