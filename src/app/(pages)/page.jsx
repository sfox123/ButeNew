import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";

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

export const metadata = {
  title: {
    default: "Home",
  },
  description: AppData.settings.siteDescription,
};

async function Home3() {
  const posts = await getAllPosts();

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
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}
