const express = require('express');
const axios = require('axios');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing

const app = express();
app.use(cors()); // Use CORS to allow requests from your React Native app

const PORT = process.env.PORT || 5500;

app.get('/api/trails', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
    params: {
      lat: '49.2609',
      lon: '-123.1140',
      radius: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5669b159admsha09c5cbd734142fp17651ajsn807ca9694a93',
      'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching trail data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

