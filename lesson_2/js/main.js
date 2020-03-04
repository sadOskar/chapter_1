// var firstName;

// console.log(firstName)

// var firstName = 'Jack';

// console.log(firstName)



// Запись нескольких переменных после единственного объявления
// var firstName = 'Jack', lastName = 'Johnson';
// console.log(firstName, lastName);

// Отличия var и let

// var хойстится let не хойстится
// console.log(firstName)// undefined
// var firstName = 'Jack';
// console.log(firstName);
// let firstName = 'Jack';

// Обьявление 2х let невозможно
// var firstName = 'Jack';
// var firstName = 'John';
// console.log(firstName);
// let firstName = 'Jack';
// let firstName = 'John';
// console.log(firstName)

// var записывается в глобальный объект window
// var firstName = 'Jack';
// console.log(window.firstName);

// let не записывается в глобальный объект window
// let firstName = 'Jack';
// console.log(window.firstName);

// Переменная объявленна через const унаследовала все  принципы,
//  которые свойственны для переменной let,
//  но с большим отличием

// Переназначение let возможно
// let firstName = 'Jack';
// console.log(firstName);
// firstName = 'John';
// console.log(firstName);

// Переназначение const невозможно
// const firstName = 'Jack';
// firstName = 'John';
// console.log(firstName);

// Объекты

// const person = {
//     name: 'Jack',
//     age: 20,
//     childs: ('John', 'Luci') 
// }

// // Нестандартные значения ключей
// const notStandartFields = {
//     'kebab-case': 'i can use it :D',
//     '0': 10
// }

// Доступ к свойствам объекта
// console.log(person.name);
// console.log(notStandartFields['kebab-case']);


// Переназначение свойтсв даже, если это константа 
// person.name = 'John';
// console.log(person);

// Добавление свойства извне
// person.weight = '80kg';
// console.log(person);

// Удаление поля из объекта
// delete person.name;
// console.log(person);

// Массивы

// Масив
// const arrNums = [1,2,3,4,5];
// console.log(arrNums)

// Длина массива
// console.log(arrNums.length);

// Доступ к первому элементу массива
// console.log(arrNums[0]);

// Доступ к последнему элементу массива
// console.log(arrNums[arrNums.length - 1]);

// Переназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);

// Оператор инкремент
// let num = 0;
// console.log(num++);
// console.log(num);

// циклы

// цикл For
// for (let i = 0; i <= 100; i++) {
//   console.log('Итерация №' + i);
// }

// const arrNums = [1,2,3,4,5];

// for (let i = 0; i < arrNums.length; i++) {
//     // console.log(arrNums[i]);
//     console.log(arrNums[i] * 2);
// }

// Поиск элемента в массиве циклом с условием
// let value = null;

// for (let i = 0; i < arrNums.length; i++) {
//     console.log(arrNums[i])
//     if (arrNums[i] === 4) value = arrNums[i];
// }

// console.log(value);

// Вытаскиваем все элементты больше 3х в отдельный массив
// const arrNums2 = [1];
// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

// Цикл while
// let i = 0;

// while (i < 10) {
//     console.log('Итерация №' + i++)
// }

// Цикл do while
// let i = 0;

//  do {
//      console.log('Итерация №' + i++);
//  } while (i < 10);

// Метода массива stage 1

// const someFamily = [
//     {
//         name: 'March',
//         position: 'Mother',
//         age: 36
//     },
//     {
//         name: 'Homer',
//         position: 'Father',
//         age: 40
//     },
//     {
//         name: 'Bart',
//         position: 'Son',
//         age: 10
//     },
//     {
//         name: 'Lisa',
//         position: 'Daughter',
//         age: 8
//     }
// ];

// // Метод push / pop
// const newChild = {
//     name: 'Maggie',
//     position: 'Daughter',
//     age: 2
// }

// someFamily.push(newChild);
// someFamily.pop();
// console.log(someFamily);

// Методы shift / unshift
// someFamily.shift();
// someFamily.unshift(newChild);
// console.log(someFamily);

// Метод splice
// someFamily.splice(1, 1); // Удаление
// console.log(someFamily);
// someFamily.splice(2, 0, newChild); //Добавление
// console.log(someFamily);

// Самостоятельно узнать про собрата splice. Метод slice

// Жизнь без метода forEach
// const simpsonsFamily = [];

// for (let i = 0; i < someFamily.length; i++) {
//     someFamily[i].lastName = 'Simpson';
//     simpsonsFamily.push(someFamily[i]);
// }

// console.log(simpsonsFamily);

// Жизнь c методом forEach
// someFamily.forEach(function(item) {
//     item.lastName = 'Simpson';
//     simpsonsFamily.push(item);
// })

// console.log(simpsonsFamily);

// Жизнь с методом map
// const simpsonsFamily = someFamily.map(function(item) {
//     item.lastName = 'Simpson';
//     return item;
// });

// console.log(simpsonsFamily);