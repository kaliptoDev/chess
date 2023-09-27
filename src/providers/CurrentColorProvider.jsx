import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentColorContext = createContext({
    currentColor: '',
    setCurrentColor: () => { }
})

// PROVIDER = fournisseur du context
const CurrentColorProvider = ({ children }) => {

    const [currentColor, setCurrentColor] = useState('white');

    useEffect(() => {
        localStorage.setItem('currentColor', '')
    }, [])

    useEffect(() => {

        localStorage.setItem('currentColor', currentColor)

    }, [currentColor])


    return (
        <CurrentColorContext.Provider value={{ currentColor, setCurrentColor }}>
            {children}
        </CurrentColorContext.Provider>
    )
}

export default CurrentColorProvider