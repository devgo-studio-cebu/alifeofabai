import { useEffect, useState } from "react"

export function Merch() {
    const [style, setStyle] = useState("front")
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        console.log("Component mounted")
    }, [])

    const handleMouseEnter = () => {
        console.log("Mouse enter, changing to back")
        setStyle("back")
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        console.log("Mouse leave, changing to front")
        setStyle("front")
        setIsHovering(false)
    }

    return (
        <section className="flex flex-col gap-4 p-8">
            <div
                className={`w-full cursor-pointer transition-all duration-300 ease-in-out ${isHovering ? "bg-red-500" : "bg-blue-400"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={`/17b-nobg-${style}.png`}
                    alt={`17B Merch Shirt ${style}`}
                    className="h-auto w-full"
                />
                {/* Debug info */}
                <p className="left-0 top-0 text-black">
                    Current style: {style}, Hovering:{" "}
                    {isHovering ? "Yes" : "No"}
                </p>
                <button
                    className={`rounded p-2 transition-colors duration-300 ${isHovering ? "bg-red-500 text-white" : "bg-white text-black"}`}
                    onMouseEnter={() => console.log("Button hover enter")}
                    onMouseLeave={() => console.log("Button hover leave")}
                >
                    <h1>hello</h1>
                </button>
            </div>
        </section>
    )
}
