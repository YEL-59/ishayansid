import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Star } from "lucide-react";
import Image from "../../../../assets/person.jpg";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Alice Johnson",
    image: "../../../../assets/person.jpg",
    review: "Amazing experience, top-notch service!",
    rating: 5,
  },
  {
    name: "Bob Smith",
    image: "../../../../assets/person.jpg",
    review: "Everything went smoothly and comfortably.",
    rating: 4,
  },
  {
    name: "Carol White",
    image: "../../../../assets/person.jpg",
    review: "Highly recommend for frequent travelers.",
    rating: 5,
  },
  {
    name: "Carol White",
    image: "../../../../assets/person.jpg",
    review: "Highly recommend for frequent travelers.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Trusted by Travelers Worldwide
      </h1>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 1.8,
          },
        }}
        className="pb-4" // reduce padding here
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white shadow-lg rounded-2xl p-6 mx-2 flex flex-col items-center justify-between h-full">
              <p className="text-gray-700 text-base mb-4">"{item.review}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex text-yellow-500">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Move control buttons OUTSIDE Swiper */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          size="icon"
          variant="ghost"
          className="custom-prev border border-gray-300 rounded-full w-10 h-10 hover:bg-gray-100"
        >
          ←
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="custom-next border border-gray-300 rounded-full w-10 h-10 hover:bg-gray-100"
        >
          →
        </Button>
      </div> */}
    </div>
  );
}
