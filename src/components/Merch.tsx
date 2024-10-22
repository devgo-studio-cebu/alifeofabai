import { useEffect, useState } from "react"

export function Merch() {
    const [style, setStyle] = useState("front")
    const [isHovering, setIsHovering] = useState(false)

    return (
        <section className="relative flex flex-col gap-8">
            <img
                src="/merch-bg-fade.png"
                alt="Photo of Cookie$ in concert"
                className=""
            />
            <h1
                data-text="MERCH"
                className="merch-glitch passion-one-bold mx-auto text-8xl text-white"
            >
                MERCH
            </h1>
            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center px-8 transition-all duration-500 ease-in-out`}
                onMouseEnter={() => setStyle("back")}
                onMouseLeave={() => setStyle("front")}
            >
                <img
                    src={`/17b-nobg-${style}.png`}
                    alt={`17B Merch Shirt ${style}`}
                    className="h-auto w-full"
                />
                <p className="mx-auto text-2xl text-[#EC4441]">17B Jersey</p>
            </div>

            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center border-solid border-red-200 transition-all duration-500 ease-in-out`}
            >
                <img
                    src="/pasitib-nobg.png"
                    alt={`Pasitib Muscle Tee`}
                    className="h-auto w-full"
                />

                <p className="mx-auto text-2xl text-[#EC4441]">
                    Pasitib Muscle Tee
                </p>
            </div>

            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center transition-all duration-500 ease-in-out`}
            >
                <img
                    src="/cookies-nobg.png"
                    alt={`Cookies Merch`}
                    className="h-auto w-full"
                />
                <p className="relative bottom-5 mx-auto text-2xl text-[#EC4441]">
                    Cookie$ Merch (Navy Blue)
                </p>
            </div>
        </section>
    )
}
