var http = require('http');
var bl = require('bl');

module.exports = function(url, callback) {

  http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return callback(err);
      }
      return callback(null, data.toString());
    }));

  });

};
