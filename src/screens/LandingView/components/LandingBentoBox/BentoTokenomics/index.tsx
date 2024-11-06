import { useText } from 'hooks/useText';
import { Images } from '../images';
import './styles.css';

export function BentoTokenomics() {
  const bentoBox = useText("bentoBox");
  const text = Object.entries<string>(bentoBox.content)[4];

  return (
    <div className="bento-card top-48 justify-start bg-warmth rounded-[2.5rem] text-warmth-dark md:top-0 md:justify-end">
      <div className="max-w-[14rem]">
        <h3 className="bento-card-headline font-heading">{text[0]}</h3>
        <p className="text-xl leading-[1.3] sm:text-lg">{text[1]}</p>
        <div className="tokenomics-cards">
          <div className="tokenomics-grid">
            <div
              id="w-node-b42066c7-b1b3-1af4-9a5b-64e3af8660d3-5301c763"
              className="tokenomics-grid-col"
            >
              <img
                src={Images.Tokenomics1}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics2}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics3}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
            </div>
            <div
              id="w-node-_6047e465-556b-b842-4a51-7b14c8ce972f-5301c763"
              data-w-id="6047e465-556b-b842-4a51-7b14c8ce972f"
              className="tokenomics-grid-col"
            >
              <img
                src={Images.Tokenomics4}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics5}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics6}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics7}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
            </div>
            <div
              id="w-node-_2e1b33bf-bc9f-ecd7-92f5-20cca7f12fa7-5301c763"
              className="tokenomics-grid-col"
            >
              <img
                src={Images.Tokenomics8}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics9}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
              <img
                src={Images.Tokenomics10}
                loading="eager"
                alt=""
                className="tokenomics-card"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
