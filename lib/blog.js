import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";
import codeExtra from "remark-code-extra";

const postsDirectory = path.join(process.cwd(), "blog");

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedData = await remark()
    .use(html)
    .use(highlight)
    .use(codeExtra, {
      transform: (node) =>
        node.meta
          ? {
              transform: (node) => {
                node.data.hChildren[0].children[0].children.push({
                  type: "element",
                  tagName: "div",
                  properties: {
                    className: ["filename"],
                  },
                  children: [
                    {
                      type: "text",
                      value: node.meta,
                    },
                  ],
                });
              },
            }
          : null,
    })
    .process(matterResult.content);

  const contentHtml = processedData.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsCategories() {
  const fileNames = fs.readdirSync(postsDirectory);

  const categories = fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);
      const categories = matterResult.data.categories
        .replace(" ", "-")
        .split(",");

      return categories;
    })
    .flat()
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return categories.map((category) => {
    return {
      params: {
        id: category,
      },
    };
  });
}

export function getSortedCategoryPosts(category) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
    .filter((data) => {
      return data.categories.replace(" ", "-").split(",").includes(category);
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
