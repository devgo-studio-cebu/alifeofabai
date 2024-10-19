import { useEffect, useState } from "react"
import { delay, motion } from "framer-motion"

export function Intro() {
    const [currentIntro, setCurrentIntro] = useState(0)

    useEffect(() => {
        const first = setTimeout(() => setCurrentIntro(0), 3 * 1000)

        return () => {
            clearTimeout(first)
        }
    }, [currentIntro])

    if (currentIntro == 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="flex h-svh flex-col items-center justify-center"
            >
                <img
                    src="/logo-bakeshop-studio.webp"
                    alt="The logo of The Bakeshop Studios"
                    className="h-auto w-[350px]"
                />
                <h1 className="mt-3 text-3xl text-white">presents</h1>
            </motion.div>
        )
    } else if (currentIntro == 1) {
        return (
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl text-white"
            >
                A Life Of A Bai
            </motion.h1>
        )
    }
}
