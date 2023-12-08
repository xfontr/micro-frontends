import { PropsWithChildren, createContext } from "react";
import { GameStateProvider } from "../types/gameState";
import useGameState from "../hooks/useGameState";

const { Provider } = createContext<GameStateProvider>({} as GameStateProvider);

const GameContextProvider = ({ children }: PropsWithChildren) => {
    const value = useGameState();

    return <Provider {...{ value }}>{children}</Provider>;
};

export default GameContextProvider;
