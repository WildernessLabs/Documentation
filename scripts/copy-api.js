const fse = require('fs-extra');
const path = require('path');

// Define source and destination directories
const source1 = path.join('.', 'docfx', 'api-override');
const source2 = path.join('.', 'api');
const destination = path.join('.', 'docs', 'api');


// Function to copy directories
async function copyDirectories() {
    try {
        // Copying contents from "./docfx/api-override/" to "./docs/api/"
        await fse.copy(source1, destination);
        console.log(`Copied from ${source1} to ${destination}`);

        // Copying contents from "./api/" to "./docs/api/"
        await fse.copy(source2, destination);
        console.log(`Copied from ${source2} to ${destination}`);

        console.log('Copy operations completed successfully!');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Run the function
copyDirectories();
