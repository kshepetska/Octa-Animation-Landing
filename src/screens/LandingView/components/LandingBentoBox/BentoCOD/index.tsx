import { useText } from "hooks/useText";
import { Images } from "../images";
import "./styles.css";

export function BentoCOD() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[0];

  return (
    <div className="bento-card top-32 md:top-0 bg-creativity rounded-[2.5rem] text-creativity-dark">
      <div className="h-full flex flex-col justify-start md:justify-between">
        <h3 className="bento-card-headline font-heading">{text[0]}</h3>
        <p className="text-xl leading-[1.3] sm:text-lg">{text[1]}</p>
        <div className="absolute top-auto bottom-8 left-0 right-0 h-[60%] sm:top-32 sm:bottom-32">
          <img
            src={Images.COD1}
            loading="eager"
            alt=""
            className="cod-card _01"
          />
          <img
            src={Images.COD2}
            loading="eager"
            alt=""
            className="cod-card _02"
          />
          <div className="cod-ui">
            <img
              src={Images.COD3}
              loading="eager"
              data-w-id="29d179d6-c5a4-f358-2697-2113b2bd448e"
              alt=""
              className="cod-ui-img"
            />
            <div className="cod-ui-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
