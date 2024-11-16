"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";

const TeamMasonry = dynamic(() => import("@components/TeamMasonry"), {
  ssr: false,
});

function TeamPageContent({ team }) {
  return (
    <>
      {/* Team Section */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">
              Environmental consciousness is a key focus for us at Bute
              Constructions. We make every effort to minimize our environmental
              impact in all our projects. We value the importance of
              eco-friendly practices while delivering top-quality and reliable
              services to our clients. Throughout our business, we prioritize
              sustainability, ensuring compliance with regulations while
              exceeding environmental goals.
              <br />
              To achieve this, we work closely with our clients to adopt the
              most efficient and environmentally conscious methods of operation.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <TeamMasonry team={team} categories={AppData.team.categories} />
          </Suspense>
        </div>
      </section>
      {/* Team Section End */}
    </>
  );
}

export default TeamPageContent;
