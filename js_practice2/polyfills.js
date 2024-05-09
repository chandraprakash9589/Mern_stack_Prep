// A polyfill is a piece of code (usually js on the web) used
// to provide modern functionality on older browsers that do not natively support it.

// mtlab agar kisi browers mai koi new functionality aayi hai or nahi ahi tab hum use add kr sakte hai

let printName = {
  firstName: "cp",
  lastName: "kushwaha",
};
let FullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
let getFullName=FullName.bind(printName);
getFullName();

if(Function,bind===undefined){
    console.log("undefined")
Function.prototype.mybind=function(printName){
    let obj =this;
    return function(){
obj.call(printName)
    }
}

let getFullName2 =FullName.bind(printName);
getFullName2()
}
else {
    console.log("supported")
    let getFullName2 =FullName.bind(printName);
    getFullName2()
}


// A polyfill is a piece of code (usually JavaScript) that provides modern functionality on older browsers that do not natively support it. It essentially "fills in" the gaps in browser compatibility by emulating the missing features or APIs, allowing developers to use modern language features or APIs in their web applications while ensuring compatibility with a wider range of browsers.

// Polyfills are used to ensure that web applications behave consistently across different browsers, including older versions that may not support newer features introduced in HTML, CSS, or JavaScript. They are especially useful for web developers who want to take advantage of the latest language features and APIs without sacrificing compatibility with older browsers.



// Here's an example of a polyfill that adds support for the Array.prototype.includes() method, which is not supported in older versions of Internet Explorer:


// Polyfill for Array.prototype.includes() method
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement /*, fromIndex*/) {
      'use strict';
      var O = Object(this);
      var len = parseInt(O.length) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1]) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) { k = 0; }
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement ||
           (searchElement !== searchElement && currentElement !== currentElement)) {
          return true;
        }
        k++;
      }
      return false;
    };
  }
  