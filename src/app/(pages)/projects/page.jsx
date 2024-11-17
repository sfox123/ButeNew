import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ProjectsPageContent from "@/src/app/content/ProjectsPageContent";

export const metadata = {
  title: {
    default: "Projects",
  },
  description: AppData.settings.siteDescription,
};

function Projects() {
  return (
    <>
      <PageBanner
        pageTitle={"Projects"}
        breadTitle={"Projects"}
        bgImage={"/img/projects/10.png"}
      />
      <ProjectsPageContent />
    </>
  );
}

export default Projects;
