

function solve(arr){
    let total = arr[0];
    // sacuvali smo prvi broj iz niza `arr` a on se oznacava kao nulta pozicija u nizu `[0]`
    // on predstavlja ukupan br elemenata koji dolaze nakon njega

    // sada pravimo svih pet promenljivih koje nam trebaju za ispis na kraju
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    // u nastavku `for` krece od drugog broja u nizu
    //       [0]   [1]   [2]    [3] 
    // npr [  3,    1,    2,    999  ...]


    // u nastavku, let i = 1 zato sto on predstavlja poziciju u nizu, krecemo od druge pozicije!
    // arr.length predstavlja ukupan broj svih elemenata u nizu iz arr
    for (let i = 1; i < arr.length ; i++){  
        if (arr[i] < 200){
            p1Counter++;
        } else if (arr[i] >= 200 && arr[i] <=399){
            p2Counter++;
        } else if (arr[i] >= 400 && arr[i] <= 599){
            p3Counter++;
        } else if (arr[i] >= 600 && arr[i] <= 799){
            p4Counter++;
        } else {
            p5Counter++;
        }
    }

    // sada pravimo svaki counter posebno da bismo imali ispis za procente
    // total je dodeljen iy prvog br u nizu kao kolicina brojeva
    // i u nastavku pravimo racunicu za procente
    let p1 = (p1Counter / total) * 100;
    let p2 = (p2Counter / total) * 100;
    let p3 = (p3Counter / total) * 100;
    let p4 = (p4Counter / total) * 100;
    let p5 = (p5Counter / total) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}


solve([7,800,8001,250,199,399,599,799]);
