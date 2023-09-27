import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentSelectedPieceContext = createContext({
    currentSelectedPiece: '',
    setCurrentSelectedPieceBlack: () => { }
})

// PROVIDER = fournisseur du context
const CurrentSelectedPieceProvider = ({ children }) => {

    const [currentSelectedPiece, setCurrentSelectedPiece] = useState('');

    useEffect(() => {
        localStorage.setItem('currentSelectedPiece', '')
    }, [])

    useEffect(() => {

        localStorage.setItem('currentSelectedPiece', currentSelectedPiece)

    }, [currentSelectedPiece])


    return (
        <CurrentSelectedPieceContext.Provider value={{ currentSelectedPiece, setCurrentSelectedPiece }}>
            {children}
        </CurrentSelectedPieceContext.Provider>
    )
}

export default CurrentSelectedPieceProvider