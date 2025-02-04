

function calculate(pens, markers, boardCleaner, discount){
    //prvo konacan racun bez popusta
    // pens 5.80 usd, markers 7.20usd, liter 1.20usd
    // bez popusta je total
    let total = pens * 5.80 + markers * 7.20 + boardCleaner * 1.20;

    //racunanje cene posle popusta ce biti totalAfterDiscount, bice u decimali a ne procentima
    let totalAfterDiscount = total - (total * discount / 100);
    console.log(totalAfterDiscount);
}


calculate(4, 2, 5, 13);
