
import ContactUs from "@/components/costom/contctus";
import Features from "@/components/costom/Features";
import HeroSection from "@/components/costom/HeroSection";
import OurServices from "@/components/costom/Services";
import OurTools from "@/components/costom/tools";

export default function Home() {
  return (
    <section className=" w-full">
      <HeroSection/>
      <OurTools/>
      <Features/>
      <OurServices/>
      <ContactUs/>
    </section>
  );
}
