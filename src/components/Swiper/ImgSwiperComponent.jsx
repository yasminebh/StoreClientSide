import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./styles.css";

const ImgSwiperComponent = ({ images }) => {
  const data = images?.map((i) => {
    return { url:"http://localhost:5000/" + i.name.toString()}
  });
  console.log(data)
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImgSwiperComponent;
