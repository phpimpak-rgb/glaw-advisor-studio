import { contact } from "@/config/contact";

export const Footer = () => {
  return (
    <footer className="bg-navy-soft text-cloud/80">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">หมายเหตุสำคัญ</h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-cloud/70">
              <p>
                ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อให้ข้อมูลเบื้องต้นเกี่ยวกับการวางแผนประกันและการเงินเท่านั้น
                ไม่ใช่ข้อเสนอขายหรือคำแนะนำทางการเงินส่วนบุคคลโดยสมบูรณ์ รายละเอียดความคุ้มครอง
                เงื่อนไข ข้อยกเว้น ระยะเวลารอคอย การพิจารณารับประกัน และผลประโยชน์ต่าง ๆ
                เป็นไปตามข้อกำหนดของกรมธรรม์และเงื่อนไขของแต่ละผลิตภัณฑ์
                กรุณาศึกษารายละเอียดและรับคำอธิบายเพิ่มเติมก่อนตัดสินใจ
              </p>
              <p>
                สำหรับผลิตภัณฑ์ที่เกี่ยวข้องกับการลงทุน ผลตอบแทนไม่สามารถรับประกันได้
                และผู้เอาประกันภัยควรทำความเข้าใจความเสี่ยงก่อนตัดสินใจ
              </p>
              <p>
                ข้อมูลที่ติดต่อผ่านเว็บไซต์นี้ เช่น ชื่อ เบอร์โทรศัพท์ อีเมล หรือข้อความที่ส่งมา
                จะใช้เพื่อการติดต่อกลับ นัดหมาย ให้คำปรึกษาเบื้องต้น
                และดูแลเรื่องที่เกี่ยวข้องกับประกันเท่านั้น
                และอาจใช้เพื่อประสานงานกับบริษัทหรือหน่วยงานที่เกี่ยวข้องเท่าที่จำเป็นต่อการให้บริการ
                ข้อมูลจะไม่ถูกนำไปเผยแพร่ต่อสาธารณะโดยไม่ได้รับอนุญาต
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">ติดต่อ</p>
              <ul className="mt-4 space-y-2 text-cloud/80">
                <li>
                  LINE:{" "}
                  <a className="hover:text-gold" href={contact.lineUrl} target="_blank" rel="noreferrer">
                    {contact.lineId}
                  </a>
                </li>
                <li>
                  โทร:{" "}
                  <a className="hover:text-gold" href={`tel:${contact.phone}`}>
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  อีเมล:{" "}
                  <a className="break-all hover:text-gold" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">ตัวแทน</p>
              <p className="mt-4 text-cloud/80">{contact.fullNameTh} ({contact.nickname})</p>
              <p className="text-cloud/60">{contact.role}</p>
              <p className="mt-1 text-cloud/60">
                ใบอนุญาตตัวแทนประกันชีวิตเลขที่: {contact.licenseNo}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cloud/10 pt-6 text-xs text-cloud/50">
          © {new Date().getFullYear()} {contact.fullNameEn} · AIA Financial Advisor
        </div>
      </div>
    </footer>
  );
};
