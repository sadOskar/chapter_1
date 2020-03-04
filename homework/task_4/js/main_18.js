let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

function diapazone(x,y) {
    let arr = []
    if(x<y) for (let i = x; i <= y; i++) arr.push(i);
    else for (let i = x; i >= y; i--) arr.push(i);
    return arr
}

console.log(diapazone(num1,num2))