import { useWindowSize } from "@uidotdev/usehooks";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useWillChange,
} from "framer-motion";
import { useText } from "hooks/useText";
import { useEffect, useRef } from "react";
import { useStore } from "screens/LandingView/store/store";

export function LandingPhoneContent() {
  const currentPhoneScreen = useStore((state) => state.currentPhoneScreen);
  const { height } = useWindowSize();
  const windowHeight = height ?? 0;
  const offsetY1 = windowHeight * 0.4;
  const offsetY2 = windowHeight * 0.45;

  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.getElementById("landing-view");
  }, []);

  const { scrollY } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  const opacity1 = useTransform(
    scrollY,
    [offsetY1, (windowHeight / 2 + offsetY1) / 2],
    [0, 1]
  );
  const opacity2 = useTransform(
    scrollY,
    [offsetY2, (windowHeight / 2 + offsetY2) / 2],
    [0, 1]
  );
  const willChange = useWillChange();

  const phone = useText("phone");

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen pointer-events-none">
      <div className="relative w-full max-w-[85rem] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center h-screen pt-[9vh] gap-6 w-full sm:grid sm:h-auto sm:grid-cols-12 sm:gap-8 sm:pt-0 sm:pb-0">
          <motion.div
            className="phone-mockup-content-heading font-bold text-3xl leading-none pointer-events-auto font-heading text-center sm:text-left sm:text-4xl md:text-5xl lg:text-4rem"
            style={{ opacity: opacity1, willChange }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 0, x: 0 }}
                className="line-clamp-2 drop-shadow-sm sm:drop-shadow-none sm:line-clamp-5"
                key={`${currentPhoneScreen}-heading`}
                style={{ willChange }}
              >
                {phone[currentPhoneScreen].heading}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="phone-mockup-content-text mt-[60vh] self-center mb-4 font-medium text-lg leading-[1.3] pointer-events-auto text-center sm:mt-0 sm:text-left lg:text-2xl"
            style={{ opacity: opacity2 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="line-clamp-6 drop-shadow-sm sm:drop-shadow-none"
                key={`${currentPhoneScreen}-text`}
                style={{ willChange }}
              >
                {phone[currentPhoneScreen].text}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
