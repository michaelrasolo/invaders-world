
// bouton submit form
// randomize hero banner

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

function CityCarousel({ location }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const locationPictures = location.pictures;
  const pictures =
    location &&
    locationPictures.map((picture, i) => (
      <CarouselItem key={i}>
        <div className="p-1 ">
          <Card className="w-full max-w-3xl h-5/6 ">
            <CardContent className="h-5/6 flex object-cover items-center justify-center p-0">
              <img className="object-cover aspect-[16/9]" src={picture} alt={`Picture ${i} of ${location.name}`} />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl border "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselPrevious />
      <CarouselContent>{pictures}</CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}

export default CityCarousel;
