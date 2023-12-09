import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import GameContextProvider from "./stores/game.storeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GameContextProvider>
            <App />
        </GameContextProvider>
    </React.StrictMode>
);
