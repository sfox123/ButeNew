"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import Data from "@data/sliders/recent-projects";
import Link from "next/link";

const RecentProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  const currentItem = Data.items[currentIndex];

  return (
    <>
      {/* recent projects slider */}
      <section>
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between align-items-center flex-sm-row-reverse">
            <div className="col-lg-5">
              <div className="mil-mb-60">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up mil-mb-40"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="mil-avatar-frame mil-up mil-mb-30">
                      <h5 className="mil-upper mil-mb-10">
                        {currentItem.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                <Swiper
                  {...SliderProps.milIllustrationSlider}
                  className="swiper-container mil-illustration-slider"
                  onSlideChange={handleSlideChange}
                  onInit={(swiper) => setCurrentIndex(swiper.realIndex)}
                >
                  {Data.items.map((item, key) => (
                    <SwiperSlide
                      className="swiper-slide"
                      key={`illustration-slider-item-${key}`}
                    >
                      <div
                        className="mil-illustration"
                        data-swiper-parallax-x="50"
                        data-swiper-parallax-scale="1.3"
                      >
                        <div className="mil-image-frame">
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
          </div>
        </div>
      </section>
      {/* recent projects slider end */}
    </>
  );
};
export default RecentProjectsSlider;
