import { MusicVideo } from "./MusicVideo";

export function Songs(){
    return  (
        <section>
            <div
                className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#202020] p-0"
            >
                <MusicVideo
                    videoSource="/17b-edited-final.webm"
                    videoFormat="webm"
                />
            </div>

            <div
                className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#303030] p-0"
            >
                <MusicVideo
                    videoSource="/agad-edited.webm"
                    videoFormat="webm"
                />
            </div>

            <div
                className="m-0 flex h-lvh snap-y flex-col items-center justify-center bg-[#404040] p-0"
            >
                <MusicVideo
                    videoSource="/pasitib-edited.webm"
                    videoFormat="webm"
                />
            </div>
        </section>
    )
}