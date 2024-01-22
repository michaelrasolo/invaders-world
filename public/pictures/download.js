const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cities = require('../modifiedCities.json')

async function downloadPictures(city) {
  const folderPath = path.join(__dirname, city.url);

  // Create folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Download pictures
  for (let i = 0; i < city.pictures.length; i++) {
    const pictureUrl = city.pictures[i];
    const pictureName = `picture_${city.url}_${i + 1}.jpg`;
    const picturePath = path.join(folderPath, pictureName);

    const response = await axios({
      method: 'get',
      url: pictureUrl,
      responseType: 'stream',
    });

    response.data.pipe(fs.createWriteStream(picturePath));

    console.log(`Downloaded ${pictureName} for ${city.name}`);
  }
}

// Loop through each city and download pictures
for (const city of cities) {
  downloadPictures(city);
}
