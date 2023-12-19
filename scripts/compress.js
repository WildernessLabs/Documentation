const sharp = require('sharp');
const glob = require('glob');

const targetFolder = process.argv[2] || '.'; // You can specify the folder as a command-line argument

// Function to compress images
const compressImage = (filePath) => {

    console.log(`Attempting to compress: ${filePath}`);

  sharp(filePath)
    .compressImage(filePath)
    .toFile(filePath)
    .then(() => console.log(`Compressed: ${outputPath}`))
    .catch(err => console.error(`Error compressing ${filePath}:`, err));
};

// Glob pattern to find images (jpg and png)
const pattern = `${targetFolder}/**/*.+(jpg|jpeg|png)`;

images = glob.globSync(pattern, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }  
});

images.forEach(compressImage);