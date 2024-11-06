import { useText } from "hooks/useText";
import { Images } from "../images";
import "./styles.css";

export function BentoPlanningCODs() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[5];

  return (
    <div className="bento-card top-32 md:top-0 bg-heart rounded-[2.5rem] text-heart-dark">
      <div className="max-w-[14rem]">
        <h3 className="bento-card-headline font-heading">{text[0]}</h3>
        <p className="text-xl leading-[1.3] sm:text-lg">{text[1]}</p>
        <div className="planning-cods">
          <img
            src={Images.PlaningCODs1}
            loading="eager"
            data-w-id="58a8bb5f-700c-e91d-4980-db9e4fbe9c88"
            alt=""
            className="planning-cods-ui"
          />
        </div>
      </div>
    </div>
  );
}
