const age = Number(prompt('Введите ваш возраст'));

let creditAmount = 0;

if (age < 18) {
    alert('Извините, но кредит выдается только совершеннолетним.');
} else if (age >= 18 && age <= 21) {
    creditAmount = 50000;
    let requestedAmount = Number(prompt(`Мы можем вам выдать максимум ${creditAmount}. Введите сумму кратную 1000:`));
    creditAmount = Math.floor(requestedAmount / 1000) * 1000;
    if (creditAmount > 50000) {alert(`Мы можем вам выдать максимум 50000.`);} else if (creditAmount === 0) {alert(`Видимо кредит вам не нужен. Всего доброго!`)}
    else if (creditAmount <= 50000) {alert(`Мы можем вам выдать ${creditAmount}.`);}
} else if (age >= 22 && age <= 35) {
    creditAmount = 400000;
    requestedAmount = Number(prompt(`Мы можем вам выдать максимум ${creditAmount}. Введите сумму кратную 1000:`));
    creditAmount = Math.floor(requestedAmount / 1000) * 1000;
    if (creditAmount > 400000) {alert(`Мы можем вам выдать максимум 400000.`);} else if (creditAmount === 0) {alert(`Видимо кредит вам не нужен. Всего доброго!`)}
    else if (creditAmount <= 400000) {alert(`Мы можем вам выдать ${creditAmount}.`);}
} else if (age >= 36 && age <= 65) {
    creditAmount = 1000000;
    requestedAmount = Number(prompt(`Мы можем вам выдать максимум ${creditAmount}. Введите сумму кратную 1000:`));
    creditAmount = Math.floor(requestedAmount / 1000) * 1000;
    if (creditAmount > 1000000) {alert(`Мы можем вам выдать максимум 1000000.`);} else if (creditAmount === 0) {alert(`Видимо кредит вам не нужен. Всего доброго!`)}
    else if (creditAmount <= 1000000) {alert(`Мы можем вам выдать ${creditAmount}.`);}
} else {
    alert('Извините, но кредит выдается только до 65 лет.');
}