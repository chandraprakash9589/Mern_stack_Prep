//NOTE : in both soluction function always run else condition first ;

const Input = [
    { category: "A", value: 10 },
    { category: "B", value: 5 },
    { category: "A", value: 15 },
    { category: "B", value: 7 }
]
const Output = {
    "A": 25,
    "B": 12
}
//Using for loop
function grouping(input) {
    let result = {}
    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if (result[item["category"]]) {
            result[item.category] += item.value;
        }
        else {
            result[item.category] = item.value;
        }
    }
    return result;
}
// console.log(grouping(Input))

function groupingUsingReducer(input) {
    const result = input.reduce((acc, curr) => {
        if (acc[curr.category]) {
            acc[curr.category] += curr["value"]
        }
        else {
            acc[curr["category"]] = curr["value"]
        }
        return acc;
    }, {})
    return result;
}
console.log(groupingUsingReducer(Input))












// const obj = {};
// const variable = 'name';
// obj[variable] = '12345678'
// console.log(obj)
// output = { name: '12345678' }
