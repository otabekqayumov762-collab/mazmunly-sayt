import { useState } from "react";
import { useLang } from "../lib/LangContext";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-line">
      <div className="container-x py-24 md:py-32 max-w-3xl">
        <h2 className="text-4xl md:text-5xl text-ink text-center mb-14">
          {t.faq_title}
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {t.faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg text-ink font-serif">{q}</span>
                  <span
                    className={`text-clay text-2xl leading-none transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p className="pb-6 text-ink-soft leading-relaxed">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
