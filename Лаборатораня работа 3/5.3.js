// 1. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
let str = prompt('Введите слово: ', 0)
function ucFirst(str) {
    if (!str) return str;
  
    let Str = str[0].toUpperCase() + str.slice(1);
    return Str;
  };
  alert(ucFirst(str)); 

  // 2. Проверка на спам
  // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

  // 3. Усечение строки
  // Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
  function truncate(str, maxlength) {
    str = str.slice(0, maxlength) + '...';
    return str;
    };
  alert(truncate('Сегодня важный день, поэтому я бы хотел сказать вам несколько вещей', 30))
  alert(truncate('Привет, Никита!', 30))

  // 4. Выделить число
  // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
  //Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
  function extractCurrencyValue(price) {
    return price.slice(1, price.length);
  };
  alert(extractCurrencyValue('$1500'));

