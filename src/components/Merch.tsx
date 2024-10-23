import { useEffect, useState } from "react"

import { MerchDialog } from "./MerchDialog"

export function Merch() {
    const [style, setStyle] = useState("front")
    const [isHovering, setIsHovering] = useState(false)
    const merchList = [
        {
            merchSource: ["/pasitib-nobg.png"],
            merchAlt: "Pasitib Muscle Tee",
            merchTitle: "Pasitib Muscle Tee",
        },
        {
            merchSource: ["/cookies-nobg.png"],
            merchAlt: "Cookie$ Merch",
            merchTitle: "Cookie$ Merch (Navy Blue)",
        },
    ]
    return (
        <section className="flex flex-col gap-8">
            <img src="/merch-bg-fade.png" alt="Photo of Cookie$ in concert" className="" />
            <h1 data-text="MERCH" className="merch-glitch passion-one-bold mx-auto mt-16 text-8xl uppercase text-white">
                merch
            </h1>

            <div
                className="flex w-full cursor-pointer flex-col items-center justify-center px-8 transition-all duration-500 ease-in-out"
                onMouseEnter={() => setStyle("back")}
                onMouseLeave={() => setStyle("front")}
            >
                <img src={`/17b-nobg-${style}.png`} alt={`17B Merch Shirt ${style}`} className="h-auto w-full" />
                <p className="mx-auto text-2xl text-[#EC4441]">17B Jersey</p>
            </div>
            {merchList.map((merch, index) => (
                <div
                    key={index}
                    className="flex w-full cursor-pointer flex-col items-center justify-center px-8 transition-all duration-500 ease-in-out"
                >
                    <img src={`${merch.merchSource}`} alt={merch.merchAlt} />
                    <p className="mx-auto text-2xl text-[#EC4441]">{merch.merchTitle}</p>
                </div>
            ))}
            <MerchDialog />
        </section>
    )
}
