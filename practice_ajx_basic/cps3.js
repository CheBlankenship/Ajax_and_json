function square(num, callback){
  setTimeout(function() {
    callback(num * num);
  }, 100);
}

function squareRoot(num, callback){
  setTimeout(function() {
    callback(Math.sqrt(num));
  }, 500);
}

var x = 5;
var y = 4;

function answerMachine(x,y, callback) {
  square(x, function(squareX){
    square(y, function(squareY){
      squareRoot(squareX + squareY, function(ans) {
        console.log(ans);
      });
    });
  });
}

answerMachine(x,y);
