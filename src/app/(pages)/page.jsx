import React from "react";
import AppData from "@data/app.json";
import { getSortedPostsData } from "@library/posts";

import HomePageContent from "@/src/app/content/HomePageContent";

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
      <HomePageContent posts={posts} />
    </>
  );
}
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}
