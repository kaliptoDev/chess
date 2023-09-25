import './ChessBoard.css'
import _ from 'lodash'

const ChessBoard = ({ children }) => {

    return (
        <div className="chessboard__container">
            <div className="chessboard">
                <div className='chessboard__numbers'>
                    {
                        _.times(8, (index) => {
                            return (
                                <span className='side__number' key={index}>{8 - index}</span>
                            )
                        })
                    }
                </div>
                <div className='chessboard__letters'>
                    {
                        _.times(8, (index) => {
                            return (
                                <span className='side__letter' key={index}>{String.fromCharCode(65 + index)}</span>
                            )
                        })
                    }
                </div>

                {children}
            </div>
        </div>
    )
}

export default ChessBoard
