// 1. if (строка с нулём)
//Выведется ли alert?
if ("0") {
    alert("Привет"); // ДА
  }
  
  // 2. Название JavaScript
  let RealNameJS = prompt("Какое «официальное» название JavaScript?", "");
  if (RealNameJS == "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
  
  // 3. Покажите знак числа
  let number = prompt("Введите любое число", "");
  if (number > 0) {
    alert(1); 
  } else if (number == 0) {
    alert(0); 
  } else {
    alert(-1); 
  }
  
  // 4. Перепишите 'if' в '?'
  let result = a + b < 4 ? "Мало" : "Много";
  
  // 5. Перепишите 'if..else' в '?'
  let login = prompt("Введите ваш логин", "");
  let message =
    login == "Сотрудник"
      ? (message = "Привет")
      : login == "Директор"
      ? (message = "Здравствуйте")
      : login == ""
      ? (message = "Нет логина")
      : message == "";
  alert(message);