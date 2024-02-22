import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useConter = ({ maxCount = 10 }) => {
  const [counter, setCounterState] = useState(0);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    if (counter >= maxCount) return;
    setCounterState((prev) => prev + 1);
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();

  }, []);

  useEffect(() => {

    tl.current.play(0);

  }, [counter]);

  return {
    handleClick,
    elementToAnimate,
    counter,
  };
};
