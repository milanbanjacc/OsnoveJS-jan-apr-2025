function solve(arr) {
  let index = 0;
  let username = arr[index++];
  let correct = "";

  for (let i = username.length - 1; i >= 0; i--) {
    correct += username[i];
  }

  let pokusaj = 0;

  while (pokusaj !== 4) {
    let guess = arr[index];
    if (guess === correct) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      pokusaj++;
      if (pokusaj === 4) {
        console.log(`User ${username} blocked!`);
        return;
      }
    }
    console.log("Incorrect password. Try again.");
    index++;
  }
}

solve([`sunny`, `rainy`, `cloudy`, `sunny`, `not sunny`]);
