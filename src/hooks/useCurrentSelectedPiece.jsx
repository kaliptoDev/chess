import { useContext } from "react"
import { CurrentSelectedPieceContext } from "../providers/CurrentSelectedPieceProvider.jsx"

const useCurrentSelectedPiece = () => {
    const context = useContext(CurrentSelectedPieceContext)

    if (!context) {
        throw new Error('useCurrentSelectedPiece must be used within CurrentSelectedPieceProvider')
    }

    return context
}

export default useCurrentSelectedPiece; 