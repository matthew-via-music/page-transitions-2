import { useRef, useEffect } from "react"
import gsap from "gsap"

function Transition() {
  const tl = gsap.timeline()
  const trans = useRef(null)
  useEffect(() => {
    tl.to(trans.current, {
      duration: 2,
      x: "100%",
      ease: "Power4.easeIn"
    })
  })
  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  )
}

export default Transition
