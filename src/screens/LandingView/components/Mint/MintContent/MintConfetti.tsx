import { CreateTypes, Options } from "canvas-confetti";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function getAnimationSettings(angle: Options["angle"], originX: number) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: [
      getComputedStyle(document.documentElement).getPropertyValue(
        "--page-dialog-text"
      ),
      "#ffffff",
    ],
  };
}

export function MintConfetti() {
  const refAnimationInstance = useRef<CreateTypes | null>(null);

  const getInstance = useCallback((instance: CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTickAnimation, 50);

    return () => clearInterval(interval);
  }, [nextTickAnimation]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      className="fixed top-0 left-0 bottom-0 right-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
