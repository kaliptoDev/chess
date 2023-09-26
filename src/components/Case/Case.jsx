import './Case.css'
import useCurrentChessboardState from '../../hooks/useCurrentChessboardState'

const Case = ({ children }) => {

    const { currentChessboardState, setCurrentChessboardState } = useCurrentChessboardState()

    // const color = "lime"
    const color = "none"

    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children

    const coordinates = xCoordinate + yCoordinate

    // console.log(children)
    return (
        <div className='case'>
            <div className={`case__bg ${color}`}></div>
            {
                currentChessboardState[coordinates] &&
                <img
                    src={`./assets/${currentChessboardState[coordinates]}.svg`}
                    alt={`${currentChessboardState[coordinates] ? currentChessboardState[coordinates]
                        : "Piece"}`} />
            }
        </div>
    )
}

export default Case