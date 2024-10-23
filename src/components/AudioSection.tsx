import React, { useEffect, useRef } from "react"

interface AudioSectionProps {
    id: string
    audioSrc: string
    children: React.ReactNode
}

const AudioSection: React.FC<AudioSectionProps> = ({ id, audioSrc, children }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Initialize the audio reference
        if (typeof Audio !== "undefined") {
            audioRef.current = new Audio(audioSrc)
            audioRef.current.loop = true
            audioRef.current.autoplay = true
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        audioRef.current?.play().catch((error) => {
                            console.error("Error playing audio:", error)
                        })
                    } else {
                        audioRef.current?.pause()
                        if (audioRef.current) {
                            audioRef.current.currentTime = 0 // Reset to start
                        }
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
            // Cleanup: Pause and reset audio when component unmounts
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
            }
        }
    }, [audioSrc]) // Include audioSrc as a dependency

    return (
        <section
            ref={sectionRef}
            style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            {children}
        </section>
    )
}

export default AudioSection
