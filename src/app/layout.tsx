import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.scss"

const rubik = Rubik({ subsets: ["cyrillic"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
