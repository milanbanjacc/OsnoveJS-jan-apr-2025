

function calculate(deposit, term, intrestRate){
    // pretvaramo procente u decimalni br
    // 5.7 smo pretvorili u decimalni br
    let rate = intrestRate / 100;
    let result = deposit + term * ((deposit * rate) / 12);
    console.log(result);
}


calculate(200, 3, 5.7);
