"use client"
import React, { useState } from "react"
import Section from "@/modules/Section/Section"
import style from "./ProjectsSection.module.scss"
import { projectsList } from "@/utils/projects"
import Card from "@/components/Card/Card"
import Button from "@/components/Button/Button"
import { ArrowOutward } from "@/components/Icons/ArrowOutward"
import { GitHub } from "@/components/Icons/Github"

interface Project {
  imagePath?: string
  title?: string
  description?: string
  tags?: string[]
  link?: string
  github?: string
  difficulty?: number
}

interface CardControlsProps {
  project: Project
}

const CardControls = ({ project }: CardControlsProps) => {
  const [showGithub, setShowGithub] = useState(!project.link)

  return (
    <div className={style.controls}>
      {project.link ? <a href={project.link} rel="noopener norefferer" target="_blank">
                        <Button variant="primary" size="small" icon={<ArrowOutward />}>Проект</Button>
                      </a> : ""}
      {project.github ? <a href={project.github} rel="noopener norefferer" target="_blank">
        <Button variant="secondary" size="small" icon={<GitHub />}>{showGithub && "Репозиторий"}</Button>
      </a> : ""}
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <Section id="проекты" className={style.projects}>
      <h1 data-aos="fade-up">Лучшие работы</h1>
      <ul className={style.projectsContainer}>
        {projectsList.map((project: Project, index) => <li key={index} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
          <Card {...project} controls={<CardControls project={project} />} />
        </li>)}
      </ul>
    </Section>
  )
}

export default ProjectsSection