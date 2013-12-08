var filterlist = require('./makeitmodular-filter');

filterlist(process.argv[2], process.argv[3], function(err, list) {

  if (err) {
    console.log("An error occurred: " + err);
  }
  else {
    for (var i in list) {
      console.log(list[i]);
    }
  }

});
