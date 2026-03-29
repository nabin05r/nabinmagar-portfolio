import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotate,
  orbitSpinDuration,
  shouldOrbitSpin = false,
  shouldStarSpin = false,
  starSpinDuration
}: PropsWithChildren<{
  size: number;
  rotate: number;
  orbitSpinDuration?: number;
  shouldOrbitSpin?: boolean;
  starSpinDuration?: number;
  shouldStarSpin?:boolean;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={shouldOrbitSpin ? "animate-spin" : ""}
        style={shouldOrbitSpin ? { animationDuration: `${orbitSpinDuration}s` } : {}}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            rotate: `${rotate}deg`,
          }}
        >
          <div className={shouldStarSpin ? "animate-spin" : ""} style={
            shouldStarSpin ? { animationDuration: `${starSpinDuration}s`} : {}}
          >
            <div
              className="inline-flex"
              style={{
                rotate: `${rotate * -1}deg`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
