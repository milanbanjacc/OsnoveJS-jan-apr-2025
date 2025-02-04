function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = 0;

  let currentBase = base;
  let steps = 0;

  while (currentBase > 0) {
    steps++;
    height += increment;

    if (currentBase <= 2) {
      gold += currentBase * currentBase * increment;
      break;
    }
    let outerLayer = currentBase * 4 - 4;
    let innerLayer = (currentBase - 2) * (currentBase - 2);
    stone += innerLayer * increment;
    if (steps % 5 === 0) {
      lapis += outerLayer * increment;
    } else {
      marble += outerLayer * increment;
    }
    currentBase -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}

solve(11, 0.75);
