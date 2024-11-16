"use client";

import React from "react";
import dynamic from "next/dynamic";

import FeaturesSection from "@components/sections/Features";
import AboutThreeSection from "@components/sections/AboutThree";

const HeroTwoSlider = dynamic(() => import("@components/sliders/HeroTwo"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const RecentProjectsSlider = dynamic(
  () => import("@components/sliders/RecentProjects"),
  { ssr: false }
);

function HomePageContent({ posts }) {
  return (
    <>
      <HeroTwoSlider />
      <FeaturesSection />
      <AboutThreeSection />
      <TestimonialSlider showPartners={1} />
      <RecentProjectsSlider />
    </>
  );
}

export default HomePageContent;
