import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

export function Test3() {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Set initial opacity to 0
            id="intro-3" // Remove the '#' from the id
            style={{ zIndex: -1 }} // Ensure it shows above others when animated
            className="absolute"
        >
            <img
                src="/logo-bakeshop-studio.webp"
                alt="The logo of The Bakeshop Studios"
                className="h-auto w-[350px]"
            />
            <h1 className="mt-3 text-3xl text-white">Intro-3</h1>
        </motion.div>
    )
}
