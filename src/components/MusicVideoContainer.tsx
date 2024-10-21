import type { ReactNode } from "react"

export function MusicVideoContainer({ children }: { children: ReactNode }) {
    return (
        <div className="relative m-0 flex h-svh snap-y flex-col items-center justify-center p-0">
            {children}
        </div>
    )
}
