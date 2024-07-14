import React from "react"
import Section from "@/modules/Section/Section"
import style from "./ProjectsSection.module.scss"
import { projectsList } from "@/utils/projects"
import Card from "@/components/Card/Card"
import Image from "next/image"

interface Project {
  imagePath?: string
  title?: string
  description?: string
  tags?: string[]
  link?: string
  difficulty?: number
}

const ProjectsSection = () => {
  return (
    <Section id="проекты" className={style.projects}>
      <h1 data-aos="fade-up">Лучшие работы</h1>
      <ul className={style.projectsContainer}>
        {projectsList.map((project: Project, index) => <li key={index} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
          <Card {...project} />
        </li>)}
      </ul>
    </Section>
  )
}

export default ProjectsSection