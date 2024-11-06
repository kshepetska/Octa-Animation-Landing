import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";
import "./styles.css";
import { buttonVariants } from ".";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hasIconOnly?: boolean;
}

export function ButtonLink({
  children,
  className,
  hasIconOnly,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={clsx(
        buttonVariants.DEFAULT,
        hasIconOnly ? "p-0" : "px-10 py-4.5",
        className ? className : "text-lg"
      )}
      {...props}
    >
      <span className="block relative z-10">{children}</span>
    </a>
  );
}
