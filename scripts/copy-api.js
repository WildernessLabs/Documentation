const fse = require('fs-extra');
const path = require('path');

// Define source and destination directories
const source = path.join('.', 'api');
const destination = path.join('.', 'docs', 'api');


// Function to copy directories
async function copyDirectories() {
    try {
        // Copying contents from "./api/" to "./docs/api/"
        await fse.copy(source, destination);
        console.log(`Copied from ${source} to ${destination}`);

        console.log('Copy operations completed successfully!');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Run the function
copyDirectories();
