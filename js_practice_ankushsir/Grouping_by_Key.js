const Input = [
    { key: "A", value: 10 },
    { key: "B", value: 5 },
    { key: "A", value: 15 },
    { key: "B", value: 7 }
];
const Output = {
    "A": [{ key: "A", value: 10 }, { key: "A", value: 15 }],
    "B": [{ key: "B", value: 5 }, { key: "B", value: 7 }]
};
function groupByKey(input) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if (result[item.key]) {
            result[item.key].push(item);
            console.log(result[item.key] ,"222222");
        } else {
            result[item.key] = [item]
            console.log(result ,"====")
        }
    }
}
console.log(groupByKey(Input));

