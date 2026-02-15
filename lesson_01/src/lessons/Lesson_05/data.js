// Повторение метода map()
// Пример: создать новый массив на основании numbers, где каждый элемент нового массива будет умножен на 2
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);
const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

const result = names.map((name, index) => {
  return `${name} ${ages[index]} лет/годов`;
});

console.log(result);
