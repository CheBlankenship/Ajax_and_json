// Rewrite the following code (both of the functions and the calling code) in CPS:
// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }
//
// var x = 4;
// var y = 3;
// var xSquared = square(x);
// var ySquared = square(y);
// var answer = squareRoot(xSquared + ySquared);
// console.log('The answer is: ' + answer);

// Rewrite

function square(num, callback){
  var result = num * num;
  callback(result);
}

function squareRoot(num, callback){
  callback(Math.sqrt(num));
}

var x = 5;
var y = 4;

square(x, function(squareX){
  square(y, function(squareY){
    squareRoot(squareX + squareY, function(ans) {
      console.log(ans);
    });
  });
});
