function printAndSum(start, end) {
  let sum = 0;
  let allNumbers = "";

  for (let i = start; i <= end; i++) {
    allNumbers += i + " ";
    sum += i;
  }
  console.log(allNumbers);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
