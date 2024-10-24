import AudioSection from "./AudioSection"
import { MusicVideo } from "./MusicVideo"

const songList = [
    {
        id: "17b",
        color: "#202020",
        audioSrc: "/final-17b-cut.mp3",
        videoSrc: "/17b-edited-final.webm",
    },
    {
        id: "agad",
        color: "#303030",
        audioSrc: "/final-agad-cut.mp3",
        videoSrc: "/agad-edited.webm",
    },
    {
        id: "pasitib",
        color: "#404040",
        audioSrc: "/final-pasitib-cut.mp3",
        videoSrc: "/pasitib-edited.webm",
    },
]

export function Songs() {
    return (
        <section className="">
            {songList.map(({ id, color, audioSrc, videoSrc }) => (
                <div className={`flex flex-col items-start justify-start bg-[${color}] pb-32`}>
                    <AudioSection id={id} audioSrc={audioSrc}>
                        <MusicVideo videoSrc={videoSrc} videoFormat="webm" />
                    </AudioSection>
                </div>
            ))}
        </section>
    )
}
