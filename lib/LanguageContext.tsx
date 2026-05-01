"use client"

import { createContext, useContext, useState } from "react"
import { Lang } from "./i18n"

type LanguageContextType = {
    lang: Lang
    setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("es")

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
    return context
}