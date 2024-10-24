import React, { useEffect, useState } from "react"

const PreventInteraction = () => {
    const [isAnimating, setIsAnimating] = useState(true)
    const ANIMATION_DURATION = 7000 // 5 seconds

    useEffect(() => {
        // Prevent scrolling by setting overflow hidden on body
        document.body.style.overflow = "hidden"

        // Enable scrolling after animation
        const timer = setTimeout(() => {
            setIsAnimating(false)
            document.body.style.overflow = "auto"
        }, ANIMATION_DURATION)

        // Cleanup function
        return () => {
            clearTimeout(timer)
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <div className="absolute min-h-screen">
            {/* Overlay with transition */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-500 ${
                    isAnimating ? "opacity-25" : "pointer-events-none opacity-0"
                }`}
            />

            {/* <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-100" : "opacity-0"}`}>
                <div className="flex h-screen items-center justify-center">
                    <div className="text-4xl font-bold text-white">Loading...</div>
                </div>
            </div> */}
        </div>
    )
}

export default PreventInteraction
