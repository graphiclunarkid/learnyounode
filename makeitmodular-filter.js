module.exports = function(dir, ext, callback) {

  var fs = require('fs');
  regexp = new RegExp('\\.' + ext + '+$');

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }
    var flist = [];
    for (var i in list) {
      if (list[i].match(regexp)) {
        flist.push(list[i]);
      }
    }
    return callback(null, flist);
  });

};
