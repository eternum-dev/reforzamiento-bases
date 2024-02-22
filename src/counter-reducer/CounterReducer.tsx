import { useReducer } from "react"
import { CounterState } from "./interfaces/counterInterfaces"
import { counterReducer } from "./state/counterReducer";


const INITAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0,
}

export const CounterReducerDiferent = () => {

    const [state, dispatch] = useReducer(counterReducer, INITAL_STATE);


    const handleReset = () => {
        dispatch({ type: 'reset' })
    }
    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value: value } })
    }


    return (
        <>
            <h2>Counter Reducer fragmentado: {state.counter}</h2>
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