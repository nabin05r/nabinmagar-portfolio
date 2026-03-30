"use client";
import Image from "next/image";
import NgmPhoto from "@/assets/images/nabinmagar-cloud.jpeg";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import { useState } from "react";
import { FramerMagnetic } from "@/components/ui/FramerMagnetic";
import { Button } from "@/components/ui/Button";
import { FooterLinks } from "@/components/ui/FooterLinks";
import { GrainImagePage } from "@/components/ui/GrainImagePage";

const formFields = [
  {
    id: 1,
    label: "What's your name?",
    placeholder: "Nabin Gharti Magar *",
    type: "text",
    name: "name",
  },
  {
    id: 2,
    label: "What's your email?",
    placeholder: "nabin@example.com *",
    type: "email",
    name: "email",
  },
  {
    id: 3,
    label: "What's the name of your organization?",
    placeholder: "Company Name ®",
    type: "text",
    name: "organization",
  },
  {
    id: 4,
    label: "What services are you looking for?",
    placeholder: "WordPress, Headless CMS, Next.js ...",
    type: "text",
    name: "services",
  },
  {
    id: 5,
    label: "Your message",
    placeholder: "Hello Nabin, can you help me with ... *",
    type: "textarea",
    name: "message",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in required fields');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://admin.nabinmagar.com/wp-json/contact/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', services: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="relative">
      <GrainImagePage />
      <section className="pt-30 pb-30 md:pt-[calc(clamp(5em,21vh,12em)*1.33)] md:pb-[calc(clamp(5em,21vh,12em)*1.33)]">
        <div className="container-medium ">
          {/* Header */}
          <div className="flex items-end justify-between flex-col md:flex-row md:gap-5 lg:gap-20">
            <div className="w-full lg:w-[75%]">
              {/* For Desktop */}
              <h1 className="ngm-h1 font-display leading-[1.1] tracking-wide max-w-4xl hidden md:block">
                {/* Let&apos;s start a project together */}
                Let&apos;s start creating together
              </h1>
              {/* For Mobile & Tab  */}
              <ArrowDownIcon className="size-6 text-white rotate-45 md:hidden ml-auto mb-7" />
              <h1
                className="leading-[1.1] font-display tracking-widest md:hidden"
                style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * 0.820)" }}
              >
                <span>
                  <Image
                    src={NgmPhoto}
                    alt="Nabin Gharti Magar"
                    className="rounded-full object-cover size-10 md:size-12 inline-flex mr-3 -translate-y-1"
                  />
                  Let&apos;s start a
                </span>
                <span> project together</span>
              </h1>
            </div>
            <div className="w-full md:w-[25%] flex flex-col gap-16 relative hidden md:block">
              <Image
                src={NgmPhoto}
                alt="Nabin Gharti Magar"
                className="rounded-full object-cover w-[clamp(4.5em,6.5vw,8em)] h-[clamp(4.5em,6.5vw,8em)] -mb-3"
              />
              <ArrowDownIcon className="size-7 text-white -rotate-45 absolute md:top-30 lg:top-50" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-20 flex-col md:flex-row mt-18 md:mt-40 lg:mt-50">
            {/* Form — left */}
            <div className="flex-1 w-full md:w-[70%] lg:w-[75%] order-2 md:order-1">
              {formFields.map((field) => (
                <div key={field.id} className="border-t border-white/15 py-10">
                  <div className="flex gap-4 md:gap-8">
                    <span className="text-white/30 text-[11px] md:text-sm mt-1">
                      {String(field.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <label className="text-white text-lg md:text-xl block mb-0 md:mb-3">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          rows={8}
                          className="w-full bg-transparent text-white/40 placeholder:text-white/40 text-base md:text-lg outline-none resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full bg-transparent pt-2 text-white/40 placeholder:text-white/40 text-base md:text-lg outline-none"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Border bottom */}
              <div className="border-t border-white/15 relative w-[65%] md:w-[80%]">
                {/* Send Button */}
                <div className="absolute -right-8 translate-x-1/2 -translate-y-1/2  z-10">
                  <FramerMagnetic>
                    <Button 
                        label={status === 'sending' ? 'Sending...' : 'Send it!'} 
                        className="send-btn"
                        onClick={handleSubmit} 
                     />
                  </FramerMagnetic>
                </div>
              </div>
              {/* Status Messages */}
                {status === 'success' && (
                <p className="text-emerald-400 mt-16 text-sm">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                </p>
                )}
                {status === 'error' && (
                <p className="text-red-400 mt-16 text-sm">
                    Something went wrong. Please try again or email me directly.
                </p>
                )}
            </div>

            {/* Contact Details — right */}
            <div className="w-full md:w-[30%] lg:w-[25%] flex flex-col gap-10 order-1 md:order-2">
              <div>
                <p className="uppercase text-[11px] text-white/40 tracking-widest mb-3">
                  Contact Details
                </p>
                <div className="flex flex-col gap-3">
                  <FramerMagnetic>
                    <a
                      href="mailto:nabin.magar05r@gmail.com"
                      className="text-white text-base font-light btn-link-bottom-bar w-fit"
                    >
                      nabin.magar05r@gmail.com
                    </a>
                  </FramerMagnetic>
                  <FramerMagnetic>
                    <a
                      href="tel:+9779843527378"
                      className="text-white text-base font-light btn-link-bottom-bar w-fit"
                    >
                      +977 9843527378
                    </a>
                  </FramerMagnetic>
                </div>
              </div>

              <div>
                <p className="uppercase text-[11px] text-white/40 tracking-widest mb-3">
                  Details
                </p>
                <div className="flex flex-col gap-3 text-white text-base font-light">
                  <p>Nabin Gharti Magar</p>
                  <p>Full Stack WordPress Developer</p>
                  <p>Location: Kathmandu, Nepal</p>
                </div>
              </div>

              <div>
                <p className="uppercase text-[11px] text-white/40 tracking-widest mb-3">
                  Socials
                </p>
                <div className="flex flex-col gap-3">
                  <FooterLinks className="!font-light text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
