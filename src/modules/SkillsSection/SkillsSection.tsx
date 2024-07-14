"use client"
import React from "react"
import Section from "@/modules/Section/Section"
import style from "./SkillsSection.module.scss"
import Quote from "@/components/Quote/Quote"
import Image from "next/image"
import Link from "next/link"

const skills = [
  {
    icon: <Image src="/skills/html.svg" alt="HTML" width={64} height={64} />,
    label: "HTML",
    link: "https://www.w3.org/html/"
  },
  {
    icon: <Image src="/skills/css.svg" alt="CSS" width={64} height={64} />,
    label: "CSS",
    link: "https://www.w3.org/Style/CSS/"
  },
  {
    icon: <Image src="/skills/js.svg" alt="JavaScript" width={64} height={64} />,
    label: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    icon: <Image src="/skills/ts.svg" alt="TypeScript" width={64} height={64} />,
    label: "TypeScript",
    link: "https://www.typescriptlang.org/"
  },
  {
    icon: <Image src="/skills/react.svg" alt="React.js" width={64} height={64} />,
    label: "React.js",
    link: "https://reactjs.org/"
  },
  {
    icon: <Image src="/skills/nextjs.svg" alt="Next.js" width={64} height={64} />,
    label: "Next.js",
    link: "https://nextjs.org/"
  },
  {
    icon: <Image src="/skills/nodejs.svg" alt="Node.js" width={64} height={64} />,
    label: "Node.js",
    link: "https://nodejs.org/en/"
  },
  {
    icon: <Image src="/skills/vite.svg" alt="Vite" width={64} height={64} />,
    label: "Vite",
    link: "https://vitejs.dev/"
  },
  {
    icon: <Image src="/skills/svelte.svg" alt="Svelte" width={64} height={64} />,
    label: "Svelte",
    link: "https://svelte.dev/"
  },
  {
    icon: <Image src="/skills/sass.svg" alt="Sass" width={64} height={64} />,
    label: "Sass",
    link: "https://sass-lang.com/"
  },
  {
    icon: <Image src="/skills/tailwindcss.svg" alt="Tailwind CSS" width={64} height={64} />,
    label: "Tailwind CSS",
    link: "https://tailwindcss.com/"
  },
  {
    icon: <Image src="/skills/mui.svg" alt="Material UI" width={64} height={64} />,
    label: "Material UI",
    link: "https://mui.com/"
  },
  {
    icon: <Image src="/skills/git.svg" alt="Git" width={64} height={64} />,
    label: "Git",
    link: "https://git-scm.com/"
  },
  {
    icon: <Image src="/skills/expressjs.svg" alt="Express.js" width={64} height={64} />,
    label: "Express.js",
    link: "https://expressjs.com/"
  },
  {
    icon: <Image src="/skills/python.svg" alt="Python" width={64} height={64} />,
    label: "Python",
    link: "https://www.python.org/"
  },
  {
    icon: <Image src="/skills/fastapi.svg" alt="FastAPI" width={64} height={64} />,
    label: "FastAPI",
    link: "https://fastapi.tiangolo.com/"
  }
]

const SkillsSection = () => {
  return (
    <Section className={style.skills}>
      <div data-aos="fade-left" data-aos-delay="600">
        <Quote text="Всё, что нужно &mdash; это превращать знания в навыки." author="Александр Куберский, &laquo;Секреты внутренней силы&raquo;" />
      </div>
      <div className={style.skillsContainer}>
        {skills.map((skill, index) => <Link href={skill.link} key={index} target="_blank" title={skill.label}  data-aos="fade-up" data-aos-delay={(index % 16) * 50}>
          {skill.icon}
        </Link>)}
      </div>
    </Section>
  )
}

export default SkillsSection