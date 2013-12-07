var input = process.argv;
var i = 2;
var output = 0;
while ( i < input.length ) {
  output += +input[i];
  i++
}
console.log(output);
