import { ReactLenis } from "@studio-freight/react-lenis";
import { animate, stagger, useMotionValue } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useStore } from "screens/LandingView/store/store";
import { MintContent } from "./MintContent";
import { MintHeader } from "./MintHeader";
import { MintImages } from "./MintImages";
import { useMintStore } from "./store/store";
import "./styles.css";
import { useImgPreloader } from "hooks/useImagePreload";
import { mintImages } from "screens/LandingView/constants";

export function Mint() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { isExpanded, setState, resetState: resetMintState } = useMintStore();
  const { isMintPageOpen } = useStore();

  const mintProgress = useMotionValue(0);

  const { imgsPreloaded } = useImgPreloader(mintImages);

  useEffect(() => {
    if (imgsPreloaded) {
      animate(
        ".mint-sticker",
        {
          scale: [0, 1],
        },
        {
          delay: stagger(0.1),
        }
      );
    }
  }, [imgsPreloaded]);

  useEffect(() => {
    if (!isMintPageOpen || !imgsPreloaded) return;

    setTimeout(() => {
      setState({ isExpanded: true });
    }, 1000);
  }, [isMintPageOpen, setState, imgsPreloaded]);

  useEffect(() => {
    animate(mintProgress, isExpanded ? 1 : 0);
  }, [isExpanded, mintProgress]);

  useLayoutEffect(() => {
    return () => {
      resetMintState();
    };
  }, [resetMintState]);

  useEffect(() => {
    containerRef.current = document.getElementById("mint-view");
  }, []);

  return (
    <ReactLenis className="max-h-full overflow-auto" id="mint-view">
      <MintHeader />
      <div className="sticky top-0 w-full h-screen z-10">
        <MintContent mintProgress={mintProgress} />
        <MintImages mintProgress={mintProgress} />
      </div>
    </ReactLenis>
  );
}
