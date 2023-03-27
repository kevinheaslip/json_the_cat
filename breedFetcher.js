const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
    }
    const data = JSON.parse(body);
    
    if (error) {
      callback(error, null);
      return;
    }
  
    if (!error) {
      callback(null, data[0].description);
      return;
    }

  });
};

module.exports = { fetchBreedDescription };
