"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener("click", (e: Event) => {
        e.preventDefault()

        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
        if (!href) return

        const targetElement = document.querySelector(href) as HTMLElement
        if (!targetElement) return

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {})
      })
    }
  }, [])

  return null
}
