const request = require('request');
// retrieve a cat breed description by entering a breed name as a command line argument
const breedFetcher = function() {
  const url = "https://api.thecatapi.com/v1/breeds/search";
  const args = process.argv.slice(2);
  const searchParam = url + "?q=" + args[0];
  // make an HTTP request
  request(searchParam, (error, response, body) => {
    if (error) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
    }
    const data = JSON.parse(body);
    if (!data.length) {
      // if data is an empty array
      console.log("Sorry, breed not found!");
    } else {
      // log the breed description to the console
      console.log(data[0].description);
    }
  });
};

breedFetcher();