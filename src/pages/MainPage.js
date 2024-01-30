import HeroSection from "../components/HeroSection";
import SpecialsSection from "../components/SpecialsSection";
import { NavLink } from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection";
import AboutSection from "../components/AboutSection";


const MainPage = () => {
    return (<main>
        <HeroSection/>
        <SpecialsSection/>
        <TestimonialSection/>
        <AboutSection/>
    </main>);
}

export default MainPage;