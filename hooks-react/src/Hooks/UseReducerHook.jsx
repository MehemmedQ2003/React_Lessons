import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Sayğac: {state.count}</h1>
            <button onClick={() => dispatch({ type: "decrement" })} disabled={state.count === 0}><h4>Azalt</h4></button>
            <button onClick={() => dispatch({ type: "increment" })}><h4>Artır</h4></button>
        </div>
    );
}

export default UseReducerHook
