import './Case.css'
import useCurrentChessboardState from '../../hooks/useCurrentChessboardState'
import useCurrentChessboardHighlightedBlack from '../../hooks/useCurrentChessboardHighlightedBlack'
import useCurrentChessboardHighlightedWhite from '../../hooks/useCurrentChessboardHighlightedWhite'
import { useEffect, useState } from 'react'

const Case = ({ children }) => {

    const { currentChessboardState, setCurrentChessboardState } = useCurrentChessboardState()
    const { currentChessboardHighlightedWhite, setCurrentChessboardHighlightedWhite } = useCurrentChessboardHighlightedWhite()
    const { currentChessboardHighlightedBlack, setCurrentChessboardHighlightedBlack } = useCurrentChessboardHighlightedBlack()

    const [backgroundColor, setBackgroundColor] = useState('')

    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children

    const coordinates = xCoordinate + yCoordinate
    let dotColorWhite = currentChessboardHighlightedWhite[coordinates] != false ? 'lime' : ''
    let dotColorBlack = currentChessboardHighlightedBlack[coordinates] != false ? 'lime' : ''



    return (
        <div className='case'>
            <div className={`case__bg ${backgroundColor}`}></div>
            <div className={`case__dot ${dotColorWhite}`}></div>
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