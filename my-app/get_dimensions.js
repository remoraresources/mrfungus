const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const directoryPath = path.join(__dirname, 'public/images/process');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    const dimensions = {};
    files.forEach(function (file) {
        if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg')) {
            try {
                const dimensionsResult = sizeOf(path.join(directoryPath, file));
                dimensions[file] = { width: dimensionsResult.width, height: dimensionsResult.height };
            } catch (e) {
                console.error(`Error reading ${file}:`, e);
            }
        }
    });
    console.log(JSON.stringify(dimensions, null, 2));
});
