const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function simpleLoopMethod(input) {
    let output = 0;
    for (var i = 0; i < arr.length; i++) {
        output = output + arr[i];
    }
    return output;
}
// console.log(simpleLoopMethod(arr));



/************** REDUCE METHOD ***************/
function reduceMethod(input) {
    const data = input.reduce((function (acc, curr) {
        return acc = acc + curr;
    }), 0)
    return data;
}
// console.log(reduceMethod(arr))

// in reduce method we are decleared acc = 0 as a second argument of reduce method , 
// acc = 0 ||  output = 0;
// curr is the value if iterating of array like - 1 or 2 or 3 or 4 .


// find maximun number of elements
function reduceMethodMax(input) {
    const data = input.reduce((function (max, curr) {
        if (curr > max) {
            return max = curr;
        }
    }), 0)
    return data;
}
console.log(reduceMethodMax(arr))
