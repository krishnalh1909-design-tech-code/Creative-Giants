import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const PageTransition = ({ children, lenisRef }) => {
  const overlayRef = useRef(null)
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [isAnimating, setIsAnimating] = useState(false)

  // 🔴 EXIT → COVER SCREEN
  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return
    if (isAnimating) return

    setIsAnimating(true)

    gsap.to(overlayRef.current, {
      y: "0%",
      duration: 0.5,
      ease: "power4.inOut",
      onComplete: () => {
        // 🧠 RESET SCROLL WHILE SCREEN IS COVERED
        lenisRef?.current?.stop()
        lenisRef?.current?.scrollTo(0, { immediate: true })
        window.scrollTo(0, 0)

        ScrollTrigger.clearScrollMemory()

        // 🔁 SWAP ROUTE
        setDisplayLocation(location)
      },
    })
  }, [location])

  // 🟢 ENTER → REVEAL PAGE
  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { y: "0%" ,
        duration:0.5
      },
      {
        y: "-100%",
        duration: 1.5,
        delay: 0.2,
        ease: "power4.inOut",
        onComplete: () => {
          ScrollTrigger.refresh(true)
          lenisRef?.current?.start()
          setIsAnimating(false)
        },
      }
    )
  }, [displayLocation])

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#494747] z-999 translate-y-full"
      />
      {children(displayLocation)}
    </>
  )
}

export default PageTransition
