import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounterState] = useState(0);
    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {
        if (counter >= MAXIMUN_COUNT) return;
        setCounterState(prev => prev + 1);
    }

    useEffect(() => {

        if (counter < MAXIMUN_COUNT) return;

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    }, [counter])


    return (
        <>
            <h2>counterEffect: </h2>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={() => handleClick()} style={{ marginRight: ".5rem" }}>+1</button>
        </>

    )
}