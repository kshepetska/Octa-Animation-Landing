import { useWindowSize } from "@uidotdev/usehooks";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useWillChange,
} from "framer-motion";
import { useEffect, useRef } from "react";
import "./styles.css";
import { useImgPreloader } from "hooks/useImagePreload";

interface StickerProps {
  id: number;
  src: string;
  parallaxLayer?: number;
  toX: string;
  toY: string;
  fromRotateZ?: string;
  toRotateZ: string;
}

export function Sticker({
  id,
  src,
  parallaxLayer = 1,
  toX,
  toY,
  fromRotateZ = "0deg",
  toRotateZ,
}: StickerProps) {
  const { width, height } = useWindowSize();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const range = parallaxLayer === 1 ? ["-2vw", "2vw"] : ["-1vw", "1vw"];

  const translateX = useTransform(mouseX, [0, width ?? 0], range);
  const translateY = useTransform(mouseY, [0, height ?? 0], range);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.getElementById("landing-view");
  }, []);

  const { scrollY } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  const scrollTranslateX = useTransform(
    scrollY,
    [0, (height ?? 0) / 2],
    ["0", toX]
  );
  const scrollTranslateY = useTransform(
    scrollY,
    [0, (height ?? 0) / 2],
    ["0", toY]
  );
  const scrollRotateZ = useTransform(
    scrollY,
    [0, (height ?? 0) / 2],
    [fromRotateZ, toRotateZ]
  );
  const willChange = useWillChange();

  const { imgsPreloaded: isLoaded } = useImgPreloader([src]);

  return (
    <motion.div
      style={{
        x: scrollTranslateX,
        y: scrollTranslateY,
        willChange,
      }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className={`sticker-el _${id.toString().padStart(2, "0")}`}
    >
      <motion.div
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
        <motion.img
          src={src}
          style={{
            rotateZ: scrollRotateZ,
            willChange,
          }}
          className="sticker-img"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
