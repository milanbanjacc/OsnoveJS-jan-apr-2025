//
//
//
//
//
function solve(prvi, drugi, treci) {
  let wins = 0;
  let loos = 0;
  let drawn = 0;

  let home1 = Number(prvi[0]);
  let away1 = Number(prvi[2]);
  let home2 = Number(drugi[0]);
  let away2 = Number(drugi[2]);
  let home3 = Number(treci[0]);
  let away3 = Number(treci[2]);

  if (home1 > away1) {
    wins++;
  } else if (home1 < away1) {
    loos++;
  } else {
    drawn++;
  }

  if (home2 > away2) {
    wins++;
  } else if (home2 < away2) {
    loos++;
  } else {
    drawn++;
  }

  if (home3 > away3) {
    wins++;
  } else if (home3 < away3) {
    loos++;
  } else {
    drawn++;
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loos} games.`);
  console.log(`Drawn games: ${drawn}`);
}

solve("0:2", "0:1", "3:3");
