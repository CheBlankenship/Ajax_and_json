// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:
// function square(num) {
//   return num * num;
// }
// var squared = square(5);
////////////////// Rewrite ///////////////

function square(num, callback) {
  callback (num * num);
}
square(4, function(result) {
  console.log (num +' squared is', result);
});
// square(5, function(result) {
//   console.log(num + ' squared is' + result);
// });

// function sql(x, callback){
//   callback (x * x);
// }
//
// sql(4, function(result) {
//   console.log('The result is ', result);
// });
