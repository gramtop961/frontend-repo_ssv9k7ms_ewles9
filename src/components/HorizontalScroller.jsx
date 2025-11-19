import { useEffect, useRef } from 'react'

// Full-screen horizontal scroller with mouse wheel-to-horizontal behavior and snap.
// Usage: <HorizontalScroller><section id="..." className="slide">...</section>...</HorizontalScroller>
export default function HorizontalScroller({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e) => {
      // Convert vertical wheel to horizontal scroll for presentation feel
      // Allow trackpad horizontal gesture to work natively
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollBy({ left: e.deltaY * 1.1, behavior: 'smooth' })
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div
      id="scroller"
      ref={containerRef}
      className="relative flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
    >
      {children}
    </div>
  )
}
