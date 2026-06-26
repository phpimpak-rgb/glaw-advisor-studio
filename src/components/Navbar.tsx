import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "หน้าแรก", href: "#home" },
  { label: "บริการ", href: "#services" },
  { label: "โปรไฟล์", href: "#about" },
  { label: "ติดต่อ", href: "#contact" },
];

export const Navbar = () => {
  const reduce = useReducedMotion();
  return (
    <motion.header
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#home" className="font-display text-2xl tracking-[0.25em] text-navy">
          KLAO
          <span className="ml-2 inline-block h-1.5 w-1.5 -translate-y-1 rounded-full bg-gold align-middle" />
        </a>

        <ul className="hidden items-center gap-9 text-sm text-navy/75 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-navy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-navy/15 bg-cloud/60 px-5 py-2 text-sm text-navy backdrop-blur transition hover:border-gold hover:bg-cloud md:inline-block"
        >
          นัดปรึกษา
        </a>

        {/* mobile cta */}
        <a
          href="#contact"
          className="rounded-full bg-navy px-4 py-2 text-xs text-cloud md:hidden"
        >
          ปรึกษา
        </a>
      </nav>
    </motion.header>
  );
};
