import { PropsWithChildren } from "react";
import { GameState } from "../types/gameState";
import useGameState from "../hooks/useGameState";
import GameContext from "./game.storeContext";

const initialState: GameState = {
    againstComputer: true,
    board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    ],
    currentPlayer: "X",
    status: "READY",
    players: {
        x: "",
        o: "",
    },
    rounds: [],
};

const GameContextProvider = ({ children }: PropsWithChildren) => {
    const value = useGameState(initialState);

    return <GameContext.Provider {...{ value, children }} />;
};

export default GameContextProvider;
