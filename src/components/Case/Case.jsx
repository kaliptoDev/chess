import './Case.css'
import useCurrentChessboardState from '../../hooks/useCurrentChessboardState'
// import useCurrentChessboardHighlightedBlack from '../../hooks/useCurrentChessboardHighlightedBlack'
import useCurrentChessboardHighlighted from '../../hooks/useCurrentChessboardHighlighted'
import { useEffect, useState } from 'react'
import useCurrentSelectedPiece from '../../hooks/useCurrentSelectedPiece'
import useCurrentColor from '../../hooks/useCurrentColor'
import { getPossibleMoves } from '../../utils/utils_chessboard'

const Case = ({ children }) => {

    const { currentChessboardState, setCurrentChessboardState } = useCurrentChessboardState()
    const { currentChessboardHighlighted, setCurrentChessboardHighlighted } = useCurrentChessboardHighlighted()
    // const { currentChessboardHighlightedBlack, setCurrentChessboardHighlightedBlack } = useCurrentChessboardHighlightedBlack()

    const [backgroundColor, setBackgroundColor] = useState('')

    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children
    let dotColor = ''

    const coordinates = xCoordinate + yCoordinate

    if (currentChessboardHighlighted != undefined) {
        if (currentChessboardHighlighted[coordinates] != undefined && currentChessboardHighlighted[coordinates] != null && currentChessboardHighlighted[coordinates] != '') {
            dotColor = currentChessboardHighlighted[coordinates] != false ? 'lime' : ''
            // dotColorBlack = currentChessboardHighlightedBlack[coordinates] != false ? 'lime' : ''
        }
    }

    const { currentColor, setCurrentColor } = useCurrentColor()
    const { currentSelectedPiece, setCurrentSelectedPiece } = useCurrentSelectedPiece()

    const handleCaseClick = () => {
        if (currentChessboardState[coordinates] !== null) {
            if (currentChessboardState[coordinates].split('_')[0] === currentColor) {
                setCurrentSelectedPiece(coordinates + '-' + currentChessboardState[coordinates])
            }
        }
        else {
            setCurrentSelectedPiece('')
        }

        handleHighlight(coordinates + '-' + currentChessboardState[coordinates])

    }

    const handleHighlight = (currentPiece) => {

        if (currentSelectedPiece != undefined && currentPiece != null && currentPiece != '') {
            let coords = currentPiece.split('-')[0]
            let piece = currentPiece.split('-')[1]
            // console.log(coords, piece)
            const highlightMap = getPossibleMoves(piece, coords, currentChessboardState, setCurrentChessboardState)
                setCurrentChessboardHighlighted(highlightMap)
        
        }
    }




    return (
        <div className='case' onClick={handleCaseClick}>
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