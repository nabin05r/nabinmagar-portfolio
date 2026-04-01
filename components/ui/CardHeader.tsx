import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({ title, description, className } : { title:string, description:string, className?: string }) => {
  return (
    <div className={`flex flex-col p-6 md:py-8 md:px-10 ${className}`}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300 card-header-star" />
        <h3 className="font-display text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base mt-2 md:mt-0 max-w-xs text-white/60">
        {description}
      </p>
    </div>
  );
};
