import React from "react";
import { notFound } from "next/navigation";
import data from "@data/projects/data.json";
import ProjectDetailContent from "@/src/app/content/ProjectDetailContent";

export async function generateMetadata({ params }) {
  const postData = getSingleProjectData(params);

  return {
    title: postData.title + " | Projects",
  };
}

function ProjectDetail({ params }) {
  const postData = getSingleProjectData(params);

  // Calculate previous and next projects
  const { prev, next } = getPrevNextProjects(postData);

  return (
    <>
      <ProjectDetailContent postData={postData} prev={prev} next={next} />
    </>
  );
}

export default ProjectDetail;

export function generateStaticParams() {
  const paths = data.projects.map((project) => ({
    id: project.id.toString(),
  }));

  return paths;
}

function getSingleProjectData(params) {
  const postData = data.projects.find(
    (project) => project.id.toString() === params.id
  );

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}

function getPrevNextProjects(postData) {
  const projects = data.projects;

  let prev = { id: 0 };
  let next = { id: 0 };
  let currentIndex = projects.findIndex((item) => item.id == postData.id);

  if (currentIndex > 0) {
    prev.id = projects[currentIndex - 1].id;
  } else {
    prev.id = projects[projects.length - 1].id;
  }

  if (currentIndex < projects.length - 1) {
    next.id = projects[currentIndex + 1].id;
  } else {
    next.id = projects[0].id;
  }

  return { prev, next };
}
