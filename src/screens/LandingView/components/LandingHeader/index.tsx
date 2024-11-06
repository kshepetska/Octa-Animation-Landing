import { Icons } from "ui-kit/Icons";

export function LandingHeader() {
  return (
    <header className="fixed left-0 w-full pt-2 px-6 md:pt-6 md:px-10 z-10">
      <div className="flex justify-between items-center w-full">
        <a
          href="/"
          className="w-full max-w-[7.5rem] text-nav-text"
        >
          <Icons.Logo />
        </a>
      </div>
    </header>
  );
}
