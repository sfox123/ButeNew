import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutPageContent from "@/src/app/content/AboutPageContent";

export const metadata = {
  title: {
    default: "About",
  },
  description: AppData.settings.siteDescription,
};

const About = () => {
  return (
    <>
      <PageBanner
        pageTitle={"About us"}
        breadTitle={"About"}
        bgImage={"/img/projects/7.png"}
      />
      <AboutPageContent />
    </>
  );
};

export default About;
