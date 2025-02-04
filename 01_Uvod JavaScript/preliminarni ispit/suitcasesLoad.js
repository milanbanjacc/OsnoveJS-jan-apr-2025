function solve(input) {
  let capacity = Number(input[0]);
  let totalLoaded = 0;
  let totalVolume = 0;
  let index = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === "End") {
      console.log(`Congratulations! All suitcases are loaded!`);
      break;
    }

    let suitcaseVolume = Number(input[i]);

    if (index % 3 === 0) {
      suitcaseVolume += 1.1;
    }

    if (totalVolume + suitcaseVolume > capacity) {
      console.log(`No more space!`);
      break;
    }

    totalVolume += suitcaseVolume;
    totalLoaded++;
    index++;
  }
  console.log(`Statistic: ${totalLoaded} suitcases loaded.`);
}
