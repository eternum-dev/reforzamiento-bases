import { useState } from "react"

interface Props {
    initalValue?: number;
}
interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initalValue = 0 }: Props) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initalValue,
        clicks: 0
    });



    const handleClick = (value: number) => {
        setCounterState(({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }));
    }



    return (
        <>
            <h2>counterBy: {counter}</h2>
            <h3>clicks: {clicks}</h3>
            <button onClick={() => handleClick(1)} style={{ marginRight: ".5rem" }}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>

    )
}