const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs");

const targetFolder = process.argv[2] || "."; // You can specify the folder as a command-line argument

// Function to compress images
const compressImage = (filePath) => {
  //   console.log(`Attempting to compress: ${filePath}`);
  let image = sharp(filePath);
  if (filePath.endsWith("png")) {
    image
      .metadata()
      .then((metadata) => {
        if (metadata.width > 1000) {
          return image.resize(1000).png().toBuffer();
        }
        return image;
      })
      .png({ quality: 80 })
      .toFile(filePath + "__tmp")
      .then(() => {
        console.log(`Compressed: ${filePath}`);
        renameImage(filePath);
      })
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  } else if (filePath.endsWith("jpg") || filePath.endsWith("jpeg")) {
    image
      .metadata()
      .then((metadata) => {
        if (metadata.width > 1000) {
          return image.resize(1000).jpeg().toBuffer();
        }
        return image;
      })
      .jpeg({ mozjpeg: true, quality: 80 })
      .toFile(filePath + "__tmp")
      .then(() => {
        console.log(`Compressed: ${filePath}`);
        renameImage(filePath);
      })
      .catch((err) => console.error(`Error compressing ${filePath}:`, err));
  }
};

const renameImage = (filePath) => {
  console.log(`Attempting to rename: ${filePath}`);

  const tmpPath = filePath + "__tmp";

  try {
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (err) {
    console.error("Error deleting file:", err);
  }

  try {
    fs.renameSync(tmpPath, filePath);
  } catch (err) {
    console.error("Error renaming file:", err);
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
