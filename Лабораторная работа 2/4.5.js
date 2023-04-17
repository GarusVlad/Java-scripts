// 1. Создайть калькулятор с функция сложения, умножения и чтения.
function Calculator () {
    this.read = function() {
        this.a = +prompt('a?', 0); 
        this.b = +prompt('b?', 0);
      };

      this.sum = function() {
        return this.a + this.b;
      };

      this.multip = function () {
        return this.a * this.b;
      };
    }

    let calculator = new Calculator();
    calculator.read();
alert("Сумма: " + calculator.sum);
alert("Произведение: " + calculator.multip);

// 2. Создайте функцию-конструктор Accumulator(startingValue).
//Объект, который она создаёт, должен уметь следующее:
//Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Добавить: ', 0);
    };
}

let accumulator = new Accumulator(5);
accumulator.read();

alert('Сумма: ' + accumulator.value);

// 3. 