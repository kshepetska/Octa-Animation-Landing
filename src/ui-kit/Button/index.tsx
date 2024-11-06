import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIconOnly?: boolean;
}

export const buttonVariants = {
  DEFAULT: "btn-hover relative block rounded-full bg-nav-text text-nav-bg font-medium leading-none disabled:opacity-50 disabled:cursor-not-allowed outline-none",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  hasIconOnly,
  ...props
}, ref) => {
  return (
    <button
      className={clsx(
        buttonVariants.DEFAULT,
        hasIconOnly ? "p-0" : "px-10 py-4.5",
        className ? className : "text-lg"
      )}
      ref={ref}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </button>
  );
})
