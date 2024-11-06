import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform, useWillChange } from "framer-motion";
import { useEffect, useRef } from "react";
import { LandingHeroStickers } from "./LandingHeroStickers";
import { useText } from "hooks/useText";

export function LandingHero() {
  const { height } = useWindowSize();
  const windowHeight = height ?? 0;
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.getElementById("landing-view");
  }, []);

  const { scrollY } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });
  const opacity = useTransform(scrollY, [0, windowHeight / 2], [1, 0]);
  const scale = useTransform(scrollY, [0, windowHeight / 2], [1, 0.5]);
  const mintPage = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mintPage.current = document.getElementById("mint");
  }, []);

  const willChange = useWillChange();

  const mainHeading = useText("mainHeading");

  return (
    <div className="flex justify-center items-center w-full h-screen pointer-events-none px-10">
      <LandingHeroStickers />
      <motion.div
        className="relative w-full max-w-[68rem] mx-auto mb-[20vh] text-center"
        style={{ opacity, scale, willChange }}
      >
        <h1
          className="mb-1 font-bold text-5xl leading-[.9] text-nav-text font-heading lg:text-8xl"
          dangerouslySetInnerHTML={{ __html: mainHeading }}
        />
      </motion.div>
    </div>
  );
}
