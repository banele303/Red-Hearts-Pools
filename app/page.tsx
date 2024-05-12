import Image from "next/image";
import Navbar from "./components/navbar";
import HomeHero from "./components/home-hero";
import Footer from "./components/footer";
import AllPoolServices from "./components/all-poolservices";
import { ResidentialandCommecial } from "./components/residential-cleaning";
import CallToAction from "./components/call-toaction";

export default function Home() {
  return (
    
<div>
  <Navbar/>
  <HomeHero/>
  <CallToAction/>
  <AllPoolServices/>
  <ResidentialandCommecial/>
  <Footer/>
</div>
  );
}
