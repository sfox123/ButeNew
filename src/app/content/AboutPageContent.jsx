"use client";

import React from "react";
import dynamic from "next/dynamic";

import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const ProcessSlider = dynamic(() => import("@components/sliders/Process"), {
  ssr: false,
});

function AboutPageContent() {
  return (
    <>
      <ServicesTwoSection />
      <ContactInfoSection />
      <ProcessSlider paddingTop={"0"} />
      <PartnersSlider bgStyle={"soft"} />
      <TestimonialSlider showPartners={0} />
    </>
  );
}

export default AboutPageContent;
