import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Nabin Gharti Magar",
  description: "Get in touch with Nabin Gharti Magar for WordPress development, headless Next.js projects, or full-time opportunities.",
};

export default function ContactPage() {
  return <ContactClient />;
}