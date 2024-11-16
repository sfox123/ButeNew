import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import data from "@data/projects/data.json"; // Import the data.json file

import PageBannerTwo from "@components/PageBannerTwo";
import BenefitsSection from "@components/sections/Benefits";
const FullImageSlider = dynamic(() => import("@components/sliders/FullImage"), {
  ssr: false,
});

import Link from "next/link";

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(params);

  return {
    title: postData.title + " | Projects",
  };
}

async function ProjectDetail({ params }) {
  const postData = await getSingleProjectData(params);
  const projects = data.projects; // Use the projects data from data.json

  //prev next navigation
  let prev = { id: 0, key: 0 };
  let next = { id: 0, key: 0 };
  let first = { id: 0 };
  let last = { id: 0 };

  projects.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  });

  projects.forEach(function (item, key) {
    if (key == prev.key) {
      prev.id = item.id;
    }
    if (key == next.key) {
      next.id = item.id;
    }
    if (key == 0) {
      first.id = item.id;
    }
    if (key == projects.length - 1) {
      last.id = item.id;
    }
  });

  if (prev.key == -1) {
    prev.id = last.id;
  }
  if (next.key == projects.length) {
    next.id = first.id;
  }

  return (
    <>
      <PageBannerTwo
        subTitle={postData.category}
        title={postData.title}
        bgImage={postData.image}
      />

      {/* description */}
      {/* description end */}

      <div className="container mb-5">
        <div className="mil-divider-lg" />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FullImageSlider items={postData.gallery} />
      </Suspense>

      {/* resume */}

      {/* resume end */}

      <div className="container mt-5">
        <div className="mil-divider-lg" />
      </div>

      {/* next/prev project */}
      <section>
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              {prev.id != 0 && (
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
              {next.id != 0 && (
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
      {/* next/prev project end */}
    </>
  );
}
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = data.projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return paths;
}

async function getSingleProjectData(params) {
  const postData = data.projects.find(
    (project) => project.id.toString() === params.id
  );

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}
