import { MotionValue } from "framer-motion";
import { MintImage } from "./MintImage";

interface MintImagesProps {
  mintProgress: MotionValue<number>;
}

export function MintImages({ mintProgress }: MintImagesProps) {
  return (
    <div className="absolute top-0 flex justify-center items-center w-full h-screen overflow-hidden pointer-events-none">
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img07.jpg")}
        toX={"-5vw"}
        toY={"37vh"}
        parallaxLayer={2}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img06.jpg")}
        toX={"32vw"}
        toY={"16vh"}
        parallaxLayer={2}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img05.jpg")}
        toX={"-41vw"}
        toY={"25vh"}
        parallaxLayer={1}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img04.jpg")}
        toX={"35vw"}
        toY={"-22vh"}
        parallaxLayer={1}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img03.jpg")}
        toX={"-47vw"}
        toY={"-11vh"}
        parallaxLayer={2}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img02.jpg")}
        toX={"10vw"}
        toY={"-44vh"}
        parallaxLayer={2}
      />
      <MintImage
        scrollYProgress={mintProgress}
        src={require("./assets/img01.jpg")}
        toX={"-29vw"}
        toY={"-34vh"}
        defaultShadowOpacity={1}
        parallaxLayer={1}
      />
    </div>
  );
}
