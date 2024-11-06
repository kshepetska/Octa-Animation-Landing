import { useEffect } from "react";
import { Sticker } from "./Sticker";
import { animate, stagger } from "framer-motion";

export function LandingHeroStickers() {
  useEffect(() => {
    animate(
      ".sticker-img",
      {
        scale: [0, 1],
      },
      {
        delay: stagger(0.1),
      }
    );
  }, []);

  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-screen overflow-hidden">
      <Sticker
        id={1}
        src={require("./assets/sticker01.png")}
        toX="-21vw"
        toY="-33vh"
        fromRotateZ="-20deg"
        toRotateZ="-40deg"
      />
      <Sticker
        id={2}
        src={require("./assets/sticker02.png")}
        parallaxLayer={2}
        toX="-13vw"
        toY="0vh"
        fromRotateZ="31deg"
        toRotateZ="0deg"
      />
      <Sticker
        id={3}
        src={require("./assets/sticker03.png")}
        toX="-31vw"
        toY="27vh"
        fromRotateZ="-20deg"
        toRotateZ="-48deg"
      />
      <Sticker
        id={4}
        src={require("./assets/sticker04.png")}
        parallaxLayer={2}
        toX="10vw"
        toY="-30vh"
        fromRotateZ="-37deg"
        toRotateZ="0deg"
      />
      <Sticker
        id={5}
        src={require("./assets/sticker05.png")}
        toX="16vw"
        toY="2vh"
        fromRotateZ="-18deg"
        toRotateZ="18deg"
      />
      <Sticker
        id={6}
        src={require("./assets/sticker06.png")}
        parallaxLayer={2}
        toX="15vw"
        toY="10vh"
        fromRotateZ="12deg"
        toRotateZ="37deg"
      />
      <Sticker
        id={7}
        src={require("./assets/sticker07.png")}
        toX="30vw"
        toY="28vh"
        fromRotateZ="-20deg"
        toRotateZ="4deg"
      />
      <Sticker
        id={8}
        src={require("./assets/sticker08.png")}
        toX="-30vw"
        toY="28vh"
        parallaxLayer={2}
        fromRotateZ="-20deg"
        toRotateZ="4deg"
      />
      <Sticker
        id={9}
        src={require("./assets/sticker09.png")}
        toX="30vw"
        toY="28vh"
        fromRotateZ="20deg"
        toRotateZ="4deg"
      />
    </div>
  );
}
