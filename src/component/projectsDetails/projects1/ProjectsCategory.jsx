import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../../assets/Aircnc-projects-assects/Screenshot Aircnc-banner.png";
import image2 from "../../../assets/Aircnc-projects-assects/Screenshot reserve-room.png";
import image3 from "../../../assets/Aircnc-projects-assects/Screenshot host-room.png";
import image4 from "../../../assets/Aircnc-projects-assects/Screenshot Booking-page.png";
import image5 from "../../../assets/Aircnc-projects-assects/Screenshot update-room.png";
import image6 from "../../../assets/Aircnc-projects-assects/Screenshot Add-Room.png";
import image7 from "../../../assets/Aircnc-projects-assects/Screenshot payment.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const ProjectsCategory = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-3xl" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl" src={image7} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsCategory;
