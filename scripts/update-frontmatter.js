const fse = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

const source = path.join('.', 'api');

// Function to update frontmatter with slug
async function updateFrontMatter(file) {
    try {
        // Read file content
        const content = await fse.readFile(file, 'utf8');
        // Parse frontmatter
        const parsed = matter(content);

        // Check if slug already exists
        if (!parsed.data.slug) {
            const relativePath = path.relative(source, file);
            const fileName = path.basename(file, '.md');
            const dirName = path.basename(path.dirname(file));
            let slugPath = path.dirname(relativePath);

            // Adjust slug for specific filenames
            if (!(fileName === 'index' || fileName === dirName)) {
                slugPath = path.join(slugPath, fileName);
            }

            // Construct slug
            const slug = `/docs/api/${slugPath.replace(/\\/g, '/')}`;

            // Update frontmatter
            const updatedFrontmatter = {
                ...parsed.data,
                slug
            };

            // Write updated content back to file
            const updatedContent = matter.stringify(parsed.content, updatedFrontmatter);
            await fse.writeFile(file, updatedContent);
            console.log(`Updated slug for: ${file}`);
        }
    } catch (err) {
        console.error(`An error occurred while updating ${file}:`, err);
    }
}

// Function to recursively process all markdown files in a directory
async function processDirectory(dir) {
    try {
        const files = await fse.readdir(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = await fse.stat(fullPath);

            if (stat.isDirectory()) {
                await processDirectory(fullPath); // Recurse into directories
            } else if (path.extname(file) === '.md') {
                await updateFrontMatter(fullPath); // Process markdown files
            }
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Start the process
processDirectory(source);
