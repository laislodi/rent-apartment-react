import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import building from "../resources/building.jpg";
import house from "../resources/house.jpg";
import kitchen from "../resources/kitchen.jpg";
import property from "../resources/property.webp";
import rental_properties from "../resources/RE_Rental-Properties.webp";
import {Link} from "react-router-dom";

export interface ImageCarouselProps {
  apartmentId: string
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({apartmentId}: ImageCarouselProps) => {
  const images = [building, kitchen, house, property, rental_properties];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return <Carousel
    responsive={responsive}
    infinite={true}
    showDots={true}
    autoPlaySpeed={1000}
    customTransition="all .5"
    transitionDuration={500}
    removeArrowOnDeviceType={["tablet", "mobile"]}
  >
    {images && images.map(image =>
      <Link className={"text-reset"} to={apartmentId}>
        <img style={{maxHeight: "500px", maxWidth: "100%"}} src={image} alt={"Responsive image"}/>
      </Link>)}
  </Carousel>
}