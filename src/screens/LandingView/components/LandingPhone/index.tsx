import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform, useWillChange } from "framer-motion";
import { LandingPhoneContent } from "./LandingPhoneContent";
import { LandingPhoneControls } from "./LandingPhoneControls";
import "./styles.css";
import { useStore } from "screens/LandingView/store/store";
import { phoneScreens } from "screens/LandingView/constants";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useImgPreloader } from "hooks/useImagePreload";

const smartphone = require("../../assets/smartphone.png");

export function LandingPhone() {
  const [currentPhoneScreen] = useStore((state) => [state.currentPhoneScreen]);
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

  const translateY = useTransform(
    scrollY,
    [0, windowHeight / 2],
    ["calc(100vh - 40%)", "calc(50vh - 50%)"]
  );
  const scale = useTransform(scrollY, [0, windowHeight / 2], [1, 0.65]);
  const willChange = useWillChange();

  const { imgsPreloaded } = useImgPreloader([...phoneScreens, smartphone]);

  return (
    <>
      <div className="absolute top-0 w-full h-screen pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          style={{ translateY, willChange }}
          className="relative flex flex-col justify-center items-center max-h-screen gap-10 pb-[3vh]"
          animate={{
            opacity: imgsPreloaded ? 1 : 0,
          }}
        >
          <motion.div
            className="relative flex justify-center items-center z-10 w-[80vw] sm:w-[50vw] lg:w-[31.25rem]"
            style={{ scale, willChange }}
          >
            <img
              src={smartphone}
              alt=""
              className="relative max-h-[85vh] align-middle z-10 object-contain phone-aspect-ratio"
            />
            <div className="phone-mockup-img-inner">
              <div className="absolute inset-0 z-0 bg-black">
                {phoneScreens.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={clsx(
                      "absolute w-full h-full object-contain transition-opacity duration-700",
                      index !== currentPhoneScreen && "opacity-0"
                    )}
                    style={{
                      objectPosition: "10px -12px",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="phone-mockup-shadow"></div>
          </motion.div>
          <LandingPhoneControls />
        </motion.div>
      </div>
      <LandingPhoneContent />
    </>
  );
}
