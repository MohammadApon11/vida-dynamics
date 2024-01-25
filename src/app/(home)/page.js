import SectionGap from "@/components/gap's/SectionGap";
import Completion from "./Completion";
import HomeHero from "./HomeHero";
import ContentGap from "@/components/gap's/ContentGap";
import Features from "./Features";
import About from "./About";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Completion />
      <div className="bg-[#f2f6ff]">
        <SectionGap bg="bg-[#f2f6ff]" />
        <ContentGap bg="bg-[#f2f6ff]" />
        <Features />
        {/* <ContentGap bg="bg-[#f2f6ff]" /> */}
        <SectionGap bg="bg-[#f2f6ff]" />
      </div>
      <About />
    </>
  );
}
