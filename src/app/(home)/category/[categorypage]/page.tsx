"use client";
import React from 'react'
import PagesBanner from "@/components/pagesBanner/PagesBanner"
import Categorycards from "@/allPages/Category/catergory"

const page = () => {
  
  return (
    <>
    <PagesBanner headingTitle={"Category"} />
    <Categorycards/>
  </>
  )
}

export default page
