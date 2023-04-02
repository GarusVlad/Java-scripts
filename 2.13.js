// 1. Последнее значение цикла
let i = 3;

while (i) {
  alert(i--); // 1
}

// 2. Какие значения выведет цикл while?

let j = 0;
while (++j < 5) alert(j); // 1 2 3 4

let y = 0;
while (y++ < 5) alert(y); // 1 2 3 4 5

// 3. Выведите чётные числа
for (let x = 2; x < 11; x++) {
  if (x % 2 == 0) alert(x);
}

// 4. Замените for на while
let k = 0;
while (k < 3) {
  alert(`number ${k}!`);
  k++;
}

// 5. Повторять цикл, пока ввод неверен
while (true) {
  let count = prompt("Введите число больше 100", "");
  if (count > 99) {
    break;
  } else if (count === null || count < "") {
    break;
  } else {
    continue;
  }
}

// 6. Вывести простые числа
let max = 10;
next: for (let num = 2; num <= max; num++) {
  for (numb = 2; numb < num; numb++) {
    if (num % numb == 0) continue next;
  }
  alert(num);
}