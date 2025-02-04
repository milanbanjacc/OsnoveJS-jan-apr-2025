// 1 usd = 0.81545 GBP
//dolar u funtu

function convertor(input){
    let usd = Number(input);
    let gbp = usd * 0.81545;
    console.log(gbp);
}

convertor("22");
