import { useEffect, useState } from "react"

export function Merch() {
    const [style, setStyle] = useState("front")
    const [isHovering, setIsHovering] = useState(false)

    return (
        <section className="flex flex-col gap-8 p-8">
            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center transition-all duration-500 ease-in-out`}
                onMouseEnter={() => setStyle("back")}
                onMouseLeave={() => setStyle("front")}
            >
                <img
                    src={`/17b-nobg-${style}.png`}
                    alt={`17B Merch Shirt ${style}`}
                    className="h-auto w-full"
                />
                <p className="mx-auto text-2xl text-[#EC4441]">17B Jersey</p>
                <button className="mt-4 w-3/4 rounded-full border-2 border-solid border-[#EC4441] p-2 text-3xl font-bold text-[#EC4441]">
                    I want this
                </button>
            </div>

            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center border-solid border-red-200 transition-all duration-500 ease-in-out`}
            >
                <img
                    src="/pasitib-nobg.png"
                    alt={`17B Merch Shirt ${style}`}
                    className="h-auto w-full"
                />

                <p className="mx-auto text-2xl text-[#EC4441]">
                    Pasitib Muscle Tee
                </p>
                <button className="mt-4 w-3/4 rounded-full border-2 border-solid border-[#EC4441] p-2 text-3xl font-bold text-[#EC4441]">
                    I want this
                </button>
            </div>

            <div
                className={`flex w-full cursor-pointer flex-col items-center justify-center transition-all duration-500 ease-in-out`}
            >
                <img
                    src="/cookies-nobg.png"
                    alt={`17B Merch Shirt ${style}`}
                    className="h-auto w-full"
                />
                <p className="mx-auto text-2xl text-[#EC4441]">
                    Cookie$ Merch (Navy Blue)
                </p>
                <button className="mt-4 w-3/4 rounded-full border-2 border-solid border-[#EC4441] p-2 text-3xl font-bold text-[#EC4441]">
                    I want this
                </button>
            </div>
        </section>
    )
}
