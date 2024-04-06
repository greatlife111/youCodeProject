const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
  params: {
    lat: '49.2609',
    lon: '-123.114',
    radius: '50'
  },
  headers: {
    'X-RapidAPI-Key': '5669b159admsha09c5cbd734142fp17651ajsn807ca9694a93',
    'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
  }
};
async function getTrailMaps() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getTrailMaps();
