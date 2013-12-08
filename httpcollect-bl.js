http = require('http');
bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function(err, data) {
    if (err) console.log('An error occurred: ' + err);
    console.log(data.toString().length);
    console.log(data.toString());
    }));

});
