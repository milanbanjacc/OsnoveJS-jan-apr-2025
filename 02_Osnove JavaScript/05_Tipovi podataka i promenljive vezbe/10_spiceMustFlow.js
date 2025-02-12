function solve(yield) {
  let days = 0;
  let rest = 0;

  if (yield < 100) {
    // nije profitabilan
    console.log(days);
    console.log(rest);
  } else {
    while (yield >= 100) {
      rest += yield - 26; // ostatak zacina nakon sto radnici uzmu 26
      yield -= 10;
      days++;
    }

    if (yield < 100) {
      // da li je rudnik ostao bez resursa
      rest -= 26;
    }

    console.log(days);
    console.log(rest);
  }
}

solve(111);
