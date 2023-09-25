import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentChessboardStateContext = createContext({
    currentChessboardState: '',
    setCurrentChessboardState: () => { }
})

// PROVIDER = fournisseur du context
const CurrentChessboardProvider = ({ children }) => {

    const [currentChessboardState, setCurrentChessboardState] = useState('fr');

    useEffect(() => {
        
    }, [])

    return (
        <CurrentChessboardStateContext.Provider value={{ currentChessboardState, setCurrentChessboardState }}>
            {children}
        </CurrentChessboardStateContext.Provider>
    )
}

export default CurrentChessboardProvider