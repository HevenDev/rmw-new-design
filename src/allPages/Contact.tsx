import Form from "./Contactpage/Form"
import Footer from "@/components/footer/Footer"
import PagesBanner from "@/components/pagesBanner/PagesBanner"


const Contact = () => {
  return (
    <>
    <PagesBanner headingTitle={"Contact Us"} bannerImages={"/bannerImages/Contact_us_rmw.jpg"}/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact;
