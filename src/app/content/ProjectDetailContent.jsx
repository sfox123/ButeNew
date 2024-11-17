"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import PageBannerTwo from "@components/PageBannerTwo";
import Link from "next/link";
import MyGallery from "../_components/sliders/ImageGallery";

const FullImageSlider = dynamic(() => import("@components/sliders/FullImage"), {
  ssr: false,
});

function ProjectDetailContent({ postData, prev, next }) {
  console.log(postData.gallery);
  return (
    <>
      <PageBannerTwo
        subTitle={postData.category}
        title={postData.title}
        bgImage={postData.image}
      />

      {/* Description */}
      {/* Description End */}

      <div className="container mb-5">
        <div className="mil-divider-lg" />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <MyGallery items={postData.gallery} />
      </Suspense>

      {/* Resume */}
      {/* Resume End */}

      <div className="container mt-5">
        <div className="mil-divider-lg" />
      </div>

      {/* Next/Prev Project */}
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
      {/* Next/Prev Project End */}
    </>
  );
}

export default ProjectDetailContent;
