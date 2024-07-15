"use client"
import React, { useState } from "react"
import style from "./ContactsSection.module.scss"
import Section from "../Section/Section"
import Button from "@/components/Button/Button"
import { Telegram, Gmail, GitHub } from "@/components/Icon/Icon"

const ContactsSection = () => {
  return (
    <Section id="контакты">
      <div className={style.contacts} data-aos="fade-in">
        <h1 data-aos="fade-right">Контакты</h1>
        <div className={style.contactsContainer}>
          <a data-aos="fade-up" href="https://t.me/im_robertproducts" target="_blank" rel="noopener norefferer">
            <Button variant="primary" size="large" icon={<Telegram />}>
              Telegram
            </Button>
          </a>
          <a data-aos="fade-up" data-aos-delay="200" href="mailto:tolstovrob@gmail.com" target="_blank" rel="noopener norefferer">
            <Button variant="error" size="large" icon={<Gmail />}>
              Gmail
            </Button>
          </a>
          <a data-aos="fade-up" data-aos-delay="400" href="https://github.com/tolstovr" target="_blank" rel="noopener norefferer">
            <Button variant="secondary" size="large" icon={<GitHub />}>
              Github
            </Button>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default ContactsSection