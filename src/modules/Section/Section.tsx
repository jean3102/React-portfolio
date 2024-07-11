import React from "react"
import style from "./Section.module.scss"

interface SectionProps {
    id?: string
    children?: React.ReactNode
    className?: string
}

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <>
      <div className={style.anchor} id={id ?? ""} />
      <section className={className ?? ""}>
        {children ?? ""}
      </section>
    </>
  )
}

export default Section