import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import {
  getSortedProjectsData,
  getAllProjectsIds,
  getProjectData,
} from "@library/projects";

import PageBannerTwo from "@components/PageBannerTwo";
import Link from "next/link";

// Import ProjectsMasonry component
const ProjectsMasonry = dynamic(() => import("@components/ProjectsMasonry"), {
  ssr: false,
});

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(params);

  return {
    title: `${postData.title} | Projects`,
  };
}

async function ProjectDetail({ params }) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();

  // Prev and next navigation logic remains the same
  let prev = { id: 0, key: 0 };
  let next = { id: 0, key: 0 };
  let first = { id: 0 };
  let last = { id: 0 };

  projects.forEach(function (item, key) {
    if (item.id === postData.id) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  });

  projects.forEach(function (item, key) {
    if (key === prev.key) {
      prev.id = item.id;
    }
    if (key === next.key) {
      next.id = item.id;
    }
    if (key === 0) {
      first.id = item.id;
    }
    if (key === projects.length - 1) {
      last.id = item.id;
    }
  });

  if (prev.key === -1) {
    prev.id = last.id;
  }
  if (next.key === projects.length) {
    next.id = first.id;
  }

  return (
    <>
      <PageBannerTwo
        subTitle={postData.intro.subtitle}
        title={postData.intro.title}
        bgImage={postData.intro.bgImage}
      />

      {/* Gallery */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            {postData.gallery.map((item, key) => (
              <div
                className="col-lg-4 col-md-6 mil-masonry-item mil-mb-30"
                key={`gallery-item-${key}`}
              >
                <div className="mil-project-card mil-wow fadeInUp">
                  <div className="mil-image-frame">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery end */}

      {/* Next/Prev project */}
      <section>
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              {prev.id !== 0 && (
                <div className="mil-prev-project mil-mb-60">
                  <h4 className="mil-upper mil-up mil-mb-30">
                    Previous project
                  </h4>
                  <Link
                    href={`/projects/${prev.id}`}
                    className="mil-link mil-left-link mil-upper mil-up"
                  >
                    Previous work{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-6 col-lg-6">
              {next.id !== 0 && (
                <div className="mil-next-project mil-mb-60">
                  <h4 className="mil-upper mil-up mil-mb-30">Next project</h4>
                  <Link
                    href={`/projects/${next.id}`}
                    className="mil-link mil-upper mil-up"
                  >
                    Next work{" "}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Next/Prev project end */}
    </>
  );
}

export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds();
  return paths;
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(params.id);

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData();
  return allProjects;
}
