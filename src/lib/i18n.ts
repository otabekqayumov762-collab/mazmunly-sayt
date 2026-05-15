export type Lang = "uz" | "ru";

export interface Dict {
  nav_how: string; nav_tariffs: string; nav_sample: string; nav_faq: string; nav_start: string;
  hero_kicker: string; hero_title: string; hero_sub: string; hero_cta: string; hero_cta2: string; hero_note: string;
  how_title: string; how_sub: string;
  how_1_t: string; how_1_d: string; how_2_t: string; how_2_d: string; how_3_t: string; how_3_d: string;
  tariffs_title: string; tariffs_sub: string; per_month: string; total: string; months: string; choose: string; popular: string;
  sample_title: string; sample_sub: string; sample_q: string; sample_a: string;
  faq_title: string; faq: [string, string][];
  cta_title: string; cta_btn: string;
  footer_tag: string; footer_rights: string;
  ob_lang_t: string; ob_target_t: string;
  ob_target_self: string; ob_target_father: string; ob_target_mother: string; ob_target_gift: string;
  ob_profile_t: string; ob_name: string; ob_name_ph: string; ob_age: string; ob_phone: string; ob_email: string;
  ob_continue: string; ob_back: string; ob_pick_tariff: string; ob_pay_t: string;
  ob_pay_card: string; ob_pay_promo: string; ob_promo_ph: string; ob_promo_apply: string;
  ob_done_t: string; ob_done_d: string; ob_done_btn: string;
  err_name: string; err_age: string; err_phone: string;
}

