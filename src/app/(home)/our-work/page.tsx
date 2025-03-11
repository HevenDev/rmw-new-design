import ProjectCards from "@/allPages/projectsPage/ProjectCards"
import ProjectMarque from "@/allPages/projectsPage/ProjectMarque"
import ProjectNumbers from "@/allPages/projectsPage/ProjectNumbers"

import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import PagesBanner from "@/components/pagesBanner/PagesBanner"


const page = () => {
  return (
    <>
      <Header />
      <PagesBanner />
      <ProjectCards />
      <ProjectMarque />
      <ProjectNumbers />
      <Footer />
    </>
  )
}

export default page
