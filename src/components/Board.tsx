import { useContext } from "react";
import GameContext from "../stores/game.storeContext";

const Board = (): JSX.Element => {
    const { getGameState } = useContext(GameContext);

    const board = getGameState().board;

    return (
        <ul>
            {board.map((column, columnIndex) => (
                <li key={columnIndex}>
                    <ul>
                        {column.map((cell, cellIndex) => (
                            <li key={cellIndex}>{cell ?? ""}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default Board;
