var getResponseAsString = require('./getResponseAsString')

var strings = []

var printWhenDone = (function() {
  var finishedCalls = 0
  return function() {
    if (++finishedCalls == 3) {
      strings.forEach(function(string) {
        console.log(string)
      })
    }
  }
})()

function getString(url, sequence, callback) {
  getResponseAsString(url, function(err, responseString) {
    if (err) {
      console.error("An error occurred: " + err)
    }
    strings[sequence] = responseString
    callback()
  })
}

for (i = 0; i <= 2; i++) {
  getString(process.argv[i+2], i, printWhenDone)
}

