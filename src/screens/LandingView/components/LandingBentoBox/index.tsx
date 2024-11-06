import { animate, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useStore } from "../../store/store";
import { BentoCOD } from "./BentoCOD";
import { BentoWallet } from "./BentoWallet";
import "./styles.css";
import { BentoMarketPlace } from "./BentoMarketPlace";
import { BentoCreation } from "./BentoCreation";
import { BentoPlanningCODs } from "./BentoPlanningCODs";
import { BentoTokenomics } from "./BentoTokenomics";
import { useText } from "hooks/useText";
import { cacheImages } from "utils/images";
import { Images } from "./images";
import { useImgPreloader } from "hooks/useImagePreload";

const images = Object.values(Images);

export function LandingBentoBox() {
  const [setBgColor, setTextColor] = useStore((s) => [
    s.setBgColor,
    s.setTextColor,
  ]);
  const targetRef = useRef(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const { imgsPreloaded } = useImgPreloader(images);

  useEffect(() => {
    containerRef.current = document.getElementById("landing-view");

    cacheImages(images);
  }, []);

  useEffect(() => {
    animate(".bento-content img", {
      opacity: imgsPreloaded ? 1 : 0,
    });
  }, [imgsPreloaded]);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["100px end", "end end"],
    layoutEffect: false,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setBgColor("var(--default-bg)");
      setTextColor("var(--default-text)");
    }
  });

  const bentoBox = useText("bentoBox");

  return (
    <div
      className="relative w-full min-h-screen py-40 font-medium"
      ref={targetRef}
    >
      <div className="w-full max-w-[85rem] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 grid-rows-auto auto-cols-fr gap-6 w-full lg:gap-8">
          <h2
            className="mb-4 font-heading text-4xl text-center leading-none bento-headline sm:text-5rem"
            dangerouslySetInnerHTML={{ __html: bentoBox.heading }}
          />

          <div className="bento-content">
            <BentoCOD />
            <BentoMarketPlace />
            <BentoWallet />
            <BentoCreation />
            <BentoTokenomics />
            <BentoPlanningCODs />
          </div>
        </div>
      </div>
    </div>
  );
}
