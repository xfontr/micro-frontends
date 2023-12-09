import { useContext, useEffect } from "react";
import Board from "./Board";
import GameContext from "../stores/game.storeContext";

const App = () => {
    const { setBoard } = useContext(GameContext);

    useEffect(() => {
        setBoard();
    }, [setBoard]);

    return <Board />;
};

export default App;
