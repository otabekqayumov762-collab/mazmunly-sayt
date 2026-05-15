import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import type { Lang } from "../lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    ["#how", t.nav_how],
    ["#tariffs", t.nav_tariffs],
    ["#sample", t.nav_sample],
    ["#faq", t.nav_faq],
  ] as const;

  const [scrolled, setScrolled] = useState(false);

  // Drawer ochilganda body scroll bloklash
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll'da header foni paydo bo'ladi
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-2 sm:py-2.5 bg-paper/85 backdrop-blur-md border-b border-line"
          : "pt-3 sm:pt-4 border-b border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-baseline gap-[2px] shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-xl sm:text-2xl tracking-tight text-ink">
            Mazmoonly
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-clay mb-[3px]" />
        </Link>

        {/* Floating pill — markazda suzuvchi kapsula */}
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-paper/90 backdrop-blur-md border border-line shadow-[0_10px_30px_-12px_rgba(28,26,23,0.18)]">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="group relative px-4 py-1.5 text-[15px] text-ink-soft rounded-full hover:text-ink hover:bg-paper-deep/70 transition-colors"
            >
              {label}
              <span className="absolute left-4 right-4 -bottom-[1px] h-[1.5px] bg-clay scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center text-xs sm:text-sm border border-line rounded-full overflow-hidden">
            {(["uz", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 sm:px-3 py-1 transition-colors ${
                  lang === l ? "bg-ink text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to="/start"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-clay text-paper text-[15px] hover:bg-ink transition-colors"
          >
            {t.nav_start}
          </Link>

          {/* Hamburger — faqat mobil */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span
              className={`w-5 h-[1.5px] bg-ink transition-all ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-ink transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-ink transition-all ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobil drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-paper z-30 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-x pt-24 pb-8 flex flex-col gap-1">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-serif text-ink border-b border-line"
            >
              {label}
            </a>
          ))}
          <Link
            to="/start"
            onClick={() => setOpen(false)}
            className="mt-6 py-4 rounded-full bg-clay text-paper text-center text-lg"
          >
            {t.nav_start}
          </Link>
        </div>
      </div>
    </header>
  );
}
