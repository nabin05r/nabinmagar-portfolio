import grainImage from "@/assets/images/grain.webp";
import { Button } from "../ui/Button";
import { FramerMagnetic } from "../ui/FramerMagnetic";

export const ContactSection = ({ containerClass }: { containerClass: string }) => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className={containerClass}>
        <div
          className="bg-linear-to-r from-emerald-300 to-sky-400 text-gray-950 px-10 py-8 text-center md:text-left rounded-3xl relative z-10 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
            <div>
              <h2 className=" font-display text-2xl md:text-3xl relative">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 max-w-2xl">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <div className="button">
                <FramerMagnetic>
              <Button
                label="Contact"
                href="/contact"
                variant="dark"
              />
              </FramerMagnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
