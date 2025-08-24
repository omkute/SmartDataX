
import ContactUs from "@/components/costom/contctus";
import Features from "@/components/costom/Features";
import HeroSection from "@/components/costom/HeroSection";
import IconSlider from "@/components/costom/iconSlide";
import OurServices from "@/components/costom/Services";
import Videosetion from "@/components/costom/videosetion";

export default function Home() {
  return (
    <section className=" w-full">
      <HeroSection/>
      <IconSlider/>
      {/* <AboutUsSection/> */}
      <Features/>
      <OurServices/>
      <Videosetion 
        src="/banner.mp4"
      />
      <ContactUs/>
    </section>
  );
}
