// import the required things
// context 
import React, {createContext, useState, useEffect} from 'react'
import enTranslation from '../translation/en.json'
import esTranslation from '../translation/es.json'

// create the context object
// use to share language data across different components
export const languageContext = createContext()

// define translation object
const translations = {
    en: enTranslation,
    es: esTranslation
}

// create provider component 
export function LanguageProvider ({children}) {
    // state  to track current language
    const [language, setLanguage] = useState('es')
    
    // state to translation for the current language
    const [translationData, setTransationData] = useState(translations.en)

    useEffect(() => { // run once on mount
        // maintain the local storage
      const savedLanguage = localStorage.getItem('language') // 'en'
      setLanguage(savedLanguage); // update language state
      setTransationData(translations[savedLanguage]) //
    }, []) // no dependency

    useEffect(() => { // run when the language changes
        setTransationData(translations[language]) // set current translation data
        localStorage.setItem('language', language) //  
    }, [language])

    // function to switch 
    const switchLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <languageContext.Provider value={
            {
                language,
                translations: translationData,
                switchLanguage
            }
        }>
            {children}
        </languageContext.Provider>
    )  
}
