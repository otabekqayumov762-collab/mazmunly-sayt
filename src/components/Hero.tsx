import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <p className="fade-up text-clay text-sm tracking-[0.18em] uppercase mb-6">
            {t.hero_kicker}
          </p>
          <h1
            className="fade-up text-5xl md:text-7xl text-ink whitespace-pre-line"
            style={{ animationDelay: "0.08s" }}
          >
            {t.hero_title}
          </h1>
          <p
            className="fade-up mt-8 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed"
            style={{ animationDelay: "0.16s" }}
          >
            {t.hero_sub}
          </p>
          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              to="/start"
              className="px-7 py-3.5 rounded-full bg-ink text-paper text-base hover:bg-clay transition-colors"
            >
              {t.hero_cta}
            </Link>
            <a
              href="#tariffs"
              className="px-7 py-3.5 rounded-full border border-ink/20 text-ink text-base hover:border-clay hover:text-clay transition-colors"
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
      </div>

      {/* dekorativ kitob silueti */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block opacity-[0.07]">
        <div className="w-[420px] h-[560px] rounded-r-2xl border-[3px] border-ink relative">
          <div className="absolute inset-y-6 left-6 right-10 border-l border-ink/40" />
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute left-16 right-12 border-t border-ink/30"
              style={{ top: `${14 + i * 11}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
