import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from '../lib/i18n'

export default getRequestConfig(async ({ locale }) => {
    // 🔥 asegurar que SIEMPRE hay locale
    const validLocale =
        locale && locales.includes(locale as any)
            ? locale
            : defaultLocale

    return {
        locale: validLocale, // ✅ ya es string seguro
        messages: (await import(`../messages/${validLocale}.json`)).default
    }
})