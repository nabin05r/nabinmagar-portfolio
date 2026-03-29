import Image from "next/image";
import NgmPhoto from "@/assets/images/nabinmagar-sticker.png";
import { Card } from "../ui/Card";
export const WhoIAm = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <Card className="px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="col-span-2 order-2 lg:order1">
            <div className="flex justify-center w-fit">
              <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                Code by Nabin
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-6">
              Know Who I Am
            </h2>
            <p className=" text-white/90 mt-4 md:text-lg lg:text-xl max-w-md">
              My journey in few words
            </p>
            <p className="text-white/60 mt-4 md:text-lg lg:text-xl">
              I’ve designed multiple web & mobile experiences for
              multi-cross-platform devices from TV to Ipads, etc. I’ve worked
              with small agencies and also with medium-sized companies. I
              previously worked with one of India’s largest Ed-Tech startups,
              Toppr which later got acquired by Byjus. Currently I&apos;m
              designing aesthetic and functional solutions for smallcase within
              the invest team, to enhance financial accessibility and
              understanding for Indian users.
            </p>
          </div>
          <div className="col-span-1 order-1 lg:order-2">
            <div>
              <Image
                src={NgmPhoto}
                alt="NGMPHOTO"
                className="rotate-10 w-50 h-full lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
        </Card>
      </div>
    </section>
  );
};
