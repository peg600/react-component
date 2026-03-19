import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: "default" | "primary";
}

export default function Button({
  variant = "default",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = ["cg-button", `cg-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
