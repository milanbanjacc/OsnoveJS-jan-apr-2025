function solve(lost, helmetPr, swordPr, shieldPr, armorPr) {
  let helmetCount = 0;
  let swordCount = 0;
  let shieldCount = 0;
  let armorCount = 0;

  for (let i = 1; i <= lost; i++) {
    if (i % 2 === 0) {
      helmetCount++;
    }
    if (i % 3 === 0) {
      if (i % 2 === 0) {
        shieldCount++;
        if (shieldCount % 2 === 0) {
          armorCount++;
        }
      }
      swordCount++;
    }
  }

  let totalPrice =
    helmetCount * helmetPr +
    swordCount * swordPr +
    shieldCount * shieldPr +
    armorCount * armorPr;

  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
