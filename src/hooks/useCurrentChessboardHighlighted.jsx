import { useContext } from "react"
import { CurrentChessboardHighlightedContext } from "../providers/CurrentChessboardHighlightedProvider.jsx"

const useCurrentChessboardHighlighted = () => {
    const context = useContext(CurrentChessboardHighlightedContext)

    if (!context) {
        throw new Error('useCurrentChessboardHighlighted must be used within CurrentChessboardHighlightedProvider')
    }

    return context
}

export default useCurrentChessboardHighlighted; 