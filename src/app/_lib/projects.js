import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "src/data/projects");

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.[^/.]+$/, ""); // Remove file extension

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allData.sort((a, b) => (a.id > b.id ? 1 : -1));
}

export function getRelatedProjects(current_id) {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData = [];

  fileNames.forEach((fileName) => {
    const id = fileName.replace(/\.[^/.]+$/, "");

    if (id !== current_id) {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      allData.push({
        id,
        ...matterResult.data,
      });
    }
  });

  return allData.sort((a, b) => (a.category > b.category ? 1 : -1));
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.[^/.]+$/, ""), // Remove file extension
      },
    };
  });
}

export async function getProjectData(id) {
  // Find the file that matches the id regardless of extension
  const fileNames = fs.readdirSync(projectsDirectory);
  const matchingFileName = fileNames.find(
    (fileName) => fileName.replace(/\.[^/.]+$/, "") === id
  );

  if (matchingFileName) {
    const fullPath = path.join(projectsDirectory, matchingFileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } else {
    console.error(`Project with id '${id}' not found`);
    return null;
  }
}
