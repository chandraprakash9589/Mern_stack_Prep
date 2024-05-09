let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 2, 6);
multiplyByThree(3);

//second way to do it closure
let plusNumber = function (a) {
  return function (b) {
    console.log(a + b);
  };
};
let plusTwoNum = plusNumber(4);
plusTwoNum(4);

// Currying is a technique in JavaScript that allows you to transform functions with multiple arguments into a sequence of functions,
//  each taking one argument at a time. This can be useful for a variety of reasons, such as making code more modular and reusable,
// or avoiding passing the same variable multiple times.

let curring =function(a,b,c,d){
    console.log(a+b+c+d)
}
curring(1,2,3,5)