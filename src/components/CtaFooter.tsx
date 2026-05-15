import { Link } from "react-router-dom";
import { useLang } from "../lib/LangContext";

export default function CtaFooter() {
  const { t } = useLang();
  return (
    <>
      <section className="border-t border-line bg-ink text-paper">
        <div className="container-x py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl whitespace-pre-line text-paper">
            {t.cta_title}
          </h2>
          <Link
            to="/start"
            className="inline-flex mt-10 px-8 py-4 rounded-full bg-clay text-paper text-lg hover:bg-paper hover:text-ink transition-colors"
          >
            {t.cta_btn}
          </Link>
        </div>
      </section>

      <footer className="bg-ink text-paper/60 border-t border-paper/10">
        <div className="container-x py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-baseline gap-[2px]">
            <span className="font-serif text-xl text-paper">Mazmoonly</span>
            <span className="w-[4px] h-[4px] rounded-full bg-clay mb-[3px]" />
          </div>
          <p>{t.footer_tag}</p>
          <p>
            © {new Date().getFullYear()} · {t.footer_rights}
          </p>
        </div>
      </footer>
    </>
  );
}
