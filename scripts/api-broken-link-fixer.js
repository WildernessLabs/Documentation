const fs = require("fs").promises;
const { Dirent } = require("fs");
const path = require("path");

// Get the starting directory from command line arguments
const startDir = process.argv[2] ? process.argv[2] : "./docs/api/";

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

  // JOB 1
  const pattern1 = /(?:\(..\/(.*\/).*\))/g;
  try {
    let data = await fs.readFile(filePath, "utf8");

    // Replacement logic adjusted for the specific regex
    const result = data.replace(pattern1, (match, p1) =>
      match.replace(`/${p1}`, "/")
    );

    // await fs.writeFile(filePath, result, "utf8");
    // console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
  // END JOB 1

  // JOB 2
  const pattern2 = /(?:\[(.*)\]\(..\/(.*)\))/g;
  try {
    let data = await fs.readFile(filePath, "utf8");

    // Replacement logic adjusted for the specific regex
    const result = data.replace(pattern2, (match, p1, p2) => {
      if(!p1.includes(p2)) return; //We are only interested in the broken ones
      const baseClass = p1.replace(`.${p2}`, "");
      const newString = `[${p1}](./${baseClass}/${p2})`;
      console.log(newString);
      return newString;
    });

    // await fs.writeFile(filePath, result, "utf8");
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
  .then(() => console.log("Replacement process completed."))
  .catch((err) => console.error("An error occurred:", err));
