import { useText } from "hooks/useText";
import { Images } from "../images";
import "./styles.css";

export function BentoMarketPlace() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[1];

  return (
    <div className="bento-card top-36 justify-start bg-passion rounded-[2.5rem] text-passion-dark md:top-0 md:justify-end">
      <div className="max-w-full md:max-w-[18rem]">
        <h3 className="bento-card-headline font-heading">
          {text[0]}
        </h3>
        <p className="text-xl leading-[1.3] sm:text-lg">
          {text[1]}
        </p>
        <div className="absolute h-[55%] top-auto bottom-8 left-0 right-0 sm:bottom-0 sm:top-1/3 sm:left-[8.8rem] sm:right-[4.7rem] md:-top-[10%] md:left-[23%] md:right-[13%] lg:top-0 lg:left-1/2 lg:right-0">
          <img
            src={Images.MarketPlace1}
            loading="eager"
            alt=""
            className="market-place-card"
          />
          <img
            src={Images.MarketPlace2}
            loading="eager"
            alt=""
            className="market-place-ui"
          />
        </div>
      </div>
    </div>
  );
}
