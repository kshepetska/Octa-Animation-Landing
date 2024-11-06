import { ReactLenis } from "@studio-freight/react-lenis";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useText } from "hooks/useText";
import { CSSProperties, useEffect, useMemo, useRef } from "react";
import { PageDialog } from "ui-kit/PageDialog";
import { LandingBentoBox } from "./components/LandingBentoBox";
import { LandingHeader } from "./components/LandingHeader";
import { LandingHero } from "./components/LandingHero";
import { LandingPhone } from "./components/LandingPhone";
import { Mint } from "./components/Mint";
import { useStore } from "./store/store";
import { useImgPreloader } from "hooks/useImagePreload";
import { landingStickers, mintImages, phoneScreens } from "./constants";
import { cacheImages } from "utils/images";
import { LandingFooter } from "./components/LandingFooter";

export function LandingView() {
  const [
    currentPhoneScreen,
    bgColor,
    textColor,
    transitionDurationMs,
    setBgColor,
    setTextColor,
    isMintPageOpen,
    setIsMintPageOpen,
  ] = useStore((state) => [
    state.currentPhoneScreen,
    state.bgColor,
    state.textColor,
    state.transitionDurationMs,
    state.setBgColor,
    state.setTextColor,
    state.isMintPageOpen,
    state.setIsMintPageOpen,
  ]);

  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.getElementById("landing-view");
  }, []);

  const { height } = useWindowSize();
  const { scrollYProgress, scrollY } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["200px start", "end end"],
    layoutEffect: false,
  });

  const phone = useText("phone");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && scrollY.get() < (height ?? 0) * 1.5) {
      setBgColor(phone[currentPhoneScreen].bgColor);
      setTextColor(phone[currentPhoneScreen].textColor);
    } else if (latest === 0) {
      setBgColor("var(--default-bg)");
      setTextColor("var(--default-text)");
    }
  });

  const style = useMemo(() => {
    return {
      "--nav-bg": bgColor,
      "--nav-text": textColor,
      transitionDuration: `${transitionDurationMs}ms`,
      overflow: isMintPageOpen ? "hidden" : "auto",
      scrollbarGutter: isMintPageOpen ? "stable" : undefined,
      borderRadius: isMintPageOpen ? "1.75rem" : undefined,
      pointerEvents: isMintPageOpen ? "none" : undefined,
    } as CSSProperties;
  }, [bgColor, textColor, transitionDurationMs, isMintPageOpen]);

  useImgPreloader(mintImages);

  useEffect(() => {
    cacheImages(mintImages);
    cacheImages(phoneScreens);
    cacheImages(landingStickers);
  }, []);

  return (
    <>
      <motion.div
        animate={
          isMintPageOpen
            ? {
                scale: 0.5,
                filter: "blur(25px)",
              }
            : {
                scale: 1,
                filter: "blur(0px)",
              }
        }
        style={{ willChange: "transform, filter" }}
        transition={{ duration: 1 }}
      >
        <ReactLenis
          className="min-h-screen max-h-screen bg-nav-bg text-nav-text font-medium font-body transition-colors duration-500 overflow-auto"
          style={{ ...style }}
          id="landing-view"
          options={{
            smoothTouch: true,
          }}
        >
          <LandingHeader />
          <div style={{ height: "200svh" }} ref={targetRef}>
            <div className="sticky top-0 w-full">
              <LandingHero />
              <LandingPhone />
            </div>
          </div>
          <LandingBentoBox />
          <LandingFooter />
        </ReactLenis>
      </motion.div>
      <PageDialog
        open={isMintPageOpen}
        onOpenChange={(val) => setIsMintPageOpen(val)}
      >
        <Mint />
      </PageDialog>
    </>
  );
}
