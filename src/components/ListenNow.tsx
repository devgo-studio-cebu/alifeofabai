export function ListenNow() {
    return (
        <section>
            <h1 className="w-full text-center text-5xl font-bold text-white">Listen Now</h1>
            <img src="/cookies-concert-blue-nobg-fader.png" alt="Cookies Concert" className="left-[3rem]" />
            <div className="absolute mx-auto h-[352px] w-3/4">
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1X1ddu?utm_source=oembed"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
                ></iframe>
            </div>
        </section>
    )
}
