import { useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"

import { MerchForm } from "@/components/MerchForm"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export function MerchDialog() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="flex justify-center">
            <Button
                className="rounded-full border-2 border-solid border-[#EC4441] bg-transparent p-8 text-4xl text-[#EC4441]"
                onClick={() => setIsOpen(true)}
            >
                Pre-order now!
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="border-none">
                    {/* <DialogHeader>
                        <DialogTitle>Some header here...</DialogTitle>
                        <DialogDescription>Some description here...</DialogDescription>
                    </DialogHeader> */}
                    <div className="relative border-4 border-solid border-[#981C1B]">
                        <DialogClose asChild className="absolute right-2 top-2">
                            <Cross2Icon className="border-none text-white" />
                        </DialogClose>
                        <MerchForm onSuccess={() => setIsOpen(false)} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
