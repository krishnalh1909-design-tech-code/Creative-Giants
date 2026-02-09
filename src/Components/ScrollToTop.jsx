// import { useLayoutEffect } from "react"
// import { useLocation } from "react-router-dom"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"

// const ScrollToTop = ({ lenisRef }) => {
//   const { pathname } = useLocation()

//   useLayoutEffect(() => {
//     if (!lenisRef?.current) return

//     // 1️⃣ Stop any ongoing scroll
//     lenisRef.current.stop()

//     // 2️⃣ HARD reset scroll BEFORE paint
//     lenisRef.current.scrollTo(0, { immediate: true })

//     // 3️⃣ Clear GSAP’s scroll memory
//     ScrollTrigger.clearScrollMemory()
//     ScrollTrigger.refresh(true)

//     // 4️⃣ Resume scrolling
//     lenisRef.current.start()
//   }, [pathname])

//   return null
// }

// export default ScrollToTop
