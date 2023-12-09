import { Dispatch } from "react";

const stateSetter =
    <T>(setter: Dispatch<React.SetStateAction<T>>) =>
    (newValues: Partial<T> | ((currentState: T) => Partial<T>)): void => {
        setter((state) => ({
            ...state,
            ...(typeof newValues === "function" ? newValues(state) : newValues),
        }));
    };

export default stateSetter;
