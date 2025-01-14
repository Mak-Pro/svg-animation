"use client"

import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

export default function AOS() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, [])

  return <></>
}