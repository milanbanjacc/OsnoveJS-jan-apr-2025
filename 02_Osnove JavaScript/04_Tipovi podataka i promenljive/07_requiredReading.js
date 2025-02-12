function solve(pages, pagePerHour, days) {
  let totalTime = pages / pagePerHour;
  let totalHours = totalTime / days;
  if (totalHours === Math.ceil(totalHours)) {
    console.log(totalHours);
  } else {
    console.log(totalHours.toFixed(1));
  }
}

solve(432, 432, 1);

// NIJDE MAKSIMALNO U JUDGE !!!
