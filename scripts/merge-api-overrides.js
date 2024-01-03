const fs = require('fs');
const path = require('path');

// Directory locations
const targetFolder = process.argv[2] || "";
if(!targetFolder)
{
    console.error(`Please supply a target folder, like this for example, "node ./scripts/merge-api-overrides.js Meadow.Foundation"`, null);
    return;
}
const folderA = `./docs/api/${targetFolder}`;
const folderB = `./api/${targetFolder}`;

// Read all markdown files from folder A
fs.readdir(folderA, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((fileA, index) => {
        if (path.extname(fileA) === ".md") {
            // Construct the full path for fileA
            const fullPathA = path.join(folderA, fileA);

            // Read the contents of fileA
            fs.readFile(fullPathA, 'utf8', (err, dataA) => {
                if (err) {
                    console.error(`Could not read the file: ${fullPathA}`, err);
                    return;
                }

                // Extract the part of the name to form the new path and filename
                const parts = fileA.split('.');
                const newFileName = parts[parts.length - 2] + ".md"; // "MicroAudio.md"
                const newPath = path.join(folderB, parts.slice(0, -2).join('.')); // "./api/Meadow.Foundation/Meadow.Foundation.Audio"

                const fullPathB = path.join(newPath, newFileName);

                // Read the contents of the corresponding file in folder B
                fs.readFile(fullPathB, 'utf8', (err, dataB) => {
                    if (err) {
                        console.error(`Could not read the file: ${fullPathB}`, err);
                        return;
                    }

                    // Find the first '#' character and get all content from there
                    const contentToAdd = "\n" + dataB.substring(dataB.indexOf('#'));

                    // Append this content to the original file in folder A
                    fs.appendFile(fullPathA, contentToAdd, (err) => {
                        if (err) {
                            console.error(`Could not append to the file: ${fullPathA}`, err);
                            return;
                        }
                        console.log(`Updated file successfully: ${fullPathA}`);
                    });
                });
            });
        }
    });
});
