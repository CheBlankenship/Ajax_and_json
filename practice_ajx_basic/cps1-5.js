// Rewrite the following code (both of the functions and the calling code) in CPS:
// function square(num) {
//   return num * num;
// }
//
// function times2(num) {
//   return num * 2;
// }
//
// var squared = square(5);
// var result = times2(squared);
// console.log('Result is:', result);

// Rewrite

function square(num, callback){
  callback(num * num);
}

function times2(num, callback) {
  callback(num * 2);
}


square(5, function(result){
  times2(result, function(resultTimes2) {
    console.log("The result is", resultTimes2);
  });
});
