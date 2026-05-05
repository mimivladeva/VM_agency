export const locales = ["es", "en", "bg"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

export const localeNames: Record<Locale, string> = {
    es: "Español",
    en: "English",
    bg: "Български"
}
/*export const translations = {
    es: {
        home: "Home",
        proyectos: "Proyectos",
        servicios: "Servicios",
        contactar: "Contactar",
        faq: "FAQ",
        heroTitle1: "Transformamos tu negocio",
        heroInvisible: "invisible",
        heroTitle2: "en",
        heroDigital: "digital",
        heroTitle3: "que genera clientes",
        heroSubtitle: "Diseñamos Páginas Web | Apps | IA y Automatizaciones | para ahorrar tiempo y generar ventas",
    },
    en: {
        home: "Home",
        proyectos: "Projects",
        servicios: "Services",
        contactar: "Contact",
        faq: "FAQ",
        heroTitle1: "We turn your",
        heroInvisible: "invisible",
        heroTitle2: "business into a",
        heroDigital: "digital system",
        heroTitle3: "that generates clients",
        heroSubtitle: "We design Websites | Apps | AI and Automations | to save time and generate sales",
    },
    bg: {
        home: "Начало",
        proyectos: "Проекти",
        servicios: "Услуги",
        contactar: "Контакт",
        faq: "ЧЗВ",
        heroTitle1: "Превръщаме твоя",
        heroInvisible: "невидим",
        heroTitle2: "бизнес в",
        heroDigital: "дигитален",
        heroTitle3: "който носи клиенти",
        heroSubtitle: "Създаваме уебсайтове | приложения | AI и автоматизации | за спестяване на време и повече продажби",
    },
}*/