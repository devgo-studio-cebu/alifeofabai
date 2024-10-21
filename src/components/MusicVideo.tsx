type MusicVideoProps = {
    videoSource: string
    videoFormat: string
}

export function MusicVideo({ videoSource, videoFormat }: MusicVideoProps) {
    return (
        <section>
            <div className="relative inset-0 m-0 flex h-svh flex-col items-center justify-center bg-[#101010] p-0">
                <h1 className="text-[5rem] font-bold text-white">17B</h1>
                <video
                    className="absolute h-auto w-auto object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoSource} type={`video/${videoFormat}`} />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}
