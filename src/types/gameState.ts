export type GameRound = {
    winner: string;
    date: Date;
    durationInMs: number;
    finalBoard: [
        [string, string, string],
        [string, string, string],
        [string, string, string]
    ];
};

export type GameState = {
    status: "READY" | "ON" | "OVER";
    againstComputer: boolean;
    rounds: GameRound[];
    players: {
        x: string;
        o: string;
    };
    currentLetter: "X" | "O";
};

export type GameStateProvider = {
    getGameState: () => GameState;
    setGameStatus: (status: GameState["status"]) => void;
    setGamePlayers: (x: string, o?: string) => void;
    saveRound: (
        durationInMs: number,
        finalBoard: GameRound["finalBoard"],
        winner: string
    ) => void;
    nextTurn: () => void;
};