export const dict: Record<Lang, Dict> = {
  uz: {
    nav_how: "Qanday ishlaydi",
    nav_tariffs: "Tariflar",
    nav_sample: "Namuna",
    nav_faq: "Savollar",
    nav_start: "Boshlash",

    hero_kicker: "Hayot hikoyangiz — kitob bo'lib qoladi",
    hero_title: "Eng qadrli xotiralaringizni\nabadiy muhrlang",
    hero_sub:
      "Mazmoonly har hafta sizga bitta savol yuboradi. Siz javob berasiz — matn yoki ovoz orqali. Yil yakunida barchasi chiroyli xotira kitobiga aylanadi.",
    hero_cta: "Hikoyani boshlash",
    hero_cta2: "Tariflarni ko'rish",
    hero_note: "O'zingiz uchun yoki yaqinlaringizga sovg'a sifatida",

    how_title: "Uch oddiy qadam",
    how_sub: "Murakkablik yo'q. Faqat siz va xotiralaringiz.",
    how_1_t: "Savol keladi",
    how_1_d: "Har hafta hayotingizning bir bo'lagi haqida o'ylantiruvchi savol olasiz.",
    how_2_t: "Javob berasiz",
    how_2_d: "Matn yozasiz yoki shunchaki ovozli xabar aytasiz — bot transkripsiya qiladi.",
    how_3_t: "Kitob tayyor bo'ladi",
    how_3_d: "Barcha javoblaringiz professional dizaynli PDF xotira kitobiga jamlanadi.",

    tariffs_title: "Sayohatingizni tanlang",
    tariffs_sub: "Har bir tarif — bir umrlik meros sari yo'l.",
    per_month: "so'm/oy",
    total: "Jami",
    months: "oy",
    choose: "Tanlash",
    popular: "Eng mashhur",

    sample_title: "Kitob qanday ko'rinadi",
    sample_sub:
      "Storyworth uslubidagi muqova, mundarija va bezakli boblar. Oson tarifda rangli, premium dizayn.",
    sample_q: "Bolaligingizdan qolgan eng yorqin xotirangiz qaysi?",
    sample_a:
      "Yozgi tonglar buvimning hovlisida boshlanardi. Tut daraxti tagida choy ichib, u menga o'tmish haqida hikoya qilardi…",

    faq_title: "Ko'p so'raladigan savollar",
    faq: [
      ["Savollarga qancha vaqtda javob berishim kerak?", "Hech qanday shoshilinch yo'q. Har hafta bitta savol keladi, lekin xohlagan vaqtingizda javob berasiz."],
      ["Ovoz orqali javob bera olamanmi?", "Ha, Oson tarifda ovozli xabar yuborasiz — bot uni avtomat matnga aylantiradi va AI imlo/uslubni tahrirlaydi."],
      ["Kitobni qanday olaman?", "Yakunda bepul PDF olasiz. Istasangiz qattiq muqovali bosma kitobga buyurtma berishingiz mumkin."],
      ["Yaqinimga sovg'a qila olamanmi?", "Albatta. Sovg'a sifatida tarif olib, maxsus kod orqali yuborasiz."],
      ["To'lov qanday amalga oshadi?", "Karta orqali yoki promokod bilan. To'lovdan so'ng birinchi savol darhol keladi."],
    ] as [string, string][],

    cta_title: "Bugun bitta jumla yozing.\nEjdodlaringiz buni asrlab o'qiydi.",
    cta_btn: "Hikoyani boshlash",

    footer_tag: "Hayot hikoyangiz — kitob bo'lib qoladi",
    footer_rights: "Barcha huquqlar himoyalangan",

    // onboarding
    ob_lang_t: "Tilni tanlang",
    ob_target_t: "Kim uchun?",
    ob_target_self: "O'zim uchun",
    ob_target_father: "Otam uchun",
    ob_target_mother: "Onam uchun",
    ob_target_gift: "Sovg'a sifatida",
    ob_profile_t: "O'zingiz haqingizda",
    ob_name: "Ism familiya",
    ob_name_ph: "Masalan: Otabek Qayumov",
    ob_age: "Yosh",
    ob_phone: "Telefon",
    ob_email: "Email (ixtiyoriy)",
    ob_continue: "Davom etish",
    ob_back: "Orqaga",
    ob_pick_tariff: "Tarifni tanlang",
    ob_pay_t: "To'lov",
    ob_pay_card: "Karta orqali",
    ob_pay_promo: "Promokod bilan",
    ob_promo_ph: "PROMOKOD",
    ob_promo_apply: "Qo'llash",
    ob_done_t: "Tabriklaymiz!",
    ob_done_d: "Mazmoonly sayohatingiz boshlandi. Birinchi savol tez orada keladi.",
    ob_done_btn: "Bosh sahifaga",
    err_name: "Ism va familiyani to'liq yozing (kamida 2 ta so'z, faqat harflar)",
    err_age: "Yosh 5–100 orasida bo'lsin",
    err_phone: "To'g'ri telefon raqam kiriting",
  },
  ru: {
    nav_how: "Как это работает",
    nav_tariffs: "Тарифы",
    nav_sample: "Образец",
    nav_faq: "Вопросы",
    nav_start: "Начать",

    hero_kicker: "Ваша история жизни — станет книгой",
    hero_title: "Запечатлейте самые\nдорогие воспоминания",
    hero_sub:
      "Mazmoonly присылает вам один вопрос каждую неделю. Вы отвечаете текстом или голосом. К концу года всё превращается в красивую книгу воспоминаний.",
    hero_cta: "Начать историю",
    hero_cta2: "Смотреть тарифы",
    hero_note: "Для себя или в подарок близким",

    how_title: "Три простых шага",
    how_sub: "Никакой сложности. Только вы и ваши воспоминания.",
    how_1_t: "Приходит вопрос",
    how_1_d: "Каждую неделю — вопрос, заставляющий задуматься о моменте вашей жизни.",
    how_2_t: "Вы отвечаете",
    how_2_d: "Пишете текст или просто наговариваете голосом — бот расшифрует.",
    how_3_t: "Книга готова",
    how_3_d: "Все ответы собираются в PDF-книгу воспоминаний с профессиональным дизайном.",

    tariffs_title: "Выберите ваше путешествие",
    tariffs_sub: "Каждый тариф — путь к наследию на всю жизнь.",
    per_month: "сум/мес",
    total: "Итого",
    months: "мес",
    choose: "Выбрать",
    popular: "Популярный",

    sample_title: "Как выглядит книга",
    sample_sub:
      "Обложка в стиле Storyworth, оглавление и оформленные главы. В тарифе Oson — цветной премиум-дизайн.",
    sample_q: "Какое самое яркое воспоминание из детства?",
    sample_a:
      "Летние утра начинались во дворе бабушки. Под тутовым деревом, за чаем, она рассказывала мне о прошлом…",

    faq_title: "Частые вопросы",
    faq: [
      ["Сколько времени на ответ?", "Никакой спешки. Вопрос приходит раз в неделю, отвечаете когда удобно."],
      ["Можно отвечать голосом?", "Да, в тарифе Oson вы отправляете голосовое — бот переводит в текст и редактирует через ИИ."],
      ["Как получу книгу?", "В конце — бесплатный PDF. По желанию можно заказать печатную книгу в твёрдой обложке."],
      ["Можно подарить близкому?", "Конечно. Покупаете тариф как подарок и отправляете по специальному коду."],
      ["Как происходит оплата?", "Картой или по промокоду. После оплаты первый вопрос приходит сразу."],
    ] as [string, string][],

    cta_title: "Напишите одну фразу сегодня.\nПотомки будут читать её веками.",
    cta_btn: "Начать историю",

    footer_tag: "Ваша история жизни — станет книгой",
    footer_rights: "Все права защищены",

    ob_lang_t: "Выберите язык",
    ob_target_t: "Для кого?",
    ob_target_self: "Для себя",
    ob_target_father: "Для отца",
    ob_target_mother: "Для мамы",
    ob_target_gift: "В подарок",
    ob_profile_t: "О себе",
    ob_name: "Имя и фамилия",
    ob_name_ph: "Например: Иван Иванов",
    ob_age: "Возраст",
    ob_phone: "Телефон",
    ob_email: "Email (необязательно)",
    ob_continue: "Продолжить",
    ob_back: "Назад",
    ob_pick_tariff: "Выберите тариф",
    ob_pay_t: "Оплата",
    ob_pay_card: "Картой",
    ob_pay_promo: "По промокоду",
    ob_promo_ph: "ПРОМОКОД",
    ob_promo_apply: "Применить",
    ob_done_t: "Поздравляем!",
    ob_done_d: "Ваше путешествие Mazmoonly началось. Первый вопрос придёт скоро.",
    ob_done_btn: "На главную",
    err_name: "Введите имя и фамилию полностью (минимум 2 слова, только буквы)",
    err_age: "Возраст должен быть 5–100",
    err_phone: "Введите корректный номер телефона",
  },
};
