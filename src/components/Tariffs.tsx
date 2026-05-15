import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import { TARIFFS, fmtPrice, type TariffId } from "../lib/tariffs";

const ORDER: TariffId[] = ["tabiiy", "oson", "demo"];

export default function Tariffs() {
  const { lang, t } = useLang();
  const nav = useNavigate();
  const [dur, setDur] = useState<Record<TariffId, number>>({
    tabiiy: 12,
    oson: 12,
    demo: 1,
  });

  return (
    <section id="tariffs" className="border-t border-line">
      <div className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-ink">{t.tariffs_title}</h2>
          <p className="mt-4 text-ink-soft text-lg">{t.tariffs_sub}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {ORDER.map((id) => {
            const tf = TARIFFS[id];
            const opt =
              tf.options.find((o) => o.duration === dur[id]) ?? tf.options[0];
            const monthly = Math.round(opt.price / opt.duration);
            const isPop = tf.popular;
            return (
              <div
                key={id}
                className={`relative rounded-2xl border p-8 md:p-10 flex flex-col ${
                  isPop
                    ? "border-clay bg-paper shadow-[0_8px_40px_-12px_rgba(185,96,58,0.25)]"
                    : "border-line bg-paper"
                }`}
              >
                {isPop && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-clay text-paper text-xs tracking-wide uppercase">
                    {t.popular}
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl text-ink">{tf.name}</h3>
                </div>
                <p className="mt-1 text-sm text-muted">{tf.tagline[lang]}</p>

                <div className="mt-7">
                  <div className="flex items-end gap-2">
                    <span className="font-serif text-5xl text-ink">
                      {fmtPrice(monthly)}
                    </span>
                    <span className="text-muted mb-2 text-sm">
                      {t.per_month}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {t.total}: {fmtPrice(opt.price)} • {opt.duration}{" "}
                    {t.months}
                  </p>
                </div>

                {tf.options.length > 1 && (
                  <div className="mt-5 flex gap-2">
                    {tf.options.map((o) => (
                      <button
                        key={o.duration}
                        onClick={() =>
                          setDur((d) => ({ ...d, [id]: o.duration }))
                        }
                        className={`flex-1 py-2 rounded-lg text-sm border transition-colors ${
                          dur[id] === o.duration
                            ? "border-ink bg-ink text-paper"
                            : "border-line text-ink-soft hover:border-ink"
                        }`}
                      >
                        {o.duration} {t.months}
                      </button>
                    ))}
                  </div>
                )}

                <ul className="mt-7 space-y-3 flex-1">
                  {tf.features[lang].map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-ink-soft">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: tf.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    nav(`/start?tariff=${id}&dur=${opt.duration}`)
                  }
                  className={`mt-8 py-3.5 rounded-full text-base transition-colors ${
                    isPop
                      ? "bg-clay text-paper hover:bg-ink"
                      : "border border-ink/20 text-ink hover:border-clay hover:text-clay"
                  }`}
                >
                  {t.choose}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
