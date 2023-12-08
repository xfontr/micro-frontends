export type BoardCell = "X" | "O" | undefined;

export type FullBoard = [
    [BoardCell, BoardCell, BoardCell],
    [BoardCell, BoardCell, BoardCell],
    [BoardCell, BoardCell, BoardCell]
];

export type GameRound = {
    winner: string;
    date: Date;
    durationInMs: number;
    finalBoard: FullBoard;
};

export type GameState = {
    status: "READY" | "ON" | "OVER";
    againstComputer: boolean;
    rounds: GameRound[];
    players: {
        x: string;
        o: string;
    };
    currentPlayer: "X" | "O";
    board: FullBoard;
};

export type GameStateProvider = {
    getGameState: () => GameState;
    setGameStatus: (status: GameState["status"]) => void;
    setGamePlayers: (x: string, o?: string) => void;
    saveRound: (
        durationInMs: number,
        finalBoard: FullBoard,
        winner: string
    ) => void;
    nextTurn: () => void;
    updateBoardCell: (
        locationX: number,
        locationY: number,
        player: "X" | "O"
    ) => void;
    resetBoard: () => void;
};
