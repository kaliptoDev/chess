import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentChessboardHighlightedBlackContext = createContext({
    currentChessboardHighlightedBlack: {},
    setCurrentChessboardHighlightedBlack: () => { }
})

// PROVIDER = fournisseur du context
const CurrentChessboardHighlightedBlackProvider = ({ children }) => {

    const [currentChessboardHighlightedBlack, setCurrentChessboardHighlightedBlack] = useState({});

    useEffect(() => {
        setCurrentChessboardHighlightedBlack(
            {
                "A1": true,
                "B1": false,
                "C1": false,
                "D1": false,
                "E1": false,
                "F1": false,
                "G1": false,
                "H1": false,
                "A2": false,
                "B2": false,
                "C2": false,
                "D2": false,
                "E2": false,
                "F2": false,
                "G2": false,
                "H2": false,
                "A3": false,
                "B3": false,
                "C3": false,
                "D3": false,
                "E3": false,
                "F3": false,
                "G3": false,
                "H3": false,
                "A4": false,
                "B4": false,
                "C4": false,
                "D4": false,
                "E4": false,
                "F4": false,
                "G4": false,
                "H4": false,
                "A5": false,
                "B5": false,
                "C5": false,
                "D5": false,
                "E5": false,
                "F5": false,
                "G5": false,
                "H5": false,
                "A6": false,
                "B6": false,
                "C6": false,
                "D6": false,
                "E6": false,
                "F6": false,
                "G6": false,
                "H6": false,
                "A7": false,
                "B7": false,
                "C7": false,
                "D7": false,
                "E7": false,
                "F7": false,
                "G7": false,
                "H7": false,
                "A8": false,
                "B8": false,
                "C8": false,
                "D8": false,
                "E8": false,
                "F8": false,
                "G8": false,
                "H8": false,
            }
        )

    }, [])

    useEffect(() => {
        localStorage.setItem('currentChessboardHighlightedBlack', JSON.stringify(currentChessboardHighlightedBlack));
    }
        , [currentChessboardHighlightedBlack])

    return (
        <CurrentChessboardHighlightedBlackContext.Provider value={{ currentChessboardHighlightedBlack, setCurrentChessboardHighlightedBlack }}>
            {children}
        </CurrentChessboardHighlightedBlackContext.Provider>
    )
}

export default CurrentChessboardHighlightedBlackProvider