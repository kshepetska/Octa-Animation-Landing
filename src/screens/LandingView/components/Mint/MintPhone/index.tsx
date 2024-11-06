import clsx from "clsx";
import { motion } from "framer-motion";
import smartphone from "../../../assets/smartphone1.png";
import phoneScreen from "../../../assets/mintPhoneScreen.png";
import { ButtonLink } from "ui-kit/Button/Link";
import { useText } from "hooks/useText";
import { useImgPreloader } from "hooks/useImagePreload";

export function MintPhone() {
  const { viewInDApp } = useText("mintPage");

  const { imgsPreloaded } = useImgPreloader([smartphone, phoneScreen]);

  return (
    <>
      <motion.div
        initial={{ x: "-50%", y: "100vh" }}
        animate={imgsPreloaded ? { x: "-50%", y: "35vh" } : {}}
        exit={{ x: "-50%", y: "100vh" }}
        transition={{ duration: 0.5 }}
        key="mint-phone"
        className="absolute bottom-0 left-1/2 flex justify-center items-center z-10 h-[83vh]"
      >
        <div className="relative flex justify-center items-center z-10 w-[80vw] sm:w-[50vw] lg:w-[31.25rem] max-w-[325px]">
          <img
            src={smartphone}
            alt=""
            className="relative w-full max-w-full align-middle z-10"
          />
          <div className="phone-mockup-img-inner" style={{ maxHeight: "none" }}>
            <div className="absolute inset-0 z-0 bg-black">
              <img
                key={phoneScreen}
                src={phoneScreen}
                alt=""
                className={clsx("absolute w-full h-full object-contain")}
                style={{
                  objectPosition: "10px -12px",
                }}
              />
            </div>
          </div>
          <div className="phone-mockup-shadow"></div>
        </div>
        <div className="absolute bottom-10 z-20 -translate-y-[35vh]">
          <ButtonLink
            href={viewInDApp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-w-[200px] text-center font-bold backdrop-blur-[2px] uppercase"
            style={{ background: "rgba(0, 0, 0, 0.4)" }}
          >
            {viewInDApp.text}
          </ButtonLink>
        </div>
      </motion.div>
    </>
  );
}
