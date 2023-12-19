const sharp = require('sharp');
const glob = require('glob');
const path = require('path');

const targetFolder = process.argv[2] || '.'; // You can specify the folder as a command-line argument

// Function to compress images
const compressImage = (filePath) => {
  const outputPath = path.join(path.dirname(filePath), 'compressed', path.basename(filePath));
  
  sharp(filePath)
    .resize(1024) // or any other dimensions you prefer
    .jpeg({ quality: 80 }) // adjust the quality
    .toFile(outputPath)
    .then(() => console.log(`Compressed: ${outputPath}`))
    .catch(err => console.error(`Error compressing ${filePath}:`, err));
};

// Glob pattern to find images (jpg and png)
const pattern = `${targetFolder}/**/*.+(jpg|jpeg|png)`;

glob(pattern, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach(compressImage);
});
