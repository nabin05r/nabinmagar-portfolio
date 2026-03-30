"use client";
import { useEffect, useState } from "react";
import { FooterLinks } from "../ui/FooterLinks";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const kathmandu = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTime(kathmandu);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // ← updates every second
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-0 px-4 md:px-10 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="border-t border-white/15 hidden md:block" />
      <div className="py-8 text-sm flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
        <div className="order-2 md:order-1 w-full">
          <div className="border-t border-white/15 mb-8 md:hidden" />
          <div className="flex gap-15 justify-between md:justify-start">
            <div>
              <p className="text-white/50 mb-4 uppercase text-[10px] tracking-widest">Location</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <div className="">
            <p className="text-white/50 mb-4 uppercase text-[10px] tracking-widest">Local Time</p>
              <p>{time} UTC+5:45</p> {/* ← live time */}
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-white/50 mb-4 uppercase text-[10px] tracking-widest">Socials</p>
          <nav className="flex flex-row items-center gap-8">
            <FooterLinks />
          </nav>
        </div>
      </div>
    </footer>
  );
};
