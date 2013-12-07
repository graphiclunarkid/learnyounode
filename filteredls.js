var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

regexp = new RegExp('\\.' + ext + '+$');

fs.readdir(dir, function (err, list) {

  if (err) throw err;
  for (var i in list) {
    if (list[i].match(regexp)) {
      console.log(list[i]);
    }
  }
});
