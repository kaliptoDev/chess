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

const getDiagonalsMoves = (coordinates, color, currentChessboardState) => { }

const getLinesMoves = (coordinates, color, currentChessboardState) => { }

const getPawnMoves = (coordinates, color, currentChessboardState, setCurrentChessboardState) => {

    let moves = []

    let y = coordinates.split("")[1]
    y = parseInt(y) + 1
    let x = coordinates.split("")[0]

    if (currentChessboardState[x + y] === null) { //checks for piece in front
        moves.push(x + y)
        if (coordinates.split("")[1] === '2') {
            if (currentChessboardState[x + '4'] === null) { //checks for piece in front of the piece in front
                moves.push(x + '4');
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

        if (currentChessboardState[topLeftCoordinates] !== null && currentChessboardState[topLeftCoordinates].split("_")[0] !== color) {
            moves.push(topLeftCoordinates)
        }
    }

    if (coordinates.split("")[0] < "H") {//checks for displacement on the top right

        const rightXDisplacement = String.fromCharCode(coordinates.split("")[0].charCodeAt(0) + 1)
        const rightYDisplacement = parseInt(coordinates.split("")[1]) + 1
        const topRightCoordinates = rightXDisplacement + rightYDisplacement

        if (currentChessboardState[topRightCoordinates] !== null && currentChessboardState[topRightCoordinates].split("_")[0] !== color) {
            moves.push(topRightCoordinates)
        }
    }

    // console.log(moves)
    return moves;
}

const getRookMoves = (coordinates, color, currentChessboardState) => {
    let moves = []
    let x = coordinates.split("")[0]
    let y = coordinates.split("")[1]

    while (x < "H") {
        x = String.fromCharCode(x.charCodeAt(0) + 1)
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    x = coordinates.split("")[0]

    while (x > "A") {
        x = String.fromCharCode(x.charCodeAt(0) - 1)
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    x = coordinates.split("")[0]

    while (y < "8") {
        y = parseInt(y) + 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    y = coordinates.split("")[1]

    while (y > "1") {
        y = parseInt(y) - 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    return moves;

}

const getBishopMoves = (coordinates, color, currentChessboardState) => {

    let moves = []

    let x = coordinates.split("")[0]
    let y = coordinates.split("")[1]

    while (x < "H" && y < "8") {
        x = String.fromCharCode(x.charCodeAt(0) + 1)
        y = parseInt(y) + 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    x = coordinates.split("")[0]
    y = coordinates.split("")[1]

    while (x > "A" && y < "8") {
        x = String.fromCharCode(x.charCodeAt(0) - 1)
        y = parseInt(y) + 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    x = coordinates.split("")[0]
    y = coordinates.split("")[1]

    while (x < "H" && y > "1") {
        x = String.fromCharCode(x.charCodeAt(0) + 1)
        y = parseInt(y) - 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    x = coordinates.split("")[0]
    y = coordinates.split("")[1]

    while (x > "A" && y > "1") {
        x = String.fromCharCode(x.charCodeAt(0) - 1)
        y = parseInt(y) - 1
        const newCoordinates = x + y
        if (currentChessboardState[newCoordinates] !== null) {
            if (currentChessboardState[newCoordinates].split("_")[0] !== color) {
                moves.push(newCoordinates)
            }
            break;
        }
        moves.push(newCoordinates)
    }

    return moves
}

const getKnightMoves = (coordinates, color, currentChessboardState) => {
    let moves = []

    let x = coordinates.split("")[0]
    let y = coordinates.split("")[1]

    const possibleMoves = [
        String.fromCharCode(x.charCodeAt(0) + 2) + (parseInt(y) + 1),
        String.fromCharCode(x.charCodeAt(0) + 2) + (parseInt(y) - 1),
        String.fromCharCode(x.charCodeAt(0) - 2) + (parseInt(y) + 1),
        String.fromCharCode(x.charCodeAt(0) - 2) + (parseInt(y) - 1),
        String.fromCharCode(x.charCodeAt(0) + 1) + (parseInt(y) + 2),
        String.fromCharCode(x.charCodeAt(0) - 1) + (parseInt(y) + 2),
        String.fromCharCode(x.charCodeAt(0) + 1) + (parseInt(y) - 2),
        String.fromCharCode(x.charCodeAt(0) - 1) + (parseInt(y) - 2)
    ]

    possibleMoves.forEach(move => {
        if (currentChessboardState[move] !== null && currentChessboardState[move] !== undefined) {
            if (currentChessboardState[move].split("_")[0] !== color) {
                moves.push(move)
            }
        } else {
            moves.push(move)
        }
    })


    return moves
}

const getQueenMoves = (coordinates, color, currentChessboardState) => {
    let moves = []

    return moves
}

const getKingMoves = (coordinates, color, currentChessboardState) => {
    let moves = []

    return moves
}

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
    console.log(moves)

    let highlightMap = {
        "A1": false,
        "B1": false,
        "C1": false,
        "D1": false,
        "E1": false,
        "F1": false,
        "G1": false,
        "H1": false,
        "A2": false,
        "B2": false,
        "C2": false,
        "D2": false,
        "E2": false,
        "F2": false,
        "G2": false,
        "H2": false,
        "A3": false,
        "B3": false,
        "C3": false,
        "D3": false,
        "E3": false,
        "F3": false,
        "G3": false,
        "H3": false,
        "A4": false,
        "B4": false,
        "C4": false,
        "D4": false,
        "E4": false,
        "F4": false,
        "G4": false,
        "H4": false,
        "A5": false,
        "B5": false,
        "C5": false,
        "D5": false,
        "E5": false,
        "F5": false,
        "G5": false,
        "H5": false,
        "A6": false,
        "B6": false,
        "C6": false,
        "D6": false,
        "E6": false,
        "F6": false,
        "G6": false,
        "H6": false,
        "A7": false,
        "B7": false,
        "C7": false,
        "D7": false,
        "E7": false,
        "F7": false,
        "G7": false,
        "H7": false,
        "A8": false,
        "B8": false,
        "C8": false,
        "D8": false,
        "E8": false,
        "F8": false,
        "G8": false,
        "H8": false,
    }

    moves.forEach(move => {
        highlightMap[move] = true
    }
    )

    return highlightMap

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