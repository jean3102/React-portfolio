import React from "react"
import style from "./Button.module.scss"

interface ButtonProps {
    onClick?: () => void
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
    type?: "fill" | "outline"
    children?: React.ReactNode
    variant?: "primary" | "secondary" | "error" | "success"
    size?: "small" | "medium" | "large"
    icon?: React.ReactNode
    fullWidth?: boolean
    upperCase?: boolean
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={`${style.button}
                        ${props.fullWidth ? style.fullWidth : ""}
                        ${props.upperCase ? style.upperCase : ""}
                        ${props.type === "outline" ? style.outline : style.fill}
                        ${props.variant ? style[props.variant] : style.default}
                        ${props.size ? style[props.size] : style.medium}
                        ${props.icon ? style.iconed : ""}
                        ${props.className}`} style={props.style} disabled={props.disabled} onClick={props.onClick}>
      {props.icon ? <span className={`${props.size ? style[props.size] : style.medium} ${style.icon}`}>{props.icon}</span> : ""}
      {children}
    </button>
  )
}

export default Button