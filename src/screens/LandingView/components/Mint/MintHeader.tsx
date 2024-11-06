import { useWeb3React } from "@web3-react/core";
import { useText } from "hooks/useText";
import { useMemo } from "react";
import { useStore } from "screens/LandingView/store/store";
import { Button } from "ui-kit/Button";
import { Icons } from "ui-kit/Icons";

export function MintHeader() {
  const [setIsMintPageOpen] = useStore((state) => [state.setIsMintPageOpen]);
  const { isActive, account } = useWeb3React();

  const shortAddress = useMemo(() => {
    if (!account) return "";

    return `${account.slice(0, 6)}...${account.slice(-4)}`;
  }, [account]);

  const mintPage = useText("mintPage");

  return (
    <header className="fixed left-0 w-full pt-2 px-6 md:pt-6 md:px-10 z-20">
      <div className="flex justify-between items-center w-full">
        <a
          href="/"
          className="flex w-full max-w-[7.5rem] text-nav-text"
        >
          <Icons.LogoCOD />
        </a>

        <div className="flex ml-auto gap-2 lg:gap-6">
          <Button
            hasIconOnly
            className="flex justify-center items-center w-[3.125rem] h-[3.125rem] lg:w-[50px] lg:h-[50px]"
            onClick={() => setIsMintPageOpen(false)}
          >
            <Icons.Close
              className="w-[36px] h-[36px] lg:w-auto lg:h-auto"
              color="white"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
