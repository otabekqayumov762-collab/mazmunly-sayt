import { useRef, useState, useCallback } from "react";
import { useLang } from "../lib/LangContext";

/**
 * 2.5D qatlamli kitob — preserve-3d ISHLATMAYDI.
 * Chrome, Firefox, Safari'da bir xil ko'rinadi.
 * Sichqoncha harakatiga yengil parallaks tilt bilan javob beradi.
 */
export default function Hero3DBook() {
  const { lang } = useLang();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ rx: 0, ry: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setP({ rx: -py * 10, ry: px * 14 });
  }, []);

  const reset = useCallback(() => setP({ rx: 0, ry: 0 }), []);

  const author = lang === "uz" ? "Hayot hikoyam" : "История моей жизни";

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* yumshoq nur halqasi */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-clay/10 blur-3xl" />

      <div className="relative animate-[bookfloat_7s_ease-in-out_infinite]">
       <div
        className="relative"
        style={{
          transform: `rotateX(${p.rx}deg) rotateY(${p.ry}deg)`,
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
       >
        {/* yer soyasi */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[230px] h-[44px] rounded-[50%] bg-ink/20 blur-2xl"
        />

        {/* kitob — qatlamli (3D illyuziya, sof 2D) */}
        <div className="relative w-[268px] h-[372px]">
          {/* sahifa qalinligi — o'ng tomonda ko'rinadigan varaqlar */}
          <div
            className="absolute top-[6px] right-[-9px] h-[360px] w-[14px] rounded-r-[3px]"
            style={{
              background:
                "repeating-linear-gradient(180deg,#f5f1e8 0,#f5f1e8 1px,#dcd2bd 2px,#f5f1e8 3px)",
              boxShadow: "1px 2px 6px -2px rgba(28,26,23,0.4)",
              transform: "skewY(8deg)",
            }}
          />
          {/* past varaq qirrasi */}
          <div
            className="absolute bottom-[-9px] left-[6px] h-[14px] w-[256px] rounded-b-[3px]"
            style={{
              background:
                "repeating-linear-gradient(90deg,#f5f1e8 0,#f5f1e8 1px,#dcd2bd 2px,#f5f1e8 3px)",
              transform: "skewX(8deg)",
            }}
          />

          {/* old muqova */}
          <div
            className="absolute inset-0 rounded-r-lg rounded-l-[4px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,#c4683f 0%,#b9603a 45%,#9c4e2e 100%)",
              boxShadow:
                "0 30px 60px -25px rgba(28,26,23,0.55), inset 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          >
            {/* spine soyasi (chap) */}
            <div
              className="absolute left-0 top-0 h-full w-[26px]"
              style={{
                background:
                  "linear-gradient(90deg,rgba(0,0,0,0.28),rgba(0,0,0,0.05) 70%,transparent)",
              }}
            />
            {/* yorug'lik blilg'i */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg,rgba(255,255,255,0.14) 0%,transparent 35%)",
              }}
            />
            {/* ramka + matn */}
            <div className="absolute inset-[20px] border border-paper/25 rounded-[3px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center">
              <span className="text-paper/65 text-[10px] tracking-[0.35em] uppercase">
                Mazmoonly
              </span>
              <div className="my-5 w-10 h-px bg-paper/40" />
              <span className="font-serif text-paper text-[27px] leading-tight">
                {author}
              </span>
              <div className="mt-5 text-paper/55 text-xs tracking-[0.3em]">
                •  •  •
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
