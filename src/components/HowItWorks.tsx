import { useLang } from "../lib/LangContext";
import Icon, { type IconName } from "./Icon";

export default function HowItWorks() {
  const { t } = useLang();
  const steps: { n: string; icon: IconName; title: string; desc: string }[] = [
    { n: "01", icon: "envelope", title: t.how_1_t, desc: t.how_1_d },
    { n: "02", icon: "pen", title: t.how_2_t, desc: t.how_2_d },
    { n: "03", icon: "book", title: t.how_3_t, desc: t.how_3_d },
  ];
  return (
    <section id="how" className="border-t border-line bg-paper-deep/40">
      <div className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-ink">{t.how_title}</h2>
          <p className="mt-4 text-ink-soft text-lg">{t.how_sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-paper p-10 md:p-12 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full border border-clay/40 flex items-center justify-center text-clay">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="font-serif text-4xl text-clay/20">{s.n}</span>
              </div>
              <h3 className="mt-7 text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
