import { phoneScreens } from "screens/LandingView/constants";
import { Button } from "ui-kit/Button";
import { useStore } from "../../store/store";
import { Icons } from "ui-kit/Icons";
import { useText } from "hooks/useText";

export function LandingPhoneControls() {
  const [step, setPhoneScreen, setBgColor, setTextColor] = useStore((state) => [
    state.currentPhoneScreen,
    state.setPhoneScreen,
    state.setBgColor,
    state.setTextColor,
  ]);

  const phone = useText("phone");

  const handleSetStep = (newStep: number) => {
    if (newStep < 0 || newStep > phoneScreens.length - 1) return;
    setPhoneScreen(newStep);
    setBgColor(phone[newStep].bgColor);
    setTextColor(phone[newStep].textColor);
  };

  return (
    <div className="absolute bottom-1/2 translate-y-1/2 w-full grid auto-cols-auto grid-flow-col gap-2 p-1 justify-between items-center mx-auto rounded-full bg-transparent text-lg pointer-events-auto z-20 overflow-hidden sm:bottom-8 sm:translate-y-0 sm:w-auto sm:justify-center sm:bg-white">
      <Button
        className="flex justify-center items-center w-12 h-12 px-0 py-0"
        onClick={() => handleSetStep(step - 1)}
        disabled={step <= 0}
        hasIconOnly
      >
        <Icons.ArrowRight className="w-6 h-6 rotate-180" />
      </Button>
      <div
        className="hidden flex-col justify-start items-center text-center w-40 h-12 transition-transform sm:flex"
        style={{
          transform: `translateY(${step * -100}%)`,
        }}
      >
        {phone.map(({ name }: { name: string }) => (
          <p
            key={name}
            className="flex justify-center items-center w-full min-h-[3rem]"
          >
            {name}
          </p>
        ))}
      </div>
      <Button
        className="flex justify-center items-center w-12 h-12 px-0 py-0"
        disabled={step >= phoneScreens.length - 1}
        onClick={() => handleSetStep(step + 1)}
        hasIconOnly
      >
        <Icons.ArrowRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
