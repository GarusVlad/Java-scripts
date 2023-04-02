// 1. Постфиксная и префиксная формы
let a1 = 1, b = 1;

alert( ++a1 ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма возвращает старое значение

alert( a1 ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз

// 2. Результат присваивания
let a2 = 2;

let x = 1 + (a2 *= 2); // a = 4; x = 5;

// 3. Преобразование типов
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

// 4. Исправьте сложение
let a3 = +prompt("Первое число?", 1);
let b3 = +prompt("Второе число?", 2);

alert(a + b3); // 3