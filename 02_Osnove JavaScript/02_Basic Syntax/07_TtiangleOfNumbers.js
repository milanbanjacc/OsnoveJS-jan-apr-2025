function solve(n) {
  let tree = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      tree += i + " ";
    }
    console.log(tree);
    tree = "";
  }
}
solve(4);
