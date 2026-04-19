import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export const metadata = {
  title: "About | Subham Sabat",
  description: "Learn more about Subham Sabat, a Software Engineer with 2+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}
