import { useContext } from "react"
import { CurrentChessboardStateContext } from "../providers/CurrentChessboardStateProvider.jsx"

const useCurrentChessboardState = () => {
    const context = useContext(CurrentChessboardStateContext)

    if (!context) {
        throw new Error('useCurrentChessboardState must be used within CurrentChessboardStateProvider')
    }

    return context
}

export default useCurrentChessboardState;