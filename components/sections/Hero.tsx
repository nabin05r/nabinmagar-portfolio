import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.webp";
import { HeroOrbit } from "../ui/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { FramerMagnetic } from "../ui/FramerMagnetic";
import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/** Blob glowing bg */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"
          style={{ animation: "blob-float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px]"
          style={{ animation: "blob-float 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]"
          style={{ animation: "blob-float 9s ease-in-out infinite 4s" }}
        />

        <div
          className="absolute inset-0 -z-40 opacity-5"
          style={{
            background: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* orbitSpinDuration?: number;
              shouldOrbitSpin?: boolean;
              starSpinDuration?: number;
              shouldStarSpin?:boolean; */}
        <HeroOrbit
          size={430}
          rotate={-14}
          shouldOrbitSpin
          orbitSpinDuration={30}
          shouldStarSpin
          starSpinDuration={3}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotate={79}
          shouldOrbitSpin
          orbitSpinDuration={32}
          shouldStarSpin
          starSpinDuration={3}
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotate={-41}
          shouldOrbitSpin
          orbitSpinDuration={34}
        >
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotate={178}
          shouldOrbitSpin
          orbitSpinDuration={36}
          shouldStarSpin
          starSpinDuration={3}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotate={20}
          shouldOrbitSpin
          orbitSpinDuration={38}
          shouldStarSpin
          starSpinDuration={6}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotate={98}
          shouldOrbitSpin
          orbitSpinDuration={40}
          shouldStarSpin
          starSpinDuration={6}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotate={-5}
          shouldOrbitSpin
          orbitSpinDuration={42}
        >
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotate={144}
          shouldOrbitSpin
          orbitSpinDuration={44}
          shouldStarSpin
          starSpinDuration={3}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotate={85}
          shouldOrbitSpin
          orbitSpinDuration={46}
        >
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotate={-72}
          shouldOrbitSpin
          orbitSpinDuration={48}
          shouldStarSpin
          starSpinDuration={6}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="NGM" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Open to Full-Time Opportunities
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="text-center font-display text-3xl md:text-5xl mt-8 tracking-wide leading-10 md:leading-15">
            Crafting Exceptional WordPress Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I build fast, scalable WordPress experiences — from custom themes
            and plugins to headless Next.js architectures.
          </p>
          <div className=" mt-8 lg:mt-12 max-w-xs md:max-w-sm mx-auto">
            <FramerMagnetic>
              <Button
                label="Let's Connect"
                className="!w-auto"
                href="/contact"
              />
            </FramerMagnetic>
          </div>
        </div>
      </div>
    </div>
  );
};
