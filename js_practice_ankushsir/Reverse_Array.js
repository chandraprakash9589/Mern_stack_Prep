//Reverse Array:
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

const input = [1, 2, 3, 4, 5];

function reverseArray(input) {
    let output = []
    for (let index = input.length - 1; index >= 0; index--) {
        output.push(input[index]);
    }
    return output;
}
// console.log(reverseArray(input));

function reverseArrayReduce(input) {
    const output = input.reduce(function (accumulator, current) {
            console.log([accumulator,...current]);
    }, [])
    return output
}
// console.log(reverseArrayReduce(input));
const data = [1, 2, 3].reduce((a, b) =>[b, ...a], []);
console.log(data)