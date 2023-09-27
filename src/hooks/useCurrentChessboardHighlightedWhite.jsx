import { useContext } from "react"
import { CurrentChessboardHighlightedWhiteContext } from "../providers/CurrentChessboardHighlightedWhiteProvider.jsx"

const useCurrentChessboardHighlightedWhite = () => {
    const context = useContext(CurrentChessboardHighlightedWhiteContext)

    if (!context) {
        throw new Error('useCurrentChessboardHighlightedWhite must be used within CurrentChessboardHighlightedWhiteProvider')
    }

    return context
}

export default useCurrentChessboardHighlightedWhite; 