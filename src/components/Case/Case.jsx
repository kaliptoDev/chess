import './Case.css'
import useCurrentChessboardState from '../../hooks/useCurrentChessboardState'
import useCurrentChessboardHighlighted from '../../hooks/useCurrentChessboardHighlighted'
import { useEffect, useState } from 'react'

const Case = ({ children }) => {

    const { currentChessboardState, setCurrentChessboardState } = useCurrentChessboardState()
    const { currentChessboardHighlighted, setCurrentChessboardHighlighted } = useCurrentChessboardHighlighted()

    const [backgroundColor, setBackgroundColor] = useState('')
    const [dotColor, setDotColor] = useState('')

    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children

    const coordinates = xCoordinate + yCoordinate

    useEffect(() => {
        if (currentChessboardHighlighted[coordinates] != false ) {
            console.log('currentChessboardHighlighted[coordinates]', currentChessboardHighlighted[coordinates])
            // setDotColor('lime')
        }
    }, [currentChessboardHighlighted])
    return (
        <div className='case'>
            <div className={`case__bg ${backgroundColor}`}></div>
            <div className={`case__dot ${dotColor}`}></div>
            {
                currentChessboardState[coordinates] &&
                <img
                    className='case__piece'
                    src={`./assets/${currentChessboardState[coordinates]}.svg`}
                    alt={`${currentChessboardState[coordinates] ? currentChessboardState[coordinates]
                        : "Piece"}`} />
            }
        </div>
    )
}

export default Case