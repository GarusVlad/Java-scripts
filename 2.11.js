// 1. Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); // 2

// 2. Что выведет alert (ИЛИ)?
alert(alert(1) || 2 || alert(3)); // 1  2

// 3. Что выведет alert (И)?
alert(1 && null && 2); // null

// 4. Что выведет alert (И)?
alert(alert(1) && alert(2)); //1 undenfinded

// 5. Что выведет этот код?
alert(null || (2 && 3) || 4); // 3


// 6. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
let age = prompt("Сколько вам лет?", "");
if (age >= 14 && age <= 90) {
  alert("Вы подходите");
} else {
  alert("Вы не подходите");
}

// 7. Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
let ages = prompt("Сколько вам лет?", "");
if (ages < 14 || ages > 90) {
  alert("Ваш возраст вне диапозона");
} else {
  alert("Ваш возраст в диапозоне");
}

// 8. Какие из перечисленных ниже alert выполнятся?
if (-1 || 0) alert("first"); // Выполнится
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); // Выполнитсся

// 9. Проверка логина
let login = prompt("Введите логин", "");
if (login === "Админ") {
  let password = prompt("Введите пароль", "");
  if (password === "24539") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Пароль неверный");
  }
} else if (login === "" || login === null) {
  alert("Отменено");
} else {
  alert("Неверный логин");
}