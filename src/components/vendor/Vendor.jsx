import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Import images
import vendor1 from "../../img/vendor-1.jpg";
import vendor2 from "../../img/vendor-2.jpg";
import vendor3 from "../../img/vendor-3.jpg";
// Import other images similarly

const Vendor = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="vendor-item border p-4">
                    <img src={vendor1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vendor-item border p-4">
                    <img src={vendor2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vendor-item border p-4">
                    <img src={vendor3} alt="" />
                  </div>
                </SwiperSlide>
                {/* Include other SwiperSlides similarly */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vendor;
