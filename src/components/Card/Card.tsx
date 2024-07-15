"use client"
import React from "react"
import style from "./Card.module.scss"
import Image from "next/image"
import Badge from "../Badge/Badge"
import { getColorByTech } from "@/utils/brands"

interface CardProps {
  imagePath?: string
  title?: string
  description?: string
  tags?: string[]
  difficulty?: number
  controls?: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className={style.card}>
      <Image src={props.imagePath ?? "/projects/default.webp"} alt={props.title ?? "An empty card"} width={368} height={192} className={style.image} />
      <div className={style.text}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.difficulty && <p><b>Сложность:</b> {props.difficulty}/10</p>}
      </div>
      <div className={style.tagsContainer}>
        <div className={style.tags}>
          {props.tags?.map((tag, index) => (
            <Badge key={index} color={getColorByTech(tag)} size="small">{tag}</Badge>
          ))}
        </div>
        {props.controls}
      </div>
    </div>
  )
}

export default Card