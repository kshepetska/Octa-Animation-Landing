import { useLenis } from "@studio-freight/react-lenis";
import { animate, motion, stagger } from "framer-motion";
import { useLockedScroll } from "hooks/useLockedScroll";
import { useEffect } from "react";
import { Button } from "ui-kit/Button";
import { useMintStore } from "../store/store";
import { MintPhone } from "../MintPhone";
import { useText } from "hooks/useText";

export function MintSuccessful() {
  const lenis = useLenis();
  const { setState, resetState } = useMintStore();

  useLockedScroll(true, "mint-view");

  useEffect(() => {
    if (!lenis || lenis.isStopped) return;

    lenis.stop();
  }, [lenis]);

  useEffect(() => {
    animate(
      ".mint-sticker",
      {
        scale: [1, 0],
      },
      {
        delay: stagger(0.1),
      }
    );

    return () => {
      const el = document.querySelector(".mint-sticker");

      if (!el) return;

      animate(
        ".mint-sticker",
        {
          scale: [0, 1],
        },
        {
          delay: stagger(0.1),
        }
      );
    };
  }, []);

  const handleMintMore = () => {
    resetState();

    const stickers = document.querySelectorAll(".mint-sticker");

    setTimeout(() => {
      setState({
        isExpanded: true,
      });
    }, stickers.length * 200);
  };

  const mintPage = useText("mintPage");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="w-auto mx-auto"
      >
        <div className="flex flex-col items-center gap-4 -translate-y-[calc(40vh-100%)]">
          <h2 className="font-heading text-5xl md:text-[6rem] text-center">
            {mintPage.congrats}
          </h2>
          <Button
            className="w-full max-w-[273px] text-[24px]"
            onClick={handleMintMore}
          >
            {mintPage.mintMore}
          </Button>
        </div>
      </motion.div>
      <MintPhone />
    </>
  );
}
