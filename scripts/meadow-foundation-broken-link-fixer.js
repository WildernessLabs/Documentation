const fs = require('fs');
const path = require('path');

// Specify the directory containing the markdown files
const directoryPath = process.argv[2] ? process.argv[2] : './docs/api/Meadow.Foundation/';
console.log("Fixing links for './docs/api/Meadow.Foundation/'")

// Read the directory content
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // Filter and process only .md files
  files.filter(file => path.extname(file) === '.md').forEach(file => {
    const filePath = path.join(directoryPath, file);

    // Read the content of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }

      // Use the provided regex pattern to find and replace matches
      const modifiedData = data.replace(/(?:\[(.*)\]\(..\/(.*)\))(?::| |)/gm, (match, p1, p2) => {
        // Change the second capture group as requested
        // example: [Meadow.Foundation.Displays.Led.FourteenSegment.Segment](./Meadow.Foundation.Displays.Led/FourteenSegment.Segment)
        const baseClass = p1.replace(`.${p2}`, "");
        // if(p1.includes('Meadow.Foundation.Sensors.Atmospheric.Ccs811.MeasurementMode'))
        // console.log(p1, p2, baseClass);
        const newString = `[${p1}](../${baseClass}/${p2})`;
        console.log(newString);
        return newString;
      });

      // Write the modified content back to the file
      fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) return console.log(err);
        console.log(`File processed: ${filePath}`);
      });
    });
  });
});
