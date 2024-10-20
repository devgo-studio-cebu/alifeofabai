import { useState } from "react"

import { MerchForm } from "@/components/MerchForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function MerchDialog() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Pre-order now!</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Some header here...</DialogTitle>
                        <DialogDescription>Some description here...</DialogDescription>
                    </DialogHeader>
                    <MerchForm onSuccess={() => setIsOpen(false)} />
                </DialogContent>
            </Dialog>
        </>
    )
}
