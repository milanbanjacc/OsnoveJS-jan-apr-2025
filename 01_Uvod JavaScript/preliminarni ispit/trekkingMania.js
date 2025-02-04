function solve(arr) {
  let number = Number(arr[0]);
  let makalu = 0;
  let montBlack = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  let totalNumber = 0;
  for (let i = 1; i < arr.length; i++) {
    let climbers = Number(arr[i]);
    totalNumber += climbers;
    if (climbers <= 5) {
      makalu += climbers;
    } else if (climbers >= 6 && climbers <= 12) {
      montBlack += climbers;
    } else if (climbers >= 13 && climbers <= 25) {
      kilimanjaro += climbers;
    } else if (climbers >= 26 && climbers <= 40) {
      k2 += climbers;
    } else if (climbers >= 41) {
      everest += climbers;
    }
  }
  console.log(`${((makalu / totalNumber) * 100).toFixed(2)}%`);
  console.log(`${((montBlack / totalNumber) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaro / totalNumber) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalNumber) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalNumber) * 100).toFixed(2)}%`);
}
