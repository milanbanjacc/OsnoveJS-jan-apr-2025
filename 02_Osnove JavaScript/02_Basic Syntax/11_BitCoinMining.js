function solve(arr) {
  let bitcoin = 0;
  let lev = 0;
  let bitDay = 0;

  for (let day = 1; day <= arr.length; day++) {
    let currentGold = arr[day - 1];

    if (day % 3 === 0) {
      currentGold *= 0.7;
    }

    let currentLev = currentGold * 67.51;
    lev += currentLev;

    while (lev >= 11949.16) {
      if (bitcoin === 0) {
        bitDay = day;
      }
      bitcoin++;
      lev -= 11949.16;
    }
  }

  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${bitDay}`);
  }
  console.log(`Money left: ${lev.toFixed(2)} lv.`);
}

solve([50, 100]);
