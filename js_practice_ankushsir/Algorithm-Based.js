// Two Sum:
// Given an array of integers, find two numbers such that they add up to a specific target sum.
// Input:
// const nums = [2, 7, 11, 15];
// const target = 9; 
// Output:
// [0, 1]


// const twoSum = (argument, target) => {
// 	let output = [];
// 	for (let i = 0; i < argument.length; i++) {
// 		let value = argument[i];
// 		// if () { }

// 	}
// }
// const result = twoSum([2, 7, 11, 15], 9);
// // console.log(result);


const twoSum = (nums, target) => {
  const result = nums.reduce((acc, num, index) => {
    const complement = target - num;
    const complementIndex = nums.findIndex((el, i) => el === complement && i !== index);

    if (complementIndex !== -1) {
      acc.push(index, complementIndex);
    }

    return acc;
  }, []);

  return result;
};

const nums = [2, 7, 11, 15];
const target = 9;

const output = twoSum(nums, target);
console.log(output); // Output: [0, 1]
