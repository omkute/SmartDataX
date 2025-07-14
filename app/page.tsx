
import Features from "@/components/costom/Features";
import HeroSection from "@/components/costom/HeroSection";
import OurServices from "@/components/costom/Services";

export default function Home() {
  return (
    <section className=" w-full">
      <HeroSection/>
      <Features/>
      <OurServices/>
    </section>
  );
}
