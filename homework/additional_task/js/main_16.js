const numerals = [1,0,2,3,4,0,0,0,5]

const num1 = numerals.filter(word => word > 0)
const num2 = numerals.filter(word => word == 0)

console.log(num1.concat(num2))


