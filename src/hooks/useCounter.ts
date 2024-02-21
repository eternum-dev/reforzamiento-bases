import gsap from "gsap";
import { useEffect, useRef, useState } from "react";



const MAXIMUN_COUNT = 0 

export const useConter = ( ) => {
  const [counter, setCounterState] = useState(0);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (counter >= MAXIMUN_COUNT) return;
    setCounterState((prev) => prev + 1);
  };

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter]);

  return {
    handleClick,
    counterElement,
    counter
  };
};
