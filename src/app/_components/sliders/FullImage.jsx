"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const FullImageSlider = ({ items }) => {
  return (
    <>
      {/* full image slider */}
      <div className="mil-illustration-slider-frame mil-up">
        <div className="mil-slider-container">
          <Swiper
            {...SliderProps.milIllustrationSlider}
            className="swiper-container mil-illustration-slider"
          >
            {items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`full-image-slider-item-${key}`}
              >
                <div className="mil-illustration mil-fw-item">
                  <div className="mil-image-frame square-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mil-illustration-slider-nav mil-up">
            <div className="mil-nav-buttons">
              <div className="mil-slider-button mil-illustration-prev">
                Prev
              </div>
              <div className="mil-slider-button mil-illustration-next">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* full image slider end */}
    </>
  );
};

export default FullImageSlider;
