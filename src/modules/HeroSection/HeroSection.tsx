"use client"
import React from "react"
import Section from "@/modules/Section/Section"
import style from "./HeroSection.module.scss"
import Image from "next/image"
import Button from "@/components/Button/Button"
import { ArrowDown, FileText } from "react-feather"
import Link from "next/link"

const HeroSection = () => {
  return (
    <Section id="о_себе">
      <header className={style.header}>
        <div className={style.text}>
          <h1 data-aos="fade-right">Frontend разработчик. UI/UX инженер.</h1>
          <div className={style.subtext} data-aos="fade-up" data-aos-delay="200">
            Привет, меня зовут Роберт и я создаю современные и удобные интерфейсы.
            А ещё я знаю как правильно расположить кнопку.
            А ещё я студент направления &laquo;Программная инженерия&raquo;
          </div>
          <div className={style.callToAction} data-aos="fade-up" data-aos-delay="400">
            <Link href="#проекты">
              <Button variant="primary" icon={<ArrowDown />}>Посмотреть работы</Button>
            </Link>
            <Link href="#" download>
              <Button variant="secondary" icon={<FileText />}>Скачать CV</Button>
            </Link>
          </div>
        </div>
        <div className={style.image} data-aos="fade-left">
          <Image src="/robtolstov.webp" alt="My photo" width="456" height="456" />
        </div>
      </header>
    </Section>
  )
}

export default HeroSection