export function AlbumCover() {
    return (
        <section className="relative flex items-center justify-center bg-[#BC2725] px-2 py-24">
            <img
                src="/texture-rock-overlay.jpg"
                className="absolute top-0 z-0 h-full w-full bg-black mix-blend-overlay"
            />
            <div
                style={{
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))",
                }}
                className="absolute top-0 h-24 w-full"
            ></div>

            <img src="/album-cover-final.png" alt="Photo of Album Cover" className="pointer-events-none z-10" />
        </section>
    )
}
