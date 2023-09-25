import './Case.css'

const Case = ({ children }) => {

    const color = "lime"
    
    const xCoordinate = children[1].props.children
    const yCoordinate = children[0].props.children

    console.log(xCoordinate + yCoordinate)
        return (
        <div className={`case ${color}`}>
            {children}
        </div>
    )
}

export default Case