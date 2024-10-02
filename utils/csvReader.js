const fs = require('fs');
const csv = require('csv-parser');

async function readCsvData(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

module.exports = { readCsvData };
