
import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"


export function Test() {
    const [scope, animate] = useAnimate()

    // const introAnimation = async () => {
    //     // Animate #intro-1
    //     await animate(
    //         "#intro-1",
    //         { opacity: 1 },
    //         { duration: 2, ease: "easeInOut" },
    //     )
    //     await animate(
    //         "#intro-1",
    //         { opacity: 0, display: "none" },
    //         { duration: 2, ease: "easeIn" },
    //     )

    //     // Animate #intro-2
    //     await animate(
    //         "#intro-2",
    //         { opacity: 1 },
    //         { duration: 2, delay: stagger(3) },
    //     )
    //     await animate(
    //         "#intro-2",
    //         { opacity: 0, display: "none" },
    //         { duration: 0 },
    //     )

    //     // Animate #intro-3
    //     await animate(
    //         "#intro-3",
    //         { opacity: 1 },
    //         { duration: 0, delay: stagger(3) },
    //     )
    //     await animate("#intro-3", { opacity: 0 }, { duration: 1 })
    // }

    // useEffect(() => {
    //     // Start the animation when the component mounts
    //     introAnimation()
    // }, [])

    return (
        <div
            ref={scope}
            className="flex h-svh flex-col items-center justify-center"
        >
            {/* <Test1 />
            <Test2 />
            <Test3 /> */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                id="intro-1" // Remove the '#' from the id
                style={{ zIndex: 1 }} // Ensure it shows above others
                className="pointer-events-none absolute"
            >
                <img
                    src="/logo-bakeshop-studio.webp"
                    alt="The logo of The Bakeshop Studios"
                    className="h-auto w-[350px]"
                />
                <h1 className="pointer-events-none mt-3 flex justify-center text-3xl text-white">
                    presents
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                id="intro-2" // Remove the '#' from the id
                style={{ zIndex: 1 }} // Ensure it shows above others
                className="pointer-events-none absolute"
            >
                <h1 className="pointer-events-none mt-3 text-5xl text-white">
                    A Life Of A Bai
                </h1>
            </motion.div> */}
            <motion.div
                initial={{ opacity: 1 }} // Set initial opacity to 0
                id="intro-3" // Remove the '#' from the id
                // style={{ zIndex: -1 }} // Ensure it shows above others when animated
                className=""
            >
                <div className="relative h-auto w-auto">
                    <img
                        src="./assets/cookies-landing-edited-small.png"
                        alt="The logo of The Bakeshop Studios"
                        className="inset-0 h-[40rem] w-auto object-cover"
                    />

                    <img
                        src="/logo-bakeshop-studio.webp"
                        alt="The logo of The Bakeshop Studios"
                        className="absolute left-5 top-0 h-[3rem] w-auto object-cover"
                    />
                </div>
            </motion.div>
        </div>
    )
}
