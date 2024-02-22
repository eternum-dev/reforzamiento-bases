import { useState } from "react"



export const Counter = ({ initialValue = 0 }) => {

    const [counter, setCounterState] = useState(initialValue);



    const handleClick = () => {
        setCounterState(prev => prev + 1);
    }



    return (
        <>
            <h2>Counter:</h2>
            <h2> {counter}</h2>
            <button onClick={() => handleClick()} style={{ marginRight: ".5rem" }}>+1</button>
        </>

    )
}