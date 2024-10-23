import AudioSection from "./AudioSection"
import { MusicVideo } from "./MusicVideo"

export function Songs() {
    return (
        <section className="snap-y snap-mandatory">
            <div className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#202020] p-0">
                <AudioSection id="17b" audioSrc="/final-17b-cut.mp3">
                    <MusicVideo videoSource="/17b-edited-final.webm" videoFormat="webm" />
                </AudioSection>
            </div>

            <div className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#303030] p-0">
                <AudioSection id="agad" audioSrc="/final-agad-cut.mp3">
                    <MusicVideo videoSource="/agad-edited.webm" videoFormat="webm" />
                </AudioSection>
            </div>

            <div className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#404040] p-0">
                <AudioSection id="pasitib" audioSrc="/final-pasitib-cut.mp3">
                    <MusicVideo videoSource="/pasitib-edited.webm" videoFormat="webm" />
                </AudioSection>
            </div>
        </section>
    )
}
