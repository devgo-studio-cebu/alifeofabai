type MusicVideoProps = {
    videoSource: string
    videoFormat: string
}

export function MusicVideo({ videoSource, videoFormat }: MusicVideoProps) {
    return (
        <video className="w-auto object-cover" autoPlay loop muted playsInline>
            <source src={videoSource} type={`video/${videoFormat}`} />
            Your browser does not support the video tag.
        </video>
    )
}
