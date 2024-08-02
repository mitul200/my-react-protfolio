import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { useRef } from "react";

import image1 from "../../assets/Tourism-assects/banner.png";
import image2 from "../../assets/Tourism-assects/planning.png";
import image3 from "../../assets/Tourism-assects/popular3.png";
import image4 from "../../assets/Tourism-assects/watch4.png";
import image5 from "../../assets/Tourism-assects/choose6.png";
import image6 from "../../assets/Tourism-assects/artical5.png";

const ToursimCategory = () => {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            spaceBetween: 10, // Adjust spacing for screens >= 640px
          },
          768: {
            spaceBetween: 20, // Adjust spacing for screens >= 768px
          },
          1024: {
            spaceBetween: 30, // Adjust spacing for screens >= 1024px
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        // spaceBetween={30}

        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Autoplay, Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image1}
            alt="Aircnc Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image2}
            alt="Reserve Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image3}
            alt="Host Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image4}
            alt="Booking Page"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image5}
            alt="Update Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image6}
            alt="Add Room"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ToursimCategory;
