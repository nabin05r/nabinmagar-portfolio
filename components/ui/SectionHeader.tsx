export const SectionHeader = ({
  subtitle,
  title,
  description,
}: {
  subtitle: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent text-center bg-clip-text">
          {subtitle}
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-lg mx-auto">
        {description}
      </p>
    </>
  );
};
