import type { Lang } from "./i18n";

export type TariffId = "tabiiy" | "oson" | "demo";

export interface TariffOption {
  id: TariffId;
  duration: number; // months
  price: number; // UZS
}

// Botning data/config.py TARIFF_PRICES bilan bir xil
export const TARIFFS: Record<
  TariffId,
  {
    name: string;
    tagline: { uz: string; ru: string };
    features: { uz: string[]; ru: string[] };
    options: { duration: number; price: number }[];
    popular?: boolean;
    accent: string;
  }
> = {
  tabiiy: {
    name: "Tabiiy",
    tagline: { uz: "Sodda va samimiy", ru: "Просто и искренне" },
    features: {
      uz: [
        "Har hafta yuboriladigan savollar",
        "Doimiy eslatmalar tizimi",
        "Matnlarni boricha (tahrirsiz) saqlash",
        "Yakunda oq-qora rasmli PDF kitob",
      ],
      ru: [
        "Еженедельные вопросы",
        "Система напоминаний",
        "Сохранение текстов как есть",
        "PDF-книга с ч/б изображениями",
      ],
    },
    options: [
      { duration: 6, price: 149000 },
      { duration: 12, price: 249000 },
    ],
    accent: "var(--color-sage)",
  },
  oson: {
    name: "Oson",
    tagline: { uz: "Ovoz bilan, premium dizayn", ru: "Голосом, премиум-дизайн" },
    features: {
      uz: [
        "Tabiiy tarifdagi barcha imkoniyatlar",
        "Ovozli xabar orqali hikoya so'zlash",
        "AI yordamida imlo va uslubiy tahrir",
        "Yakunda rangli, maxsus dizayndagi PDF kitob",
      ],
      ru: [
        "Все возможности тарифа Tabiiy",
        "Рассказ голосом (аудио)",
        "Орфографическая правка через ИИ",
        "Цветная PDF-книга со спец-дизайном",
      ],
    },
    options: [
      { duration: 6, price: 299000 },
      { duration: 12, price: 499000 },
    ],
    popular: true,
    accent: "var(--color-clay)",
  },
  demo: {
    name: "Demo",
    tagline: { uz: "1 oylik tanishuv", ru: "Знакомство на месяц" },
    features: {
      uz: [
        "4 hafta to'liq foydalanish (4 ta savol)",
        "Ovozli va matnli javobni sinash",
        "AI tahriri qanday ishlashini ko'rish",
        "Kitobning ilk sahifalarini ko'rish",
      ],
      ru: [
        "4 недели полного доступа (4 вопроса)",
        "Проба голосовых и текстовых ответов",
        "Демонстрация работы ИИ-редактора",
        "Первые страницы будущей книги",
      ],
    },
    options: [{ duration: 1, price: 10000 }],
    accent: "var(--color-muted)",
  },
};

export const fmtPrice = (n: number) =>
  n.toLocaleString("ru-RU").replace(/,/g, " ");

export const tariffName = (id: TariffId, _lang: Lang) => TARIFFS[id].name;
