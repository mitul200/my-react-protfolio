import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { useRef } from "react";

import image1 from "../../../assets/Aircnc-projects-assects/Screenshot Aircnc-banner.png";
import image2 from "../../../assets/Aircnc-projects-assects/Screenshot reserve-room.png";
import image3 from "../../../assets/Aircnc-projects-assects/Screenshot host-room.png";
import image4 from "../../../assets/Aircnc-projects-assects/Screenshot Booking-page.png";
import image5 from "../../../assets/Aircnc-projects-assects/Screenshot update-room.png";
import image6 from "../../../assets/Aircnc-projects-assects/Screenshot Add-Room.png";
import image7 from "../../../assets/Aircnc-projects-assects/Screenshot payment.png";

const ProjectsCategory = () => {
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
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={image7}
            alt="Payment"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectsCategory;
