import { useConter } from "../hooks/useCounter"


export const CounterHook = () => {

    const { counter, counterElement, handleClick } = useConter();

    return (
        <>
            <h2>counterHook: </h2>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={() => handleClick()} style={{ marginRight: ".5rem" }}>+1</button>
        </>

    )
}