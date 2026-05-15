import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLang } from "../lib/LangContext";
import type { Lang } from "../lib/i18n";
import { TARIFFS, fmtPrice, type TariffId } from "../lib/tariffs";
import Icon from "../components/Icon";

type Target = "self" | "father" | "mother" | "gift";

const NAME_RE = /^[A-Za-zА-Яа-яЎўҚқҒғҲҳ'`’ʼ\- ]+$/;

function validName(v: string) {
  const n = v.trim();
  if (n.length < 4 || n.length > 100) return false;
  if (!NAME_RE.test(n)) return false;
  const words = n.split(/\s+/).filter(Boolean);
  if (words.length < 2) return false;
  return words.every((w) => w.replace(/[^A-Za-zА-Яа-яЎўҚқҒғҲҳ]/g, "").length >= 2);
}

const STEPS = ["lang", "target", "profile", "tariff", "pay", "done"] as const;
type Step = (typeof STEPS)[number];

export default function Onboarding() {
  const { lang, setLang, t } = useLang();
  const nav = useNavigate();
  const [sp] = useSearchParams();

  const preTariff = (sp.get("tariff") as TariffId) || null;
  const preDur = Number(sp.get("dur")) || null;

  const [step, setStep] = useState<Step>("lang");
  const [target, setTarget] = useState<Target | null>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tariff, setTariff] = useState<TariffId | null>(preTariff);
  const [duration, setDuration] = useState<number | null>(preDur);
  const [promo, setPromo] = useState("");
  const [touched, setTouched] = useState(false);

  const idx = STEPS.indexOf(step);
  const progress = (idx / (STEPS.length - 1)) * 100;

  const selectedOpt = useMemo(() => {
    if (!tariff) return null;
    const tf = TARIFFS[tariff];
    return tf.options.find((o) => o.duration === duration) ?? tf.options[0];
  }, [tariff, duration]);

  const go = (s: Step) => {
    setTouched(false);
    setStep(s);
  };

  const targets: [Target, string][] = [
    ["self", t.ob_target_self],
    ["father", t.ob_target_father],
    ["mother", t.ob_target_mother],
    ["gift", t.ob_target_gift],
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* top bar */}
      <div className="border-b border-line">
        <div className="container-x h-[68px] flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-[2px]">
            <span className="font-serif text-xl text-ink">Mazmoonly</span>
            <span className="w-[4px] h-[4px] rounded-full bg-clay mb-[3px]" />
          </Link>
          <span className="text-sm text-muted">
            {idx + 1} / {STEPS.length}
          </span>
        </div>
        <div className="h-[2px] bg-line">
          <div
            className="h-full bg-clay transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 container-x py-10 sm:py-14 md:py-20 max-w-xl w-full">
        {step === "lang" && (
          <div className="fade-up">
            <h1 className="text-3xl sm:text-4xl text-ink mb-6 sm:mb-8">{t.ob_lang_t}</h1>
            <div className="grid grid-cols-2 gap-4">
              {(["uz", "ru"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    go("target");
                  }}
                  className={`py-8 rounded-2xl border text-lg flex flex-col items-center gap-3 transition-colors ${
                    lang === l
                      ? "border-clay bg-paper-deep text-clay"
                      : "border-line hover:border-ink text-ink"
                  }`}
                >
                  <Icon name="globe" size={28} strokeWidth={1.25} />
                  {l === "uz" ? "O'zbekcha" : "Русский"}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "target" && (
          <div className="fade-up">
            <h1 className="text-3xl sm:text-4xl text-ink mb-6 sm:mb-8">{t.ob_target_t}</h1>
            <div className="grid grid-cols-2 gap-4">
              {targets.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => {
                    setTarget(id);
                    go("profile");
                  }}
                  className={`py-7 rounded-2xl border text-lg transition-colors ${
                    target === id
                      ? "border-clay bg-paper-deep"
                      : "border-line hover:border-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <BackBtn onClick={() => go("lang")} label={t.ob_back} />
          </div>
        )}

        {step === "profile" && (
          <div className="fade-up">
            <h1 className="text-3xl sm:text-4xl text-ink mb-6 sm:mb-8">{t.ob_profile_t}</h1>
            <div className="space-y-5">
              <Field label={t.ob_name}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.ob_name_ph}
                  className="inp"
                />
                {touched && !validName(name) && (
                  <Err>{t.err_name}</Err>
                )}
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label={t.ob_age}>
                  <input
                    value={age}
                    onChange={(e) =>
                      setAge(e.target.value.replace(/\D/g, "").slice(0, 3))
                    }
                    inputMode="numeric"
                    className="inp"
                  />
                  {touched &&
                    (!age || +age < 5 || +age > 100) && (
                      <Err>{t.err_age}</Err>
                    )}
                </Field>
                <Field label={t.ob_phone}>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className="inp"
                  />
                  {touched &&
                    phone.replace(/\D/g, "").length < 9 && (
                      <Err>{t.err_phone}</Err>
                    )}
                </Field>
              </div>
              <Field label={t.ob_email}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="inp"
                />
              </Field>
            </div>
            <div className="mt-9 flex items-center gap-3">
              <BackBtn inline onClick={() => go("target")} label={t.ob_back} />
              <button
                onClick={() => {
                  setTouched(true);
                  if (
                    validName(name) &&
                    +age >= 5 &&
                    +age <= 100 &&
                    phone.replace(/\D/g, "").length >= 9
                  )
                    go(tariff ? "pay" : "tariff");
                }}
                className="flex-1 py-3.5 rounded-full bg-ink text-paper hover:bg-clay transition-colors"
              >
                {t.ob_continue}
              </button>
            </div>
          </div>
        )}

        {step === "tariff" && (
          <div className="fade-up">
            <h1 className="text-3xl sm:text-4xl text-ink mb-6 sm:mb-8">{t.ob_pick_tariff}</h1>
            <div className="space-y-3">
              {(["tabiiy", "oson", "demo"] as TariffId[]).map((id) => {
                const tf = TARIFFS[id];
                const o = tf.options[tf.options.length - 1];
                const sel = tariff === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setTariff(id);
                      setDuration(o.duration);
                    }}
                    className={`w-full text-left p-6 rounded-2xl border flex items-center justify-between transition-colors ${
                      sel
                        ? "border-clay bg-paper-deep"
                        : "border-line hover:border-ink"
                    }`}
                  >
                    <div>
                      <p className="font-serif text-2xl text-ink">{tf.name}</p>
                      <p className="text-sm text-muted">{tf.tagline[lang]}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-xl text-ink">
                        {fmtPrice(o.price)}
                      </p>
                      <p className="text-xs text-muted">
                        {o.duration} {t.months}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-9 flex items-center gap-3">
              <BackBtn inline onClick={() => go("profile")} label={t.ob_back} />
              <button
                disabled={!tariff}
                onClick={() => go("pay")}
                className="flex-1 py-3.5 rounded-full bg-ink text-paper hover:bg-clay transition-colors disabled:opacity-40"
              >
                {t.ob_continue}
              </button>
            </div>
          </div>
        )}

        {step === "pay" && selectedOpt && tariff && (
          <div className="fade-up">
            <h1 className="text-3xl sm:text-4xl text-ink mb-2">{t.ob_pay_t}</h1>
            <p className="text-ink-soft mb-8">
              {TARIFFS[tariff].name} · {selectedOpt.duration} {t.months} ·{" "}
              <b>{fmtPrice(selectedOpt.price)}</b>
            </p>

            <div className="rounded-2xl border border-line p-6 mb-4">
              <p className="text-sm text-muted mb-3">{t.ob_pay_promo}</p>
              <div className="flex gap-2">
                <input
                  value={promo}
                  onChange={(e) => setPromo(e.target.value.toUpperCase())}
                  placeholder={t.ob_promo_ph}
                  className="inp flex-1 tracking-widest"
                />
                <button
                  onClick={() => go("done")}
                  className="px-5 rounded-xl border border-ink/20 hover:border-clay hover:text-clay transition-colors"
                >
                  {t.ob_promo_apply}
                </button>
              </div>
            </div>

            <button
              onClick={() => go("done")}
              className="w-full py-4 rounded-full bg-clay text-paper text-lg hover:bg-ink transition-colors"
            >
              {t.ob_pay_card}
            </button>
            <BackBtn
              onClick={() => go(preTariff ? "profile" : "tariff")}
              label={t.ob_back}
            />
          </div>
        )}

        {step === "done" && (
          <div className="fade-up text-center py-10">
            <div className="mx-auto mb-7 w-20 h-20 rounded-full border border-clay flex items-center justify-center text-clay">
              <Icon name="check" size={36} strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl sm:text-4xl text-ink">{t.ob_done_t}</h1>
            <p className="mt-4 text-ink-soft text-lg max-w-sm mx-auto">
              {t.ob_done_d}
            </p>
            <button
              onClick={() => nav("/")}
              className="mt-10 px-8 py-3.5 rounded-full bg-ink text-paper hover:bg-clay transition-colors"
            >
              {t.ob_done_btn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-sm text-clay">{children}</p>;
}

function BackBtn({
  onClick,
  label,
  inline,
}: {
  onClick: () => void;
  label: string;
  inline?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={
        inline
          ? "px-6 py-3.5 rounded-full border border-line text-ink-soft hover:border-ink transition-colors"
          : "mt-8 text-sm text-muted hover:text-ink transition-colors"
      }
    >
      ← {label}
    </button>
  );
}
