"use client"
import React from "react"
import Section from "@/modules/Section/Section"
import style from "./SkillsSection.module.scss"
import Quote from "@/components/Quote/Quote"
import Image from "next/image"
import Link from "next/link"
import { skillsList } from "@/utils/skills"

interface Skill {
  iconPath: string
  iconAlt: string
  label: string
  link: string
}

const SkillsSection = () => {
  return (
    <Section className={style.skills}>
      <div data-aos="fade-left">
        <Quote text="Всё, что нужно &mdash; это превращать знания в навыки." author="Александр Куберский, &laquo;Секреты внутренней силы&raquo;" />
      </div>
      <div className={style.skillsContainer}>
        {skillsList.map((skill: Skill, index) => <Link href={skill.link} key={index} target="_blank" title={skill.label}  data-aos="fade-up" data-aos-delay={(index % 8) * 50}>
          <Image src={`/skills/${skill.iconPath}`} alt={skill.iconAlt} width={64} height={64} />
        </Link>)}
      </div>
    </Section>
  )
}

export default SkillsSection