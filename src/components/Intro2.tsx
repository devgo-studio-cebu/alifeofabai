import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

export function Test2() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            id="intro-2" // Remove the '#' from the id
            style={{ zIndex: 1 }} // Ensure it shows above others
            className="absolute"
        >
            <h1 className="mt-3 text-5xl text-white">A Life Of A Bai</h1>
        </motion.div>
    )
}
