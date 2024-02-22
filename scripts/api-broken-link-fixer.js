const fs = require("fs").promises;
const { Dirent } = require("fs");
const path = require("path");

// Get the starting directory from command line arguments
const startDir = process.argv[2] ? process.argv[2] : "./api/";

// Function to replace the specified pattern in file content
const replacePatternInFile = async (dir, file) => {
  const parts = dir.split("/");
  const parentDir = parts[parts.length - 1];
  let noMd = file.name.replace(".md", "");
  const filePath = path.join(dir, file.name);
  // if(filePath === "docs/api/Meadow/Meadow/Meadow.md") console.log(filePath, parentDir, noMd);
  if (file.name === "index.md" || parentDir === noMd) {
    console.log(`skipped: ${filePath}`);
    return;
  }

  // JOB 1 - Fix basic links
  const pattern1 = /(?:\(..\/(.*\/).*\))/g;
  try {
    let data = await fs.readFile(filePath, "utf8");

    // Replacement logic adjusted for the specific regex
    let result = data.replace(pattern1, (match, p1) =>
      match.replace(`/${p1}`, "/")
    );

    await fs.writeFile(filePath, result, "utf8");
    console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  // END JOB 1

  // JOB 2 - Fix type links
  try {
    let data = await fs.readFile(filePath, "utf8");
    const pattern2 = /(?:\[(.*)\]\(..\/(.*)\))/g;
    const slugPattern = /slug: (.*)/;
    const slugMatches = data.match(slugPattern);
    const slug = slugMatches ? slugMatches[1] : null;
    // Replacement logic adjusted for the specific regex
    result = data.replace(pattern2, (match, p1, p2) => {
      let newString = match;
      const baseClass = p1.replace(`.${p2}`, "");
      const { slugBaseClass, slugBasePath } = ((ss) => {
        let parts = slug.split("/");
        const slugBaseClass = parts[parts.length - 2];
        let slugBasePath = parts.join("/").replace(parts[parts.length - 1], "");
        slugBasePath = slugBasePath.slice(0, -1);
        return {
          slugBaseClass,
          slugBasePath,
        };
      })();

      filePath;
      if (slugBaseClass === baseClass) {
        newString = `[${p1}](${slugBasePath}/${p2})`;
      } else {
        if (!p1.includes(p2)) {
          const linkBaseClassArr = baseClass.split(".");
          linkBaseClassArr.pop();
          const linkBaseClass = linkBaseClassArr.join(".");
          if (linkBaseClass === slugBaseClass) {
            newString = `[${p1}](${slugBasePath}/${p2})`;
          } else {
            newString = `[${p1}](${slugBasePath}/${linkBaseClass}/${p2})`;
          }
        } else {
          let libParts = baseClass.split(".");
          libParts.pop();
          let lib = libParts.join(".");
          newString = `[${p1}](/docs/api/${lib}/${baseClass}/${p2})`;
        }
      }

      return newString;
    });

    await fs.writeFile(filePath, result, "utf8");
    console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  // END JOB 2

  // JOB 3 - Fix broken github source links
  try {
    let data = await fs.readFile(filePath, "utf8");
    const pattern3 = /(?:\[View Source\]\((.* .*)\))/g;
    // Replacement logic adjusted for the specific regex
    result = data.replace(
      pattern3,
      (match, p1) => `[View Source](${p1.replace(" ", "%20")})`
    );

    await fs.writeFile(filePath, result, "utf8");
    console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  // END JOB 2
};

// Recursive function to walk through directories
const walkAndReplace = async (dir) => {
  let files = await fs.readdir(dir, { withFileTypes: true });
  for (let file of files) {
    if (file.isDirectory()) {
      let fullPath = path.join(dir, file.name);
      await walkAndReplace(fullPath); // Recurse into subdirectories
    } else {
      await replacePatternInFile(dir, file); // Process files
    }
  }
};

// Start the process
walkAndReplace(startDir)
  .then(() => console.log("Replacement process completed."))
  .catch((err) => console.error("An error occurred:", err));
