import { useState } from "react"
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons"

export function AudioControl() {
    const [isAudioClicked, setIsAudioClicked] = useState(false)

    const handleAudioClick = () => {
        setIsAudioClicked(true)
    }

    if (isAudioClicked === false) {
        return (
            <div className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 transform items-center gap-4 rounded-full bg-[#BC2725] px-4 py-2 shadow shadow-black">
                <SpeakerLoudIcon className="stroke-white" />
                <h1 className="text-white" onClick={handleAudioClick}>
                    Click to enable audio
                </h1>
            </div>
        )
    } else {
        return <></>
    }
}
