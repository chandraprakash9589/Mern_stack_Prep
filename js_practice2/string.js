let firstName = "chandraprakash";
//length of string
// console.log(firstName.length)

//acess the string element
// console.log(firstName.charAt(4))
// console.log(firstName[5])
// console.log(firstName.charCodeAt(2)) //it return ascii value

//"h" is present is not
// console.log(firstName.includes("i"))// false
// console.log(firstName.indexOf('h'))// return the first ocuurence of the element

// console.log(firstName.lastIndexOf('h')) // rerturn the last index of the element

// compare two string
let lastName = "kushwaha";
let lastName2 = "kushwaha";
// console.log(lastName.localeCompare(lastName2)); //return 0 if equal and not then -1

//replace chandraprakash with akash
let str =
  "        Chandraprakash Is best js developer  and js is good frontend laungauge.";
// console.log(str.replace("chandraprakash", "akash"));
// console.log(str.replaceAll("js", "nodejs"));

//return the substring and slice
// console.log(str.substring(0, 14)); //chandraprakash
// console.log(str.slice(-10, -1));
// console.log(str.search("js"))//return the index

// console.log(str.split("")); //split the element of the array and return the array
// console.log(str.split(" ")); // the strin into array and based the space and return the word
// console.log(str.split("is")); //return the array and  separate the array word and remove that words
// let subString = str.split(" ");
// console.log(subString.join(' '))//convert it with array into string

// console.log(str.startsWith("chandraprakash"))// return true is start and not hen false
// console.log(str.endsWith("laungauge ."))// return true is start and not hen false
// console.log(str.length)
// const trimStr =str.trim()// remove the starting white spaces
// console.log(trimStr,trimStr.length)
// const trimStr2 =str.trimStart()
// console.log(trimStr2.length)
// const trimStr3=str.trimEnd()
// console.log(trimStr3.length)

// //to convert upper and lower case
// let anotherName ="Hello"
// console.log(str.toLocaleLowerCase())
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

//convert number to string
const num = 123;
let strTonum = num.toString();
console.log(typeof strTonum);
const obj = {
  name: "chandraprakash",
  course: "DSA with chandraprakash",
};
let objTostring = JSON.stringify(obj);// to convert the obj into json string formate
console.log(objTostring);
let strToObj = JSON.parse(objTostring);// to convert back the obj 

console.log(strToObj);


//concat two string
const fName ="cp "
const lName ="kushwaha"

console.log(fName.concat(lName,' web',' developer'))
console.log(fName+lName)
console.log(`${fName} ${lastName} mern stack developer`)