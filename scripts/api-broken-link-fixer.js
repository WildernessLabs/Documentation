const fs = require("fs").promises;
const { Dirent } = require("fs");
const path = require("path");

// Get the starting directory from command line arguments
const startDir = process.argv[2] ? process.argv[2] : "./docs/api/";

// Function to replace the specified pattern in file content
const replacePatternInFile = async (dir, file, pattern) => {
  const parts = dir.split("/");
  const parentDir = parts[parts.length - 1];
  let noMd = file.name.replace(".md", "");
  const filePath = path.join(dir, file.name);
  // if(filePath === "docs/api/Meadow/Meadow/Meadow.md") console.log(filePath, parentDir, noMd);
  if (file.name === "index.md" || parentDir === noMd)
  {
    console.log(`skipped: ${filePath}`)
    return;
  }

  try {
    let data = await fs.readFile(filePath, "utf8");

    // Replacement logic adjusted for the specific regex
    const result = data.replace(pattern, (match, p1) =>  match.replace(`/${p1}`, '/'));

    await fs.writeFile(filePath, result, "utf8");
    console.log(`File updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file: ${filePath}`, err);
  }
};

// Recursive function to walk through directories
const walkAndReplace = async (dir, regexPattern) => {
  let files = await fs.readdir(dir, { withFileTypes: true });
  for (let file of files) {
    if (file.isDirectory()) {
      let fullPath = path.join(dir, file.name);
      await walkAndReplace(fullPath, regexPattern); // Recurse into subdirectories
    } else {
      await replacePatternInFile(dir, file, regexPattern); // Process files
    }
  }
};

// Regex pattern specified by your requirement
const regexPattern = /(?:\(..\/(.*\/).*\))/g;

// Start the process
walkAndReplace(startDir, regexPattern)
  .then(() => console.log("Replacement process completed."))
  .catch((err) => console.error("An error occurred:", err));
