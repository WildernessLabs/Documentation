const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs");

const targetFolder = process.argv[2] || "."; // You can specify the folder as a command-line argument

// Function to compress images
const compressImage = (filePath) => {
  console.log(`Attempting to compress: ${filePath}`);
  ("");
  if (filePath.endsWith("png")) {
    sharp(filePath)
      .png({ quality: 80 })
      .toBuffer(function (err, buffer) {
        fs.writeFile(filePath, buffer, function (e) {});
      })
      .then(() => console.log(`Compressed: ${outputPath}`))
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  } else if (filePath.endsWith("jpg") || filePath.endsWith("jpeg")) {
    sharp(filePath)
      .jpeg({ mozjpeg: true, quality: 80 })
      .toBuffer(function (err, buffer) {
        fs.writeFile(filePath, buffer, function (e) {});
      })
      .then(() => console.log(`Compressed: ${outputPath}`))
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  }
};

// Glob pattern to find images (jpg and png)
const pattern = `${targetFolder}/**/*.+(jpg|jpeg|png)`;

images = glob.globSync(pattern, (err, files) => {
  if (err) {
    console.error("Error finding files:", err);
    return;
  }
});

images.forEach(compressImage);
