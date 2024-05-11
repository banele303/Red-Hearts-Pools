import Image from "next/image";
import Navbar from "./components/navbar";
import HomeHero from "./components/home-hero";
import Footer from "./components/footer";
import AllPoolServices from "./components/all-poolservices";
import { ResidentialandCommecial } from "./components/residential-cleaning";

export default function Home() {
  return (
    
<div>
  <Navbar/>
  <HomeHero/>
  <AllPoolServices/>
  <ResidentialandCommecial/>
  <Footer/>
</div>
  );
}
