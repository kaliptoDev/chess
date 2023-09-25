import { useContext } from "react"
import { CurrentLanguageContext } from "../providers/CurrentLanguageProvider.jsx"

const useCurrentLanguage = () => {
    const context = useContext(CurrentLanguageContext)

    if (!context) {
        throw new Error('useCurrentLanguage must be used within CurrentLanguageProvider')
    }

    return context
}

export default useCurrentLanguage;