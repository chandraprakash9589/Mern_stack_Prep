// 'use strict'
console.log(this); //has a global  object-window,global

// this inside a function

function x() {
  console.log(this); //window in non-strict  mode and undefined in strict mode
}
// x();
//this keyword is work diffently in strick mode and non-strict mode
// just because {this substritution}(this indside non-strict mode)
// if the value of this keyword is undefined or null this  keyword will be replaced with global object:(only in strict mode )

window.x();

//this inside a object's method

// note: if you make a function a part of object it is called method
const obj = {
  a: 10,
  x: function () {
    console.log(this)
    // console.log(this.a)
  },
};
obj.x()


//call,apply,bind():
const student={
  name:"cpk",
  printName:function(){
      console.log(this.name)
  }
}
const student2={
  name:"abcdss",
 
}
student.printName.call(student2)