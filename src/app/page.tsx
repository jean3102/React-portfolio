"use client"
import React, { useEffect } from "react"
import HeroSection from "@/modules/HeroSection/HeroSection"
import SkillsSection from "@/modules/SkillsSection/SkillsSection"
import ProjectsSection from "@/modules/ProjectsSection/ProjectsSection"
import AOS from "aos"
import "aos/dist/aos.css"

const page = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  )
}

export default page