import Form from "./Contactpage/Form"
import Footer from "@/components/footer/Footer"
import PagesBanner from "@/components/pagesBanner/PagesBanner"
import { Toaster } from "react-hot-toast";


const Contact = () => {
  return (
    <>
    
    <PagesBanner headingTitle={"Contact Us"}/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact;
