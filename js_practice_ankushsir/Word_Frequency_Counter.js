//NOTE : in both soluction function always run else condition first ;
    var input = "This is a sample paragraph This is just a sample";
    //Input: "This is a sample paragraph. This is just a sample."
    const Output = {
        "this": 2,
        "is": 2,
        "a": 2,
        "sample": 2,
        "paragraph": 1,
        "just": 1
    }

function wordFrequencyCounter(input) {
    const words = input.toLowerCase().split(" ");
    const wordCount = words.reduce((accumulator, word) => {
        if (Object.keys(accumulator).includes(word)) {
            accumulator[word]++;
        } else {
            accumulator[word] = 1
        }
        return accumulator;
    }, {});
    return wordCount;
}
const wordFrequencies = wordFrequencyCounter(input);
// console.log(wordFrequencies)

// using for loop iteration
function wordFrequencyCounters(input) {
    const words = input.toLowerCase().split(" ");
    let wordCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // using in operator
        if (word in wordCount) {
            wordCount[word]++
        }
        else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}
const wordFrequencie = wordFrequencyCounters(input);
// console.log(wordFrequencie);

// rivision
const counter = (input) => {
    const newLocal = ">>>>>>>>>>>>>>>>>>>>>";
    const data = {}
    let inputsplit = input.split(" ");
    for (let i = 0; i < inputsplit.length; i++) {
        if (data[inputsplit[i]]) {
            data[inputsplit[i]]++
            console.log( data,data[inputsplit[i]] , "<<<<<<<<<")
        }
        else{
            data[inputsplit[i]] = "1";
            console.log(data  , data[inputsplit[i]] ,newLocal)
        }
    }
    return data;
}
const result = counter(input);
// console.log(result)


//in this method we are initalizing with zero values ;
function wordFrequencyCounter(input) {
    const output = {};
    const splitInput = input.split(" ");
    for (let i = 0; i < splitInput.length; i++) {
        if (output[splitInput[i]] === undefined) {
            output[splitInput[i]] = 0;
        }
        output[splitInput[i]] += 1;
    }
    return output;
}

const input = "This is a test input for word frequency. This is a test.";
// console.log(wordFrequencyCounter(input));
