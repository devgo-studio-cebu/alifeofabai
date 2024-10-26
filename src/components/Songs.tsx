import AudioSection from "./AudioSection"
import { MusicVideo } from "./MusicVideo"

const songList = [
    {
        id: "17b",
        color: "#202020",
        audioSrc: "/final-17b-cut.mp3",
        videoSrc: "/17b-edited-final.webm",
        videoLink: "https://www.youtube.com/watch?v=YUbFeHOBq4o",
    },
    {
        id: "agad",
        color: "#303030",
        audioSrc: "/final-agad-cut.mp3",
        videoSrc: "/agad-edited.webm",
        videoLink: "https://www.youtube.com/watch?v=wyu8s4meVR0",
    },
    {
        id: "pasitib",
        color: "#404040",
        audioSrc: "/final-pasitib-cut.mp3",
        videoSrc: "/pasitib-edited.webm",
        videoLink: "https://www.youtube.com/watch?v=tV2efGCtCxQ",
    },
]

export function Songs() {
    return (
        <section>
            {songList.map(({ id, color, audioSrc, videoSrc, videoLink }) => (
                <div key={id} className={`flex flex-col items-start justify-start pb-32`}>
                    <AudioSection id={id} audioSrc={audioSrc}>
                        <MusicVideo videoSrc={videoSrc} videoFormat="webm" />
                        <button className="mx-auto mt-8 flex rounded-full border-2 border-solid border-[#EC4441] bg-transparent p-4 text-4xl text-[#EC4441]">
                            <a href={videoLink}>Watch now!</a>
                        </button>
                    </AudioSection>
                </div>
            ))}
        </section>
    )
}
