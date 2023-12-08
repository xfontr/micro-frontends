import { useState } from "react";
import { GameState, GameStateProvider } from "../types/gameState";
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

    const nextTurn: GameStateProvider["nextTurn"] = () => {
        setGameState((state) => ({
            ...state,
            currentLetter: state.currentLetter === "X" ? "O" : "X",
        }));
    };

    return {
        getGameState,
        setGameStatus,
        setGamePlayers,
        saveRound,
        nextTurn,
    };
};

export default useGameState;
