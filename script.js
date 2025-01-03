// Создаем переменные для имени пользователя и бонусного баланса
const username = "my name";
const bonusBalance = 1000;

// Находим элемент для отображения информации о пользователе
const userInfo = document.getElementById("userInfo");

// Формируем строки с информацией о пользователе
const userMessage = `Пользователь: ${username}`;
const balanceMessage = `Баланс: ${bonusBalance}`;

// Выводим информацию в элемент
userInfo.innerHTML = `<p>${userMessage}</p><p>${balanceMessage}</p>`;
