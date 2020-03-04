// Example 1

// function lineShortener(str,chars = 5) {
//     let arr = []
//     for(let i = 0; i < chars; i++) arr.push(str[i]);
//     return arr.join('') + '...';
// }

// const longStr = 'its very long string';
// const shortStr = lineShortener(longStr);
// const secondShortStr = lineShortener('hello its me');

// console.log(shortStr, secondShortStr);

// Example 2
// function isEmptyArray(value) {
//     return Array.isArray(value) && value.length === 0;
// }

// console.log(isEmptyArray({name: 'Jack'}));
// console.log(isEmptyArray([]));

// function EXPRESSION
// const multiple = function(a,b) {
//     console.log(a * 2, b * 2);
// }

// multiple(3,6);

// Methods

// const person = {
//     name: 'Jack',
//     birthYear: 1980,
//     getAge: function() {
//         console.log(this);
//         return 2020 - this.birthYear;
//     },
//     sayHello: function() {
//         console.log(this.name + ' said hello');
//     },
//     changeName: function(newName) {
//         if (typeof newName !== 'string') {
//         console.error('To change the name, enter the line');
//     return;
//     }

//     this.name = newName;
//     }
// }

// const ageOfPerson = person.getAge();

// console.log(ageOfPerson);
// person.sayHello();
// person.changeName('Jim');
// console.log(person.name);

// function scope() {
//     let firstName = 'Jack';
//     let lastName = 'Jackson';
//     console.log(firstName, lastName);
// }

// function scope2() {
//     let firstName = 'Jim';
//     let lastName = 'Bean';
//     console.log(firstName, lastName);
//     return firstName

// }

// scope();
// const scope2Obj = scope2();
// const firstNameScope2 = scope2Obj.firstName;
// const lastNameScope2 = scope2Obj.lastName;

// console.log(firstNameScope2);
// console.log(lastNameScope2);
