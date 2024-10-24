export function ListenNow() {
    return (
        <>
            <h1 className="relative h-fit w-full text-center text-5xl font-bold text-white">Listen Now</h1>
            <div className="relative mx-auto my-8 w-5/6 pb-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1X1ddu?utm_source=oembed"
                    title="Spotify Playlist" // Added title for accessibility
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                ></iframe>
            </div>
        </>
    )
}
