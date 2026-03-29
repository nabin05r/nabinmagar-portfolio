import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<'div'> & {
  grainOpacity?: number;  // ← new prop, defaults to 0.05
};

export const Card = ({
  className,
  children,
  grainOpacity = 0.05,  // ← default keeps all other sections unchanged
  ...other
}: CardProps) => {
  return (
    <div
      className={`bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-0 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none isolate
                 ${className || ""}
                 `}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          opacity: grainOpacity,  
        }}
      />
      {children}
    </div>
  );
};