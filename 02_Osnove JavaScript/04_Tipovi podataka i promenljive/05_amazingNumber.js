function solve(num) {
  // 1. treba konvertovati u string
  let str = `${num}`; // najjednostavnija opcija

  // 2. konvertujemo karaktere stringa str u cifre i sabiramo ih
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  // 3. proveriti da li br sum sadrzi cifru 9
  // konvertujemo sum u string i proveravamo da li taj karakter sadrzi br 9
  let sumStr = `${sum}`;
  if (sumStr.includes("9")) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

solve(999);
