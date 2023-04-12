// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:

//Создайте пустой объект user.
//Добавьте свойство name со значением John.
//Добавьте свойство surname со значением Smith.
//Измените значение свойства name на Pete.
//Удалите свойство name из объекта.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj) {
    for (let key in obj) {2
      return false;
    }
    return true;
  }

// 3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
    name: "John"
  };
  
  // Работает!
  user.name = "Pete";
  
  // Ошибка
  user = 123;

// 4. У нас есть объект, в котором хранятся зарплаты нашей команды:
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390

  // 5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
  //P.S. Используйте typeof для проверки, что значение свойства числовое.
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }