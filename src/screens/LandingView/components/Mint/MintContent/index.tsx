import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValueEvent,
  useTransform,
  useWillChange,
} from "framer-motion";
import { useState } from "react";
import { MintSuccessful } from "./MintSuccessful";
import { useMintStore } from "../store/store";
import { MintConfetti } from "./MintConfetti";
import { useText } from "hooks/useText";
import { useWeb3React } from "@web3-react/core";

interface MintContentProps {
  mintProgress: MotionValue<number>;
}

export function MintContent({ mintProgress }: MintContentProps) {
  const [counter, setCounter] = useState(4);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSuccessful, setMintState] = useMintStore((state) => [
    state.isSuccessful,
    state.setState,
  ]);
  const { isActive } = useWeb3React();

  useMotionValueEvent(mintProgress, "change", (latest) => {
    if (latest > 0.5) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  const mintContentOpacity = useTransform(mintProgress, [0.25, 1], [0, 1]);
  const mintContentScale = useTransform(mintProgress, [0.25, 1], [0.5, 1]);

  const handleCounterChange = (value: number) => {
    if (value < 1) return;

    setCounter(value);
  };

  const handleMint = () => {
    if (!isActive) return;

    // TODO: mint
    setMintState({
      isSuccessful: true,
    });
  };

  const willChange = useWillChange();

  const isStateNull = isSuccessful === null;

  const mintPage = useText("mintPage");

  return (
    <div className="absolute flex justify-center items-center w-full h-screen">
      <div className="w-full px-10">
        <AnimatePresence mode="wait">
          {isStateNull && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="mint-content"
            >
              <motion.div
                style={{
                  scale: mintContentScale,
                  opacity: mintContentOpacity,
                  pointerEvents: isDisabled ? "none" : "auto",
                  willChange,
                }}
                className="w-full text-center mx-auto"
              >
                <button
                  className="mint-btn"
                  disabled={!isActive}
                  onClick={handleMint}
                >
                  {mintPage.mintButton}
                </button>
                <div className="mint-counter">
                  <button
                    className="mint-counter-less"
                    aria-label="Less"
                    onClick={() => handleCounterChange(counter - 1)}
                  />
                  <div className="mint-counter-content">{counter}</div>
                  <button
                    className="mint-counter-more"
                    aria-label="More"
                    onClick={() => handleCounterChange(counter + 1)}
                  ></button>
                </div>
              </motion.div>
            </motion.div>
          )}
          {isSuccessful && (
            <>
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="mint-confetti"
                className="fixed top-0 left-0 bottom-0 right-0"
              >
                <MintConfetti />
              </motion.div>
              <MintSuccessful />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
