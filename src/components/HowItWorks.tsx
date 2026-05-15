import { useLang } from "../lib/LangContext";

export default function HowItWorks() {
  const { t } = useLang();
  const steps = [
    { n: "01", title: t.how_1_t, desc: t.how_1_d },
    { n: "02", title: t.how_2_t, desc: t.how_2_d },
    { n: "03", title: t.how_3_t, desc: t.how_3_d },
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
              <span className="font-serif text-5xl text-clay/30">{s.n}</span>
              <h3 className="mt-6 text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
