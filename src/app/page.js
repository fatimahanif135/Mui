import Image from "next/image";

import NavBar from "../../component/NavBar";
import HeroSection from "../../component/HeroSection";
import { Container } from "@mui/material";
import CakeSection from "../../component/CakeSection";
import ContactUs from "../../component/ContactUs";



export default function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <CakeSection/>
      
      <Container>
     

      <ContactUs/>
      </Container>

      
    </div>
  );
}





