import './Case.css'
import useCurrentChessboardState from '../../hooks/useCurrentChessboardState'
import { useState } from 'react'

const Case = ({ children }) => {

    const { currentChessboardState, setCurrentChessboardState } = useCurrentChessboardState()
    const [backgroundColor, setBackgroundColor] = useState('')
    const [dotColor, setDotColor] = useState('lime')

    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children

    const coordinates = xCoordinate + yCoordinate

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