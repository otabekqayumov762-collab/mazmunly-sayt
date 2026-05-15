import { useLang } from "../lib/LangContext";

export default function Sample() {
  const { t } = useLang();
  return (
    <section id="sample" className="border-t border-line bg-paper-deep/40">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl text-ink">{t.sample_title}</h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-lg">
            {t.sample_sub}
          </p>
        </div>

        {/* kitob sahifasi maketi */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] aspect-[3/4] bg-paper border border-line rounded-sm shadow-[0_20px_60px_-20px_rgba(28,26,23,0.3)] p-10 md:p-12 flex flex-col">
            <p className="text-xs tracking-[0.3em] uppercase text-muted">
              I
            </p>
            <h3 className="mt-8 font-serif text-2xl text-ink leading-snug">
              {t.sample_q}
            </h3>
            <div className="divider-dots" />
            <p className="text-ink-soft leading-relaxed font-serif text-lg italic">
              {t.sample_a}
            </p>
            <div className="mt-auto pt-8 text-center text-xs text-muted">
              — 12 —
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
