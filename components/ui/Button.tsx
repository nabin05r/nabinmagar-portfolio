"use client";
import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { useButtonAnimation } from "@/app/hooks/useButtonAnimation";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

type ButtonProps = ComponentPropsWithoutRef<"div"> & {
  href?: string;
  label: string;
  icon?: boolean;
  target?: string;
  variant?: "light" | "dark";
};

export const Button = ({
  href,
  label,
  target,
  variant = "light",
  icon = false,
  className,
  ...other
}: ButtonProps) => {

  const { circle, manageMouseEnter, manageMouseLeave } = useButtonAnimation();

  const content = (
    <div
      className={`roundedButton ${variant == "dark" ? "roundedButton-dark" : ""} ${className || ""}`}
      {...other}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
    >
      {label && <p>{label}</p>}
      {icon && (
        <ArrowUpRightIcon
          className="size-4 relative z-[1]"
          style={{ mixBlendMode: "difference" }}
        />
      )}
      <div ref={circle} className="circle" />
    </div>
  );

  // renders as Link if href provided, plain div if not
  return href ? (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  ) : (
    content
  );
};
