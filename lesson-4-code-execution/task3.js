var numbers = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum );