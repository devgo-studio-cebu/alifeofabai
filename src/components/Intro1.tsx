import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

export function Test1() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            id="intro-1" // Remove the '#' from the id
            style={{ zIndex: 1 }} // Ensure it shows above others
            className="absolute"
        >
            <img
                src="/logo-bakeshop-studio.webp"
                alt="The logo of The Bakeshop Studios"
                className="h-auto w-[350px]"
            />
            <h1 className="mt-3 text-3xl text-white">presents</h1>
        </motion.div>
    )
}
