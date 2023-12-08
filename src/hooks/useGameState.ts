import { GameState, GameStateProvider } from "../types/gameState";
import { COMPUTER } from "../configs/globals";
import useState from "./useState";

const useGameState = (): GameStateProvider => {
    const [gameState, setGameState] = useState<GameState>({} as GameState);

    const getGameState = (): GameState => JSON.parse(JSON.stringify(gameState));

    const setGameStatus: GameStateProvider["setGameStatus"] = (status) => {
        setGameState({
            status: status,
        });
    };

    const setGamePlayers: GameStateProvider["setGamePlayers"] = (x, o) => {
        setGameState({
            players: {
                x,
                o: o ?? COMPUTER,
            },
            againstComputer: !!o,
        });
    };

    const saveRound: GameStateProvider["saveRound"] = (
        durationInMs,
        finalBoard,
        winner
    ) => {
        setGameState((state) => ({
            rounds: [
                ...state.rounds,
                {
                    date: new Date(),
                    durationInMs,
                    finalBoard,
                    winner,
                },
            ],
        }));
    };

    const resetBoard: GameStateProvider["resetBoard"] = () => {
        setGameState({
            board: [
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
            ],
        });
    };

    const updateBoardCell: GameStateProvider["updateBoardCell"] = (
        locationX,
        locationY,
        player
    ) => {
        const board = getGameState().board;
        board[locationY][locationX] = player;

        setGameState({
            board,
        });
    };

    const nextTurn: GameStateProvider["nextTurn"] = () => {
        setGameState((state) => ({
            currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        }));
    };

    return {
        getGameState,
        setGameStatus,
        setGamePlayers,
        saveRound,
        nextTurn,
        updateBoardCell,
        resetBoard,
    };
};

export default useGameState;
