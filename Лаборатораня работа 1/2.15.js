// 1. Обязателен ли "else"?
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {

      return confirm("Родители разрешили?");
    }
  }
  
  function checkAge(age) {
    if (age > 18) {
      return true;
    }

    return confirm("Родители разрешили?");
  } 
  
  // 2. Перепишите функцию, используя оператор '?' или '||'
  let age1 = prompt("Введите ваш возраст", "");
  checkAge1(age1);
  checkAge2(age1);

  function checkAge1(age) {
    return age > 18 || confirm("Родители разрешили?");
  }

  function checkAge2(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
  }
  
  // 3. Функция min(a, b)
  function min(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  // Функция pow(x,n)
  let x = promt("x?", "");
  let n = prompt("n?", "");
  if (n < 1) {
    alert(`Степень ${n} не подходит, введите другое число`);
  } else {
    alert(pow(x, n));
  }
  function pow(x, n) {
    let buffer = x;
    for (let i = 1; i < n; i++) {
      x *= buffer;
    }
    return x;
  }