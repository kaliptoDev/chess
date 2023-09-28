import './Home.css'
import ChessBoard from '../../components/ChessBoard/ChessBoard'
import Case from '../../components/Case/Case'
import _ from 'lodash'
import useCurrentChessboardHighlighted from '../../hooks/useCurrentChessboardHighlightedWhite'
import { useEffect } from 'react'

const Home = () => {

    const { currentChessboardHighlighted, setCurrentChessboardHighlighted } = useCurrentChessboardHighlighted()

    return (
        <div className="home">
            <ChessBoard>
                {
                    _.times(64, (index) => {
                        const indexBuffer = 64 - index
                        const isEight = indexBuffer % 8 === 0

                        const yCoordinate = isEight ? 8 : indexBuffer % 8
                        const xCoordinate = String.fromCharCode(65 + (8 - indexBuffer / 8))
                        return (
                            <Case key={index} xCoordinate={xCoordinate} yCoordinate={yCoordinate}>
                                {
                                    <span>{yCoordinate}</span>
                                }
                                {
                                    <span className="letter">{xCoordinate}</span>
                                }
                            </Case>
                        )
                    })
                }
            </ChessBoard>
        </div>
    )
}

export default Home