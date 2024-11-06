import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import {
  MotionValue,
  easeInOut,
  motion,
  useMotionValue,
  useTransform,
  useWillChange,
} from "framer-motion";
import { useEffect } from "react";

interface MintImageProps {
  scrollYProgress: MotionValue<number>;
  src: string;
  toX: string;
  toY: string;
  classNames?: string;
  defaultShadowOpacity?: number;
  parallaxLayer?: number;
}

export function MintImage({
  scrollYProgress,
  src,
  toX,
  toY,
  classNames,
  defaultShadowOpacity = 0,
  parallaxLayer = 1,
}: MintImageProps) {
  const { width, height } = useWindowSize();
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", toX]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", toY]);
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [defaultShadowOpacity, 1]
  );

  const mouseX = useMotionValue((width ?? 0) / 2);
  const mouseY = useMotionValue((width ?? 0) / 2);

  const range = parallaxLayer === 1 ? ["-2vw", "2vw"] : ["-1vw", "1vw"];

  const translateX = useTransform(mouseX, [0, width ?? 0], range, {
    ease: easeInOut,
  });
  const translateY = useTransform(mouseY, [0, height ?? 0], range);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const willChange = useWillChange();

  return (
    <motion.div
      initial={{ scale: 0 }}
      style={{
        translateX: x,
        translateY: y,
        willChange,
      }}
      className={clsx("mint-sticker absolute", parallaxLayer === 1 && "z-10")}
    >
      <motion.div
        initial={{ x: 0, y: 0 }}
        style={
          (width ?? 0) >= 768
            ? {
                x: translateX,
                y: translateY,
                willChange,
              }
            : { willChange }
        }
      >
        <img
          src={src}
          alt=""
          className={clsx(
            parallaxLayer === 1 &&
              "w-[30vw] rounded-[2.5vw] md:w-[20vw] md:h-[20vw] lg:w-60 lg:h-60 lg:rounded-[2rem]",
            parallaxLayer === 2 &&
              "w-[15vw] rounded-[2vw] lg:w-40 lg:h-40 lg:rounded-3xl",
            classNames
          )}
        />
        <motion.div
          style={{ opacity: shadowOpacity, willChange }}
          className="mint-img-shadow"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
