const name = prompt('Введите Имя');
const year = prompt('Введите год рождения');
let nowYear = 2024;
if (isNaN(year)) {alert(`Год должен быть числом!`)} else{
alert(`${name}: ${nowYear - year}`)}