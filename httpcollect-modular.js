var getResponseAsString = require('./getResponseAsString');

getResponseAsString(process.argv[2], function(err, responseString) {

  if (err) {
    console.error("An error occurred: " + err);
  }
  console.log(responseString.length);
  console.log(responseString);
});
