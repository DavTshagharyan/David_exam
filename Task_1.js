const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myFunction(num) {
  return num % 2 == 1;
}

const newArr = numbers.filter(myFunction);


console.log(newArr);