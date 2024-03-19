const name = prompt('Введите Имя');
const year = prompt('Введите год рождения');
let nowYear = 2024;
nowYear -= year;
let remainder = nowYear % 10;
if (isNaN(year)) {alert(`Год должен быть числом!`)} else{
    if (remainder === 1) {
        alert(`${name}: ${nowYear} год`);
    } else if ([2, 3, 4].includes(remainder)) {
        alert(`${name}: ${nowYear} года`);
    } else {
        alert(`${name}: ${nowYear} лет`);
    }}