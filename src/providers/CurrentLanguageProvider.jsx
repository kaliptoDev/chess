import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentLanguageContext = createContext({
    currentLanguage: '',
    setCurrentLanguage: () => { }
})

// PROVIDER = fournisseur du context
const CurrentLanguageProvider = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState('fr');
    const locale = navigator.language

    useEffect(() => {
        if (locale.substring(0, 2) === 'fr') {
            setCurrentLanguage('fr')
        } else {
            setCurrentLanguage('en')
        }    
    }, [])

    return (
        <CurrentLanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
            {children}
        </CurrentLanguageContext.Provider>
    )
}

export default CurrentLanguageProvider