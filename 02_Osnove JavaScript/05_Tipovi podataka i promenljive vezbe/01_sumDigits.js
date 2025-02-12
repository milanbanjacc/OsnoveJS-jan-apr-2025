function sum(num) {
  let sum = 0;
  num = `${num}`; // ili moze isto num.toString()
  let arr = Array.from(num);

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // bitno naglasiti da bi se preslo iz stringa i prepoznao kao broj!
  }
  console.log(sum);
}
sum(245678);
