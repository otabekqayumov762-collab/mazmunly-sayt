import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import Hero3DBook from "./Hero3DBook";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-12 pb-16 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <p className="fade-up text-clay text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.18em] uppercase mb-4 sm:mb-6">
            {t.hero_kicker}
          </p>
          <h1
            className="fade-up text-[1.875rem] xs:text-[2.25rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[4.25rem] text-ink whitespace-pre-line"
            style={{ animationDelay: "0.08s" }}
          >
            {t.hero_title}
          </h1>
          <p
            className="fade-up mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed"
            style={{ animationDelay: "0.16s" }}
          >
            {t.hero_sub}
          </p>
          <div
            className="fade-up mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              to="/start"
              className="px-7 py-3.5 rounded-full bg-ink text-paper text-base text-center hover:bg-clay transition-colors"
            >
              {t.hero_cta}
            </Link>
            <a
              href="#tariffs"
              className="px-7 py-3.5 rounded-full border border-ink/20 text-ink text-base text-center hover:border-clay hover:text-clay transition-colors"
            >
              {t.hero_cta2}
            </a>
          </div>
          <p
            className="fade-up mt-6 text-sm text-muted"
            style={{ animationDelay: "0.3s" }}
          >
            {t.hero_note}
          </p>
        </div>

        {/* Interaktiv 3D kitob — sichqonchaga javob beradi */}
        <div
          className="fade-up h-[340px] sm:h-[420px] lg:h-[480px]"
          style={{ animationDelay: "0.32s" }}
        >
          <Hero3DBook />
        </div>
      </div>
    </section>
  );
}
