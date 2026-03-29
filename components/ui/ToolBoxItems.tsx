import { Fragment } from "react/jsx-runtime";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[],
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
     ${className}`}
     >
      <div className={`flex flex-none py-0.5 gap-6 pr-6 ${itemsWrapperClassName}`}>
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-white/20 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
          </Fragment>
        ))}
        
      </div>
    </div>
  );
};
