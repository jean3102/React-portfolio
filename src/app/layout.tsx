import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.scss"
import Navbar from "@/modules/Navbar/Navbar"

const rubik = Rubik({ subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: "RobTolstov",
  description: "I'm frontend developer, who builds best-looking interfaces",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={rubik.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
