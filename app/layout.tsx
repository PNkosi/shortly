import './globals.css'
import Navbar from "@/app/components/Navbar";
import React from "react";


export const metadata = {
  title: 'Shortly | Shorter links',
  description: "Build your brand's recognition and get detailed insights on how your links are performing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
