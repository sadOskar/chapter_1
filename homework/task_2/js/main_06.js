var age = +prompt('Введите возраст');

if (age >= 1 && age <= 13) {
    alert('Тачки');
} else if (age >= 14 && age <= 17) {
    alert('Вверх');
} else if (age >=18 && age <= 100) {
    alert('Дом 2')
} else {
    alert('Error')
}