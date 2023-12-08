import { useState } from "react";
import { FullBoard, GameState, GameStateProvider } from "../types/gameState";
import { COMPUTER } from "../configs/globals";

const useGameState = (): GameStateProvider => {
    const [gameState, setGameState] = useState<GameState>({} as GameState);

    const getGameState = (): GameState => JSON.parse(JSON.stringify(gameState));

    const setGameStatus: GameStateProvider["setGameStatus"] = (status) => {
        setGameState((state) => ({
            ...state,
            status: status,
        }));
    };

    const setGamePlayers: GameStateProvider["setGamePlayers"] = (x, o) => {
        setGameState((state) => ({
            ...state,
            players: {
                x,
                o: o ?? COMPUTER,
            },
            againstComputer: !!o,
        }));
    };

    const saveRound: GameStateProvider["saveRound"] = (
        durationInMs,
        finalBoard,
        winner
    ) => {
        setGameState((state) => ({
            ...state,
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
        setGameState((state) => ({
            ...state,
            board: [
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined],
            ],
        }));
    };

    const updateBoardCell: GameStateProvider["updateBoardCell"] = (
        locationX,
        locationY,
        player
    ) => {
        const board = getGameState().board;
        board[locationY][locationX] = player;

        setGameState((state) => ({
            ...state,
            board,
        }));
    };

    const nextTurn: GameStateProvider["nextTurn"] = () => {
        setGameState((state) => ({
            ...state,
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
