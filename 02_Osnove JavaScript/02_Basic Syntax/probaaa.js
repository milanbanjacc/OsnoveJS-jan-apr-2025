function solve(arr) {
  let index = 0;
  let bitcoin = 0;
  let lev = 0;
  let day = 1;
  let bitDay = 0;

  while (day !== arr.length) {
    let currentGold = arr[index++];
    let currentLev = currentGold * 67.51;
    lev += currentLev;
    if (currentLev > 11949.16) {
      bitDay = day;
      bitcoin++;
      lev -= 11949.16;
    }
    day++;
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${bitDay}`);
  }
  console.log(`Money left: ${lev.toFixed(2)}`);
}

// solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
