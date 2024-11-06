import { useText } from "hooks/useText";
import { Images } from "../images";
import "./styles.css";

export function BentoCreation() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[3];

  return (
    <div className="bento-card top-44 md:top-0 bg-joy rounded-[2.5rem] text-joy-dark">
      <div className="max-w-[14rem]">
        <h3 className="bento-card-headline font-heading">{text[0]}</h3>
        <p className="text-xl leading-[1.3] sm:text-lg">{text[1]}</p>
        <div className="bento-card-creation">
          <div className="creation-ui">
            <img
              src={Images.Creation1}
              loading="eager"
              alt=""
              className="creation-ui-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
