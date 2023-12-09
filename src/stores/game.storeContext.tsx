import { createContext } from "react";
import { GameStateProvider } from "../types/gameState";

const GameContext = createContext<GameStateProvider>({} as GameStateProvider);

export default GameContext;
