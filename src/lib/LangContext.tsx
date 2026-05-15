import { createContext, useContext, useState, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "./i18n";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem("mz_lang") as Lang) || "uz"
  );
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("mz_lang", l);
  };
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang outside provider");
  return c;
}
