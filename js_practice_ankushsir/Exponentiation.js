//Calculate Exponents:

Input: (2, [1, 2, 3, 4])
Output: [2, 4, 8, 16]

const base = 2;
const exponents = [1, 2, 3, 4];

function CalculateExponents(base, exponents) {
    const result = exponents.reduce(function (acc, curr) {
        console.log(acc ,">>>>>>>>>>>>>>>..");
        const expo = base ** curr;
        acc.push(expo);
        return acc;
    }, [])
    return result
}
console.log(CalculateExponents(base, exponents)); 
