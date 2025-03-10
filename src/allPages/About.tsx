import Choose from "./aboutPage/Choose";
import Experts from "./aboutPage/Experts";
import Work from "./Homepage/Work";
import Stratagies from "./aboutPage/Stratagies";
import AboutFirst from "./aboutPage/AboutFirst";
import Awards from "./Homepage/Awards";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Swiper1 from "./aboutPage/Swiper1";
import Swiper2 from "./aboutPage/Swiper2";

const About = () => {
    return(
        <>
        <Header/>
        <AboutFirst/>
        <Stratagies/>
        <Awards/>
        <Swiper1/>
        <Swiper2/>
        <Experts/>
        <Work/>
        <Choose/>
        <Footer/>
        </>
    )
}

export default About;