const fs = require('fs');

// Define the file path
const filePath = './gear-descriptions.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const brawlers = JSON.parse(data);
  console.log(brawlers.length);
  // Print the JSON data to the consol

  // Write the data back to the file
  fs.writeFile(filePath, JSON.stringify(brawlers, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }
    console.log('Data has been written back to the file');
  });
});
