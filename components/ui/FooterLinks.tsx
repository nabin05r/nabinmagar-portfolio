import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { FramerMagnetic } from "./FramerMagnetic";
const footerLinks = [
  {
    title: "Email",
    href: "mailto:nabin.magar05r@gmail.com",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nabin-magar-354879261/",
  },
  {
    title: "Github",
    href: "https://github.com/nabin05r",
  },
  {
    title: "Resume",
    href: "/Nabin-Gharti-Magar-Resume.pdf",
  },
];

export const FooterLinks = ({ className }:{className?: string}) => {
  return (
    <>
      {footerLinks.map((item) => (
        <FramerMagnetic key={item.title} max={5}>
          <a
            href={item.href}
            key={item.title}
            className={`inline-flex items-center gap-1.5`}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            <span className={`btn-link-bottom-bar ${className}`}>
              {item.title}
            </span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </FramerMagnetic>
      ))}
    </>
  );
};
