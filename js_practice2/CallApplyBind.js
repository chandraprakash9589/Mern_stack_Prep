// call
let name = {
  firstName: "CP",
  lastName: "Kushwaha",
};

let name2 = {
  firstName: "Aman",
  lastName: "Maurya Sir",
};

function printFullName(homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      " state is " +
      state
  );
}

printFullName.call(name, "Bhopal", "MP");
printFullName.bind(name2, "Delhi", "UP");

// apply: is only difference is in apply method we pass second argument as a array
printFullName.apply(name2, ["Delhi", "UP"]);
// bind:the difference bind and call is that bind is create a copy of that method to inboke later and it does not directly inboke we have to save it in variable.
// it is create copy that function so it is not modified or call the actual function we can modified of copy function and use later
let printMyName = printFullName.bind(name, "silwani", "MP");
printMyName();
// console.log(printMyName())
