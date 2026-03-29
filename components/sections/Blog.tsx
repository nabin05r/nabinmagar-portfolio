import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";
import NgmPhoto from "@/assets/images/nabinmagar-sticker.png";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

export const Blog = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          subtitle="THOUGHTS AND BLOGS"
          title="Read My Narrative"
          description="Pages filled with design wisdom, imagination and much more"
        />
        <div className="flex justify-center items-center gap-10 mt-20 flex-col lg:flex-row">
          <Card className="px-10 py-10 card-hover hover:-translate-y-2 transition duration-300">
            <div >
              <div>

                  <Image
                    src={NgmPhoto}
                    alt="NGMPHOTO"
                    className="rotate-10 w-50 h-full lg:h-full"
                  />

              </div>
              <div className="">
                <div className="flex justify-center w-fit">
                  <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    12 Dec
                  </p>
                </div>
                <h3 className="font-display text-3xl  mt-6">
                  HeadLess WordPress
                </h3>
                <p className="text-white/60 mt-4 md:text-lg">
                  I’ve designed multiple web & mobile experiences for
                  multi-cross-platform devices from TV to Ipads, etc. I’ve
                  worked with small agencies and also with medium-sized
                  companies. 
                </p>
                <ArrowDownIcon className="arrow-down-icon text-white/60 mt-4 size-6" />
              </div>
            </div>
          </Card>
          <Card className="px-10 py-10 card-hover hover:-translate-y-2 transition duration-300">
            <div >
              <div>

                  <Image
                    src={NgmPhoto}
                    alt="NGMPHOTO"
                    className="rotate-10 w-50 h-full lg:h-full"
                  />

              </div>
              <div className="">
                <div className="flex justify-center w-fit">
                  <p className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    12 Dec
                  </p>
                </div>
                <h3 className="font-display text-3xl  mt-6">
                  HeadLess WordPress
                </h3>
                <p className="text-white/60 mt-4 md:text-lg">
                  I’ve designed multiple web & mobile experiences for
                  multi-cross-platform devices from TV to Ipads, etc. I’ve
                  worked with small agencies and also with medium-sized
                  companies. 
                </p>
                <ArrowDownIcon className="arrow-down-icon text-white/60 mt-4 size-6" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
