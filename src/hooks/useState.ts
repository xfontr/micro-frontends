import { useState as defaultUseState } from "react";
import stateSetter from "../utils/stateSetter";

const useState = <T>(
    initialState: T
): [T, (newValues: Partial<T> | ((currentState: T) => Partial<T>)) => void] => {
    const [state, setter] = defaultUseState(initialState);

    return [state, stateSetter(setter)];
};

export default useState;
