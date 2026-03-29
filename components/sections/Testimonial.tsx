import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Fragment } from "react/jsx-runtime";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Acme Corp",
    avatar: memojiAvatar1,
    testimonial:
      "NGM is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch.",
  },
  {
    id: 2,
    name: "John Doe",
    position: "CEO, Acme Corp",
    avatar: memojiAvatar2,
    testimonial:
      "NGM is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch.",
  },
  {
    id: 3,
    name: "John Doe",
    position: "CEO, Acme Corp",
    avatar: memojiAvatar3,
    testimonial:
      "NGM is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch.",
  },
  {
    id: 4,
    name: "John Doe",
    position: "CEO, Acme Corp",
    avatar: memojiAvatar4,
    testimonial:
      "NGM is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch.",
  },
  {
    id: 5,
    name: "John Doe",
    position: "CEO, Acme Corp",
    avatar: memojiAvatar5,
    testimonial:
      "NGM is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are top-notch.",
  },
];
export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 relative z-10">
      <div className="container">
        <SectionHeader
          subtitle="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just. take my word for it. See what my clients have to say about my work"
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip
           [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
           py-4
           "
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="max-w-xs md:max-w-md
                     p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-white/40">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.testimonial}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
