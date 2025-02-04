function roundNumber(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let result = parseFloat(num.toFixed(precision));

  console.log(result);
}

roundNumber(15.6, 3);
