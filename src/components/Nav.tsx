import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import type { Lang } from "../lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const links = [
    ["#how", t.nav_how],
    ["#tariffs", t.nav_tariffs],
    ["#sample", t.nav_sample],
    ["#faq", t.nav_faq],
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-line">
      <nav className="container-x flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-baseline gap-[2px]">
          <span className="font-serif text-2xl tracking-tight text-ink">
            Mazmoonly
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-clay mb-[3px]" />
        </Link>

        <div className="hidden md:flex items-center gap-9 text-[15px] text-ink-soft">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hover:text-clay transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-sm border border-line rounded-full overflow-hidden">
            {(["uz", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 transition-colors ${
                  lang === l
                    ? "bg-ink text-paper"
                    : "text-muted hover:text-ink"
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
        </div>
      </nav>
    </header>
  );
}
