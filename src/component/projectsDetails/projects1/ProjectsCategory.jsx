// import { Swiper, SwiperSlide } from "swiper/react";
// // import React, { useRef, useState } from "react";
// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";

// import image1 from "../../../assets/Aircnc-projects-assects/Screenshot Aircnc-banner.png";
// import image2 from "../../../assets/Aircnc-projects-assects/Screenshot reserve-room.png";
// import image3 from "../../../assets/Aircnc-projects-assects/Screenshot host-room.png";
// import image4 from "../../../assets/Aircnc-projects-assects/Screenshot Booking-page.png";
// import image5 from "../../../assets/Aircnc-projects-assects/Screenshot update-room.png";
// import image6 from "../../../assets/Aircnc-projects-assects/Screenshot Add-Room.png";
// import image7 from "../../../assets/Aircnc-projects-assects/Screenshot payment.png";

// import { Autoplay, Pagination } from "swiper/modules";
// import { useRef } from "react";

// const ProjectsCategory = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <div className="">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image2} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image3} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image4} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image5} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image6} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img className="rounded-3xl" src={image7} alt="" />
//         </SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 0 0" ref={progressCircle}>
//             {/* <circle cx="24" cy="24" r="20"></circle> */}
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default ProjectsCategory;

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
            className="w-full h-auto rounded-3xl"
            src={image1}
            alt="Aircnc Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image2}
            alt="Reserve Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image3}
            alt="Host Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image4}
            alt="Booking Page"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image5}
            alt="Update Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image6}
            alt="Add Room"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto rounded-3xl"
            src={image7}
            alt="Payment"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectsCategory;
