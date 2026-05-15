import { useRef, useState, useCallback } from "react";
import { useLang } from "../lib/LangContext";

/**
 * Spline uslubidagi interaktiv 3D kitob — sichqoncha harakatiga
 * parallaks bilan javob beradi. Og'ir kutubxona yo'q, sof CSS 3D.
 */
export default function Hero3DBook() {
  const { lang } = useLang();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: -18, y: 24 });

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -18 - py * 16, y: 24 + px * 28 });
  }, []);

  const reset = useCallback(() => setTilt({ x: -18, y: 24 }), []);

  const author = lang === "uz" ? "Hayot hikoyam" : "История моей жизни";

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: "1400px" }}
    >
      {/* yumshoq nur halqasi */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-clay/10 blur-3xl" />

      <div
        className="animate-[bookfloat_7s_ease-in-out_infinite]"
        style={{ transformStyle: "preserve-3d" }}
      >
       <div
        className="relative will-change-transform transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Kitob — 6 yuzli 3D quti (Firefox-bardosh: container fonsiz/radiussiz) */}
        <div
          className="relative w-[260px] h-[360px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* OLD MUQOVA */}
          <div
            className="absolute top-1/2 left-1/2 w-[260px] h-[360px] rounded-r-md rounded-l-sm overflow-hidden"
            style={{
              transform: "translate(-50%,-50%) translateZ(17px)",
              background:
                "linear-gradient(135deg,#c4683f 0%,#b9603a 45%,#9c4e2e 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-5 border border-paper/25 rounded-[3px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <span className="text-paper/60 text-[10px] tracking-[0.35em] uppercase">
                Mazmoonly
              </span>
              <div className="my-5 w-10 h-px bg-paper/40" />
              <span className="font-serif text-paper text-[26px] leading-tight">
                {author}
              </span>
              <div className="mt-5 text-paper/50 text-xs tracking-[0.3em]">
                •  •  •
              </div>
            </div>
          </div>

          {/* ORQA MUQOVA */}
          <div
            className="absolute top-1/2 left-1/2 w-[260px] h-[360px] rounded-r-md rounded-l-sm"
            style={{
              transform: "translate(-50%,-50%) rotateY(180deg) translateZ(17px)",
              background: "linear-gradient(135deg,#9c4e2e,#7d3e24)",
            }}
          />

          {/* SPINE — chap qovurg'a */}
          <div
            className="absolute top-1/2 left-1/2 w-[34px] h-[360px]"
            style={{
              transform:
                "translate(-50%,-50%) rotateY(-90deg) translateZ(130px)",
              background: "linear-gradient(180deg,#7d3e24,#9c4e2e 50%,#7d3e24)",
            }}
          />

          {/* O'NG — sahifa qirrasi */}
          <div
            className="absolute top-1/2 left-1/2 w-[34px] h-[360px]"
            style={{
              transform:
                "translate(-50%,-50%) rotateY(90deg) translateZ(130px)",
              background:
                "repeating-linear-gradient(180deg,#f5f1e8,#f5f1e8 1px,#ddd3bf 2px,#f5f1e8 3px)",
            }}
          />

          {/* YUQORI qirra */}
          <div
            className="absolute top-1/2 left-1/2 w-[260px] h-[34px]"
            style={{
              transform:
                "translate(-50%,-50%) rotateX(90deg) translateZ(180px)",
              background:
                "repeating-linear-gradient(90deg,#f5f1e8,#f5f1e8 1px,#ddd3bf 2px,#f5f1e8 3px)",
            }}
          />

          {/* PAST qirra */}
          <div
            className="absolute top-1/2 left-1/2 w-[260px] h-[34px]"
            style={{
              transform:
                "translate(-50%,-50%) rotateX(-90deg) translateZ(180px)",
              background:
                "repeating-linear-gradient(90deg,#f5f1e8,#f5f1e8 1px,#ddd3bf 2px,#f5f1e8 3px)",
            }}
          />
        </div>

        {/* yer soyasi */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[230px] h-[40px] rounded-[50%] bg-ink/25 blur-2xl"
          style={{ transform: "translateY(210px) rotateX(80deg)" }}
        />
       </div>
      </div>
    </div>
  );
}
