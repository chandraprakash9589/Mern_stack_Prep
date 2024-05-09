Input:
var data = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Charlie' }
];
var property = 'name';
var value = 'Bob';

Output: [{ id: 2, name: 'Bob' }]

//using for loop
function filterbypropvalue(property, value, input) {
	for (let i = 0; i < input.length; i++) {
		if (input[i][property] === value) {
			return [input[i]]
		}
	}
}
// console.log(filterbypropvalue(property, value, data));


//using reduce method
function reduce_method_filter_by_propvalue(property, value, input) {
	let data = input.reduce((acc, curr) => {
		if (curr[property] === value) {
			acc.push(curr)
		}
		return acc;
	}, [])
	return data;
}
// console.log(reduce_method_filter_by_propvalue(property, value, data))


//using filter method
function filter_method_filter_by_propvalue(property, value, input) {
	const data = input.filter((item) =>
		item[property] === value
	)
	return data;
}
// console.log(filter_method_filter_by_propvalue(property, value, data))

/******************************
*                             *
*                             *
*  Sort Objects by Property:  *
*                             *
*                             *
******************************/


//Sort Objects by Property:
//Sort an array of objects based on a specified property.
Input:
var data = [
	{ id: 3, name: 'Charlie' },
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' }
];
var property = 'id';
Output:
[
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Charlie' }
]

function sortObjects(input, property) {
	const result = input.sort((a, b) => { return a[property] - b[property] })
	return result;
}
// console.log(sortObjects(data, property));


/************************************** 
 *                                    *  
 *  Group Objects by Property Value   * 
 *                                    * 
 *************************************/
//Group Objects by Property Value:
//Group an array of objects by a specific property value.
Input:
var data = [
	{ department: 'HR', employee: 'Alice' },
	{ department: 'IT', employee: 'Bob' },
	{ department: 'HR', employee: 'Charlie' },
	{ department: 'IT', employee: 'David' }
];
var property = 'department';
// Output:
// {
// 	'HR': [
// 		{ department: 'HR', employee: 'Alice' },
// 		{ department: 'HR', employee: 'Charlie' }
// 	],
// 		'IT': [
// 			{ department: 'IT', employee: 'Bob' },
// 			{ department: 'IT', employee: 'David' }
// 		]
// };

function Group_Objects_by_Property_Value(input, property) {
	let result = {};
	for (let i = 0; i < input.length; i++) {
		const data = input[i];
		const newObj = input[i][property];
		if (!result[newObj]) {
			result[newObj] = [];
			result[newObj].push(input[i]);
		}else{
			result[newObj].push(input[i]);
		}
	}
	return result;
}
console.log(Group_Objects_by_Property_Value(data, property))

