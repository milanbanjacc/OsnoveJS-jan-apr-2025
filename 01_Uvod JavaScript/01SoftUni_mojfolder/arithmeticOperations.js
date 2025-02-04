

// pravimo funkciju za oduzimanje dva broja

function oduzmi(a, b){
    let rezultat = a - b;
    console.log(rezultat);
}

oduzmi(8, 5);

// u nastavku drugi primer

let a = 41;
let b = 12;
let i = a / b;

// u ovom slucaju je rezultat 3.153846153846153
// ukoliko hocemo da nam rezultat bude samo ceo broj bez decimala, onda pisemo sledece:

let y = parseInt(a / b);

// ukoliko hocemo da podelimo dva broja, ali da se ispise samo ostatak koji je visak nakon podele dva cela broja:
let o = (a % b);


console.log("the result: ", i, o, "and", y);
