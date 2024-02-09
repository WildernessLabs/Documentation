const fs = require('fs').promises;
const path = require('path');

// Get the starting directory from command line arguments
const startDir = process.argv[2] ? process.argv[2] : './docs/api/';

// Function to replace the specified pattern in file content
const replacePatternInFile = async (filePath, pattern) => {
    try {
      let data = await fs.readFile(filePath, 'utf8');
      // Replacement logic adjusted for the specific regex
      const result = data.replace(pattern, (match, p1) => match.replace(`/${p1}`, '/'));
      await fs.writeFile(filePath, result, 'utf8');
      console.log(`File updated: ${filePath}`);
    } catch (err) {
      console.error(`Error processing file: ${filePath}`, err);
    }
  };
  
  // Recursive function to walk through directories
  const walkAndReplace = async (dir, regexPattern) => {
    let files = await fs.readdir(dir, { withFileTypes: true });
    for (let file of files) {
      let fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        await walkAndReplace(fullPath, regexPattern); // Recurse into subdirectories
      } else {
        await replacePatternInFile(fullPath, regexPattern); // Process files
      }
    }
  };
  
  // Regex pattern specified by your requirement
  const regexPattern = /(?:\(..\/(.*\/).*\))/g;
  
  // Start the process
  walkAndReplace(startDir, regexPattern)
    .then(() => console.log('Replacement process completed.'))
    .catch(err => console.error('An error occurred:', err));