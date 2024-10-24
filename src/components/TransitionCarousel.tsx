import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

useEmblaCarousel.globalOptions = { loop: true }

export function TransitionCarousel() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem className="object-cover">
                    <img src="/cookies-transition-1.png" alt="A Cookie$ Image" className="my-32 h-lvh object-cover" />
                </CarouselItem>
                <CarouselItem>
                    <img src="/cookies-transition-2.png" alt="A Cookie$ Image" className="my-32 h-lvh object-cover" />
                </CarouselItem>
                <CarouselItem>
                    <img src="/cookies-transition-3.png" alt="A Cookie$ Image" className="my-32 h-lvh object-cover" />
                </CarouselItem>
                <CarouselItem>
                    <img src="/cookies-transition-4.png" alt="A Cookie$ Image" className="my-32 h-lvh object-cover" />
                </CarouselItem>
                <CarouselItem>
                    <img src="/cookies-transition-5.png" alt="A Cookie$ Image" className="my-32 h-lvh object-cover" />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
