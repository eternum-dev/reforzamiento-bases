import { useState } from "react"



export const Counter = ({initialValue = 0}) => {

    const [counter, setCounterState] = useState(initialValue);



    const handleClick = () => {
        setCounterState(prev => prev + 1);
    }



    return (
        <>
            <h2>counter: {counter}</h2>
            <button onClick={() => handleClick()} style={{ marginRight: ".5rem" }}>+1</button>
        </>

    )
}