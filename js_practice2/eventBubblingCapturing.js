//event bubbling
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("Grandparent Clicked !");
// },true);//event capturing

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent Clicked !");
// },false);//event bubbling

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child Clicked !");
// },true);//event capturing

// event bubbling : bottom to top
//event capturing: top to bottom

// // how to stop this propogation :in this case we click in child then stop the bubbling

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent Clicked !");
//   },
//   false
// ); //event capturing

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent Clicked !");
//   },
//   false
// ); //event bubbling

// document.querySelector("#child").addEventListener(
//   "click",
//   (e) => {
//     console.log("child Clicked !");
//     e.stopPropagation();
//   },
//   false
// ); //event capturing

// how to stop this propogation :in this case we click in grand then stop the capturing

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent Clicked !");
//     e.stopPropagation();
//   },
//   true
// ); //event capturing

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent Clicked !");
//   },
//   true
// ); //event bubbling

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child Clicked !");
//   },
//   true
// ); //event capturing

//   event delegation
// Event delegation is a technique in JavaScript where instead of attaching event
// handlers directly to individual elements, you attach a single event handler to 
//a parent element that listens for events bubbling up from its descendants.
// This pattern allows you to handle events on multiple elements with a single 
//event listener, improving performance and reducing memory usage, especially in 
//cases where you have a large number of dynamically generated elements.
//we have to improve the perfomance our web pages

document.querySelector("#grandparent").addEventListener(
  "click",
  (event) => {
    // console.log("Grandparent Clicked !",event);
    if (event.target.id === "child") {
      console.log("child is clicked");
    } else if (event.target.id === "parent") {
      console.log("parent is clicked");
    } else if (event.target.id === "grandparent") {
      console.log("grandparent is clicked");
    }
  },
  false
);

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent Clicked !");
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child Clicked !");
//   },
//   false
// );
