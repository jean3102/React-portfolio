// @ts-nocheck
"use client"
import React from "react"
import style from "./Badge.module.scss"

interface BadgeProps {
  color?: string
  size?: "small" | "medium" | "large"
  children?: React.ReactNode
}

const Badge = ({color, size, children}: BadgeProps) => {
  return (
    <span className={`${style.badge} ${style[size ?? ""] ?? style.default}`} style={{"--color": color}}>
      {children}
    </span>
  )
}

export default Badge

// Note: I used ts-nocheck because I needed to pass color to --color in my scss. Don't put a blame on me!