import React from "react";
import AppData from "@data/app.json";
import { getSortedTeamData } from "@library/team";
import PageBanner from "@components/PageBanner";
import TeamPageContent from "@/src/app/content/TeamPageContent";

export const metadata = {
  title: {
    default: "Team",
  },
  description: AppData.settings.siteDescription,
};

async function Team() {
  const team = await getAllTeam();

  return (
    <>
      <PageBanner
        pageTitle={"Sustainability"}
        breadTitle={"Sustainability"}
        bgImage={"/img/projects/7.png"}
      />

      <TeamPageContent team={team} />
    </>
  );
}

export default Team;

async function getAllTeam() {
  const allTeam = getSortedTeamData();
  return allTeam;
}
