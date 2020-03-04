let string = prompt('Введите строку');
let letter = prompt('Введите букву')

const quantity = function(a,b) {
    let n = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            n++
        }
    }
    return n;    
}
alert (quantity(string,letter));