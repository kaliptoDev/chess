const points = {
    'pawn': 1,
    'knight': 3,
    'bishop': 3,
    'rook': 5,
    'queen': 9,
    'king': 15
};

const getPossibleMoves = (piece, coordinates, currentChessboardState, setCurrentChessboardState) => {
    const color = piece.split("_")[0]
    let moves = [];

    switch (piece.split("_")[1]) {
        case 'pawn':
            moves = getPawnMoves(coordinates, color, currentChessboardState, setCurrentChessboardState);
            break;
        case 'knight':
            moves = getKnightMoves(coordinates, color, currentChessboardState);
            break;
        case 'bishop':
            moves = getBishopMoves(coordinates, color, currentChessboardState);
            break;
        case 'rook':
            moves = getRookMoves(coordinates, color, currentChessboardState);
            break;
        case 'queen':
            moves = getQueenMoves(coordinates, color, currentChessboardState);
            break;
        case 'king':
            moves = getKingMoves(coordinates, color, currentChessboardState);
            break;
        default:
            break;
    }
    const movesMap = getHighlightMapFromMoves(moves);
    return movesMap;
};

const getPawnMoves = (coordinates, color, currentChessboardState, setCurrentChessboardState) => {

    if (color === 'white') {
        let moves = []
        if (coordinates.split("")[1] === '2') {

            if (currentChessboardState[coordinates.split("")[0] + '3'] === null) { //checks for piece in front
                moves.push(coordinates.split("")[0] + '3');
                if (currentChessboardState[coordinates.split("")[0] + '4'] === null) { //checks for piece in front of the piece in front
                    moves.push(coordinates.split("")[0] + '4');
                }
            }
        }

        if (coordinates.split("")[1] == '8') {
            choosePieceFromPawnPromotion(coordinates, color, currentChessboardState, setCurrentChessboardState)
            return moves;

        } //checks for displacement on the top


        if (coordinates.split("")[0] > "A") {//checks for displacement on the top left

            const leftXDisplacement = String.fromCharCode(coordinates.split("")[0].charCodeAt(0) - 1)
            const leftYDisplacement = parseInt(coordinates.split("")[1]) + 1
            const topLeftCoordinates = leftXDisplacement + leftYDisplacement

            if (currentChessboardState[topLeftCoordinates] !== null && currentChessboardState[topLeftCoordinates].split("_")[0] === 'black') {
                moves.push(topLeftCoordinates)
            }
        }

        if (coordinates.split("")[0] < "H") {//checks for displacement on the top right

            const rightXDisplacement = String.fromCharCode(coordinates.split("")[0].charCodeAt(0) + 1)
            const rightYDisplacement = parseInt(coordinates.split("")[1]) + 1
            const topRightCoordinates = rightXDisplacement + rightYDisplacement

            if (currentChessboardState[topRightCoordinates] !== null && currentChessboardState[topRightCoordinates].split("_")[0] === 'black') {
                moves.push(topRightCoordinates)
            }
        }

        console.log(moves)
        return moves;
    } else { }
}

const getKnightMoves = (chessboard, coordinates, color) => { }

const getBishopMoves = (chessboard, coordinates, color) => { }

const getRookMoves = (chessboard, coordinates, color) => { }

const getQueenMoves = (chessboard, coordinates, color) => { }

const getKingMoves = (chessboard, coordinates, color) => { }

const getBestMove = (piece, coordinates, moves) => { };

const displayPieceLines = (piece, coordinates) => { };

const displayPieceDiagonals = (piece, coordinates) => { };

const displayPieceMoves = (piece, coordinates) => { };

const playMove = (piece, coordinates, destinationCoordinates) => { };

const getCheckStatus = (piece, coordinates) => { };

const getCheckmateStatus = (piece, coordinates) => { };

const getStalemateStatus = (piece, coordinates) => { };

const getDrawStatus = (piece, coordinates) => { };

const getWinner = (piece, coordinates) => { };

const getScore = (piece, coordinates) => { };

const getBoard = () => { };

const updateBoard = () => { };

const getHighlightMapFromMoves = (moves, setCurrentChessboardHighlighted) => {
}

const choosePieceFromPawnPromotion = (coordinates, color, currentChessboardState, setCurrentChessboardState) => {

    alert("Choose a piece to promote your pawn to")

    const piece = prompt("Choose a piece to promote your pawn to")

    if (piece === 'queen' || piece === 'rook' || piece === 'bishop' || piece === 'knight') {

        const newPiece = color + '_' + piece

        const newChessboardState = {
            ...currentChessboardState,
            [coordinates]: newPiece
        }

        setCurrentChessboardState(newChessboardState)
    } else {
        alert("Invalid piece")
    }
}

export {
    getPossibleMoves,
    getPawnMoves,
    getKnightMoves,
    getBishopMoves,
    getRookMoves,
    getQueenMoves,
    getKingMoves,
    getHighlightMapFromMoves,
    getBestMove,
    displayPieceLines,
    displayPieceDiagonals,
    displayPieceMoves,
    playMove,
    getCheckStatus,
    getCheckmateStatus,
    getStalemateStatus,
    getDrawStatus,
    getWinner,
    getScore,
    getBoard,
    updateBoard,
    choosePieceFromPawnPromotion
}