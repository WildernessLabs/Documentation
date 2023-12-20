const sharp = require("sharp");
const glob = require("glob");
const fs = require('fs');


const targetFolder = process.argv[2] || "."; // You can specify the folder as a command-line argument

// Function to compress images
const compressImage = (filePath) => {
//   console.log(`Attempting to compress: ${filePath}`);
  ("");
  if (filePath.endsWith("png")) {
    sharp(filePath)
      .png({ quality: 80 })
      .toFile("__tmp__/"+ filePath)
      .then(() => console.log(`Compressed: ${outputPath}`))
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  } else if (filePath.endsWith("jpg") || filePath.endsWith("jpeg"))
  {
    sharp(filePath)
      .jpeg({ mozjpeg: true, quality: 80 })
      .toFile("__tmp__/"+ filePath)
      .then(() => console.log(`Compressed: ${outputPath}`))
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  }
};

const renameImage = (filePath) => {
    console.log(`Attempting to rename: ${filePath}`);

    const tmpPath = "__tmp__/"+ filePath;

    try {
        fs.unlinkSync(filePath);
        console.log(`File deleted: ${filePath}`);
    } catch (err) {
        console.error('Error deleting file:', err);
    }
    
    try {
        fs.renameSync(tmpPath, filePath);
    } catch (err) {
        console.error('Error renaming file:', err);
    }
}

// Glob pattern to find images (jpg and png)
const pattern = `${targetFolder}/**/*.+(jpg|jpeg|png)`;

images = glob.globSync(pattern, (err, files) => {
  if (err) {
    console.error("Error finding files:", err);
    return;
  }
});

images.forEach(compressImage);
images.forEach(renameImage);
