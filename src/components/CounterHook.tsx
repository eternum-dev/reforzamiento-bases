import { useConter } from "../hooks/useCounter"


export const CounterHook = () => {

    const { counter, elementToAnimate, handleClick } = useConter({ maxCount: 10 });

    return (
        <>
            <h2>counterHook: </h2>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={() => handleClick()} style={{ marginRight: ".5rem" }}>+1</button>
        </>
    )
}