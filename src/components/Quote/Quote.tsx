import React from "react"
import style from "./Quote.module.scss"

interface QuoteProps {
    text: string
    author: string
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <div className={style["quote-container"]}>
      <blockquote className={style["quote"]}>
        <p>{text}</p>
        <cite className={style["author"]}>&mdash; {author}</cite>
      </blockquote>
    </div>
  )
}

export default Quote