import ProjectCards from "@/allPages/projectsPage/ProjectCards"
import ProjectMarque from "@/allPages/projectsPage/ProjectMarque"
import ProjectNumbers from "@/allPages/projectsPage/ProjectNumbers"
import Footer from "@/components/footer/Footer"
import PagesBanner from "@/components/pagesBanner/PagesBanner"



const page = () => {
  return (
    <>
      <PagesBanner headingTitle={"Our work"} bannerImages={"/bannerImages/Case_study_Rmw.jpg"}/>
      <ProjectCards />
      <ProjectMarque />
      <ProjectNumbers />
      <Footer />
    </>
  )
}

export default page
