let counter = 0;
const getData = () => {
  console.log("Hello this is ", counter++);
};

const debounce = (fn, d) => {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunction = debounce(getData, 2000);

// Debouncing is a technique used in JavaScript to improve performance by delaying
//the execution of a function until a certain amount of time has passed since the last
//time the function was invoked. It's commonly used in scenarios where a function is repeatedly
//called in quick succession, such as handling user input events like scrolling, resizing, or typing ,search filter,api callls,input field etc.
