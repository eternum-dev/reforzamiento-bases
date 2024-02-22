import { useReducer } from "react"



interface CounterState {
    counter: number;
    previus: number;
    changes: number;
}


const INITAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0,

}

type CounterAction =
    | { type: "increaseBy", payload: { value: number } }
    | { type: "reset" }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case "reset":
            return {
                counter: 0,
                previus: 0,
                changes: 0,
            }
        case "increaseBy":

            return {
                counter: state.counter + action.payload.value,
                previus: state.counter,
                changes: state.changes + 1,
            }
        default:
            return state;
    }
}
export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(counterReducer, INITAL_STATE);


    const handleReset = () => {
        dispatch({ type: 'reset' })
    }
    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value: value } })
    }


    return (
        <>
            <h2>Counter Reducer: {state.counter}</h2>
            <button onClick={() => handleReset()} style={{ marginRight: ".5rem" }}>reset</button>
            <button onClick={() => increaseBy(1)} style={{ marginRight: ".5rem" }}>+1</button>
            <button onClick={() => increaseBy(10)} style={{ marginRight: ".5rem" }}>+10</button>
            <button onClick={() => increaseBy(15)} style={{ marginRight: ".5rem" }}>+15</button>
            <pre>
                {JSON.stringify(state)}
            </pre>
        </>

    )
}