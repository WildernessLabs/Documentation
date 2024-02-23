const fs = require("fs").promises;
const fsSync = require("fs");
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
  // if(filePath === "docs/api/Meadow/Meadow/Meadow.md") // console.log(filePath, parentDir, noMd);
  if (file.name === "index.md" || parentDir === noMd) {
    // console.log(`skipped: ${filePath}`);
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
    // console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  // END JOB 1

  // JOB 2 - Fix type links
  try {
    let data = await fs.readFile(filePath, "utf8");
    const pattern2 = /(?:\[(.*)\]\(..\/(.*?)\))/g;
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

      if (slugBaseClass === baseClass) {
        const newPath = resolvePathToMdFile(
          filePath,
          [`${slugBasePath}/${p2}`],
          p2,
          "CASE 1"
        );
        newString = createMdLink(p1, newPath);
      } else {
        if (!p1.includes(p2)) {
          const linkBaseClassArr = baseClass.split(".");
          linkBaseClassArr.pop();
          const linkBaseClass = linkBaseClassArr.join(".");
          linkBaseClassArr.pop();
          const linkBaseClass2 = linkBaseClassArr.join(".");
          if (linkBaseClass === slugBaseClass) {
            const newPath = resolvePathToMdFile(
              filePath,
              [`${slugBasePath}/${p2}`],
              p2,
              "CASE 2"
            );
            newString = createMdLink(p1, newPath);
          } else {
            let newPath = resolvePathToMdFile(
              filePath,
              [
                `${slugBasePath}/${linkBaseClass}/${p2}`,
                `/docs/api/${slugBaseClass}/${slugBaseClass}/${p2}`,
                `/docs/api/${slugBaseClass}/${linkBaseClass}/${p2}`,
                `/docs/api/${slugBaseClass}/${linkBaseClass2}/${p2}`,
                `/docs/api/${linkBaseClass2}/${linkBaseClass}/${p2}`,
              ],
              p2,
              "CASE 3"
            );
            newString = createMdLink(p1, newPath);
          }
        } else {
          let libParts = baseClass.split(".");
          libParts.pop();
          let lib = libParts.join(".");
          const newPath = resolvePathToMdFile(
            filePath,
            [
              `/docs/api/${lib}/${baseClass}/${p2}`,
              `/docs/api/${baseClass}/${baseClass}/${p2}`,
            ],
            p2,
            "CASE 4"
          );
          newString = createMdLink(p1, newPath);
        }
      }

      newString = newString.replace("/docs/docs/", "/docs/");
      return newString;
    });

    await fs.writeFile(filePath, result, "utf8");
    // console.log(`File updated: ${filePath}`);
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
    // console.log(`File updated: ${filePath}`);
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
  .then(() =>
    console.log(
      `Replacement process completed. Detected ${howManyBorked} borked links. Found ${found} files.`
    )
  )
  .catch((err) => console.error("An error occurred:", err));

let howManyBorked = 0;
const anchorRegex = /(.*)(#.*| .*)/;
const resolvePathToMdFile = (
  sourcePath,
  pathPossibilities,
  fileName,
  codeCase
) => {
  let hasCountedBork = false;
  let fullPath = "";

  for (pt of pathPossibilities) {
    // if (howManyBorked < 5) console.log(pt)
    var starterPath = pt
      .replace("/docs/api/", "./api/")
      .replace(anchorRegex, (match, p1) => p1);
    fullPath = path.resolve(process.cwd(), `${starterPath}.md`);
    const exists = fsSync.existsSync(fullPath);
    if (exists) {
      if (hasCountedBork) {
        howManyBorked--;
        // console.log("FIXED through extra attempt");
      }
      return pt;
    } else {
      if (!hasCountedBork) {
        howManyBorked++;
        hasCountedBork = true;
      }
    }
  }

  var file = findFileRecursive(startDir, fileName);
  
  if (file) 
  {
    const newPath = `/docs/${file.replace(".md", "")}`;
    //console.log(newPath)
    return newPath;
  }
  
  console.log(`Could not find ${fileName} in ${sourcePath}`);
  return false;
};

/**
 * Recursively searches for a file with a given filename starting from a root directory.
 *
 * @param {string} dirPath - The root directory to start the search from.
 * @param {string} filename - The filename to search for.
 * @returns {string|null} The path to the file if found, or null if not found.
 */
let found = 0;
function findFileRecursive(dirPath, fileName) {
  let mdFile = !fileName.includes(".md")
    ? `${fileName.replace(anchorRegex, (match, p1) => p1)}.md`
    : fileName;
  // Get the list of files and directories in the current directory
  const entries = fsSync.readdirSync(dirPath, { withFileTypes: true });

  // Loop through each entry in the directory
  for (let entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    // If the entry is a directory, recurse into it
    if (entry.isDirectory()) {
      const foundPath = findFileRecursive(fullPath, mdFile);
      if (foundPath) {
        return foundPath; // File found in a subdirectory
      }
    } else if (entry.isFile() && entry.name === mdFile) {
      found++;
      return fullPath; // File found
    }
  }

  // File not found in this directory or its subdirectories
  return null;
}

const createMdLink = (linkName, newPath) => {
  return newPath ? `[${linkName}](${newPath})` : linkName;
}