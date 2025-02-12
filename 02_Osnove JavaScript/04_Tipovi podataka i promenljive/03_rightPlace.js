function solve(str, char, result) {
  /* RUCNO KUCANJE KAKO SMO NAUCILI
  let replaced = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "_") {
      replaced = replaced + str[i];
    } else {
      replaced = replaced + char;
    }
  }
    */
  let replaced = str.replace("_", char); // jednostavnija opcija
  if (replaced == result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

solve(`Str_ng`, `i`, `String`);
