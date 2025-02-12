function solve(num1, parametar, num2) {
  let sum = 0;
  if (parametar === "+") {
    sum = num1 + num2;
  } else if (parametar === "-") {
    sum = num1 - num2;
  } else if (parametar === "*") {
    sum = num1 * num2;
  } else {
    sum = num1 / num2;
  }
  console.log(sum.toFixed(2));
}
