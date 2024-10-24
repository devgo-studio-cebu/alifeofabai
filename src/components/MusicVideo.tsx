type MusicVideoProps = {
    videoSrc: string
    videoFormat: string
}

export function MusicVideo({ videoSrc, videoFormat }: MusicVideoProps) {
    return (
        <video className="w-auto object-cover lg:h-full" autoPlay loop muted playsInline>
            <source src={videoSrc} type={`video/${videoFormat}`} />
            Your browser does not support the video tag.
        </video>
    )
}
