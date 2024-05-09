//Reverse Array:
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
var input = [1, 2, 3, 4, 5];

//Using for loop

const reverseArray = (input) => {
    let output =[];
    for (let i = input.length - 1; i >= 0; i--) {
            output.push(input[i])
    }
    return output;
}
console.log(reverseArray(input));