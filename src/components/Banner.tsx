import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-96 flex justify-center items-center">
          <img loading="lazy" src="carousel/carousel1.jpg" alt="carousel1"/>
        </div>
        <div className="h-96 flex justify-center items-center">
          <img loading="lazy" src="carousel/carousel2.jpg" alt="carousel2"/>
        </div>
        <div className="h-96 flex justify-center items-center">
          <img loading="lazy" src="carousel/carousel3.jpg" alt="carousel3"/>
        </div>
        <div className="h-96 flex justify-center items-center">
          <img loading="lazy" src="carousel/carousel4.jpg" alt="carousel4"/>
        </div>
      </Carousel>
    </div>
  );
}
export default Banner;
