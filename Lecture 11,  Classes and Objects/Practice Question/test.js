const fs = require('fs');

// Content to write into the new file
const content = 'This is a new file created using Node.js!';

// Create and write to the file
fs.writeFile('newFile.txt', content, (err) => {
    if (err) {
        console.error('An error occurred while creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});
