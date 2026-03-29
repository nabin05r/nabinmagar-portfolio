import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react/jsx-runtime";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Maintainable",
  "SEO Optimized",
  "Responsive",
  "User-Friendly",
  "Headless",
  "Mobile First",
  "Fast Loading",
  "Custom Built",
];

export const TapeSection = () => {
  return (
    <div className="pb-12 lg:pb-24 overflow-x-clip">
      <div className="bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
