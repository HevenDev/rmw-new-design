import Choose from "./aboutPage/Choose";
import Experts from "./aboutPage/Experts";
import Work from "./Homepage/Work";
import Stratagies from "./aboutPage/Stratagies";
import AboutFirst from "./aboutPage/AboutFirst";
import Award from "./aboutPage/Award";
import Awards from "./Homepage/Awards";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


const About = () => {
    return(
        <>
        <Header/>
        <AboutFirst/>
        <Stratagies/>
        <Award/>
        <Awards/>
        <Experts/>
        <Work/>
        <Choose/>
        <Footer/>
        </>
    )
}

export default About;