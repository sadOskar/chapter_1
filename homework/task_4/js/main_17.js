let number = +prompt('Enter number:');

const factorial = function(n) {
    let result = 1
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

alert(factorial(number));