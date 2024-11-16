import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactPageContent from "@/src/app/content/ContactPageContent";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle={"We’d love to talk"}
        breadTitle={"Contact"}
        bgImage={"/img/photo/12.jpg"}
      />
      <ContactPageContent />
    </>
  );
};

export default Contact;
