


function solve(input){
    // prvi element u nizu je ciljana suma koju zelimo da dostignemo sabiranjem svakog sl elementa

    let num = Number(input[0]);

    // promenljiva za sumu daljih sabiranja
    let sum = 0

    // inicijalizacija indeksa sa kojim cemo prolaziti kroz petlju
    let index = 1;

    // pokrecemo petlju koja se izvrsava dokle god suma nije veca od ciljane
    while (sum < num){
        // uzimamo trenutni br iz niza
        let currentNumber = Number(input[index]);
        // sada trenutni br dodajemo sumi
        sum += currentNumber;
        index++;  //povecavamo index za jedan da bi se preslo na sl element iz niza
    }

    // kada suma postane veca od ciljane, ispisace se u nastavku
    console.log(sum);
}

solve([100,10,20,30,40]);
