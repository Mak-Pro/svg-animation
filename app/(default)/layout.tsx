'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import {NextUIProvider} from "@nextui-org/react"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <div>
        <Header />
        <main className="grow">
          {children}
        </main>
      </div>
    </NextUIProvider>
  )
}
