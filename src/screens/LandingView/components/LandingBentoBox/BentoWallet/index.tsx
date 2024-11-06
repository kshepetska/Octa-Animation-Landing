import { useText } from "hooks/useText";
import { Images } from "../images";
import "./styles.css";

export function BentoWallet() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[2];

  return (
    <div className="bento-card top-40 justify-start bg-balance rounded-[2.5rem] text-balance-dark md:top-0 md:justify-end">
      <div className="max-w-[14rem]">
        <h3 className="bento-card-headline font-heading">{text[0]}</h3>
        <p className="text-xl leading-[1.3] sm:text-lg">{text[1]}</p>
        <div className="bento-wallet">
          <img src={Images.Wallet1} alt="" className="wallet-cash" />
          <div className="wallet-cards-group">
            <img
              src={Images.Wallet2}
              loading="eager"
              alt=""
              className="wallet-card starbucks"
            />
            <img
              src={Images.Wallet3}
              loading="eager"
              alt=""
              className="wallet-card nike"
            />
            <img
              src={Images.Wallet4}
              loading="eager"
              alt=""
              className="wallet-card victoria"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
