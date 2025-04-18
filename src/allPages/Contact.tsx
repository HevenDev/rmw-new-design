import Form from "./Contactpage/Form"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import PagesBanner from "@/components/pagesBanner/PagesBanner"


const Contact = () => {
  return (
    <>
    <Header/>
    <PagesBanner headingTitle={"Contact Us"}/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact;
