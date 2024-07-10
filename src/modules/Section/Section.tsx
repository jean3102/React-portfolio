import React from "react"
import style from "./Section.module.scss"

interface SectionProps {
    id: string
    children: React.ReactNode
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <>
      <div className={style.anchor} id={id} />
      <section>
        {children}
      </section>
    </>
  )
}

export default Section