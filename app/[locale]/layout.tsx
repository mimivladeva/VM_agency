import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { locales } from "@/lib/i18n"

import es from "@/messages/es.json"
import en from "@/messages/en.json"
import bg from "@/messages/bg.json"

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!locales.includes(locale as any)) {
        notFound()
    }

    const messagesMap = { es, en, bg }
    const messages = messagesMap[locale as "es" | "en" | "bg"]

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}