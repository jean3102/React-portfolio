"use client"
import React, { useState, useEffect } from "react"
import style from "./Navbar.module.scss"
import Link from "next/link"
import Image from "next/image"
import { GitHub } from "@/components/Icons/Github"
import { CV } from "@/components/Icons/CV"
import { Person } from "@/components/Icons/Person"
import { Projects } from "@/components/Icons/Projects"
import { Contacts } from "@/components/Icons/Contacts"

const routes = [
  {
    label: "О себе",
    href: "#о_себе",
    icon: <Person />
  },
  {
    label: "Проекты",
    href: "#проекты",
    icon: <Projects />
  },
  {
    label: "Контакты",
    href: "#контакты",
    icon: <Contacts />
  }
]

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null)
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let activeRoute: string | null = null
      let minDistance = Infinity

      routes.forEach((route) => {
        const element = document.querySelector(route.href)
        if (element) {
          const distance = Math.abs(element.getBoundingClientRect().top)
          if (distance < minDistance) {
            minDistance = distance
            activeRoute = route.href
          }
        }
      })

      setActiveRoute(activeRoute)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [routes])


  return (
    <nav className={style.navbar}>
      <Link href="#о_себе" className={style.brand}>
        <Image src="/favicon.svg" alt="RobTolstov" width="40" height="40" />
        <span>RobTolstov</span>
      </Link>
      <ul className={`${style.items} ${navToggle ? style.toggle : ""}`}>
        {routes.map((route) => (
          <li key={route.label}>
            <Link href={route.href} className={`${style.navlink} ${activeRoute === route.href? style.active : ""}`} onClick={() => {setNavToggle(prev => false)}}>
              {route.icon}
              <span>{route.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={style.socials}>
        <Link href="https://github.com/tolstovr" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </Link>
        <Link href="#" target="_blank" download>
          <CV />
        </Link>
      </div>
      <button className={`${style.burger} ${navToggle ? style.active : ""}`} onClick={() => {setNavToggle(prev => !prev)}}>
        <span className={style.line} />
        <span className={style.line} />
      </button>
    </nav>
  )
}

export default Navbar