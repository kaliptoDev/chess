import { useState, createContext, useEffect } from 'react'


// CONTEXT = definition et/ou valeurs par default
export const CurrentChessboardStateContext = createContext({
    currentChessboardState: {},
    setCurrentChessboardState: () => {}
})

// PROVIDER = fournisseur du context
const CurrentChessboardStateProvider = ({ children }) => {

    const [currentChessboardState, setCurrentChessboardState] = useState({});

    useEffect(() => {
        setCurrentChessboardState(
            {
                "A1": "white_rook",
                "B1": "white_knight",
                "C1": "white_bishop",
                "D1": "white_queen",
                "E1": "white_king",
                "F1": "white_bishop",
                "G1": "white_knight",
                "H1": "white_rook",
                "A2": "white_pawn",
                "B2": "white_pawn",
                "C2": "white_pawn",
                "D2": "white_pawn",
                "E2": "white_pawn",
                "F2": "white_pawn",
                "G2": "white_pawn",
                "H2": "white_pawn",
                "A3": null,
                "B3": "black_pawn",
                "C3": null,
                "D3": null,
                "E3": null,
                "F3": null,
                "G3": null,
                "H3": null,
                "A4": null,
                "B4": null,
                "C4": null,
                "D4": "white_knight",
                "E4": null,
                "F4": null,
                "G4": null,
                "H4": null,
                "A5": null,
                "B5": null,
                "C5": null,
                "D5": null,
                "E5": null,
                "F5": null,
                "G5": null,
                "H5": null,
                "A6": null,
                "B6": null,
                "C6": null,
                "D6": null,
                "E6": null,
                "F6": null,
                "G6": null,
                "H6": null,
                "A7": "black_pawn",
                "B7": "black_pawn",
                "C7": "black_pawn",
                "D7": "black_pawn",
                "E7": "black_pawn",
                "F7": "black_pawn",
                "G7": "black_pawn",
                "H7": "black_pawn",
                "A8": "black_rook",
                "B8": "black_knight",
                "C8": "black_bishop",
                "D8": "black_queen",
                "E8": "black_king",
                "F8": "black_bishop",
                "G8": "black_knight",
                "H8": "black_rook"
            }
        )

    }, [])

    useEffect(() => {
        localStorage.setItem('currentChessboardState', JSON.stringify(currentChessboardState));
    }
        , [currentChessboardState])

    return (
        <CurrentChessboardStateContext.Provider value={{ currentChessboardState, setCurrentChessboardState }}>
            {children}
        </CurrentChessboardStateContext.Provider>
    )
}

export default CurrentChessboardStateProvider