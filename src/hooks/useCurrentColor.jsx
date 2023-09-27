import { useContext } from "react"
import { CurrentColorContext } from "../providers/CurrentColorProvider.jsx"

const useCurrentColor = () => {
    const context = useContext(CurrentColorContext)

    if (!context) {
        throw new Error('useCurrentColor must be used within CurrentColorProvider')
    }

    return context
}

export default useCurrentColor;