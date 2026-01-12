import { Mail, MapPin, Linkedin, Github, Code, Cloud } from "lucide-react";
import { ContactInfo, SocialLink } from "@/types";

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "subhamsabat343@gmail.com",
    href: "mailto:subhamsabat343@gmail.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Berhampur, India",
    href: null,
    color: "from-purple-500 to-purple-600",
  },
];

export const contactSocialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subham-sabat-3540a6211",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/subhamsabat343",
  },
  {
    icon: Code,
    name: "LeetCode",
    href: "https://leetcode.com/u/subhamsabat343/",
  },
  {
    icon: Cloud,
    name: "Salesforce",
    href: "https://www.salesforce.com/trailblazer/subhamsabatxrf9na85i0o7",
  },
];
