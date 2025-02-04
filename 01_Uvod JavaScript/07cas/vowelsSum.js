

function solve(text){
    // inicijalizacija promenljive za sum
    let sum = 0;

    // petlja za prolazak kroz tekst
    for (let i = 0; i < text.length; i++){
        // uzimamo karakter koji se nalazi na indeksu `i` i smestamo ga u promenljivu
        let letter = text[i];

        // provera da li je karakter jednak sa `a`
        if (letter === "a"){
            sum += 1;
        } else if (letter === "e"){
            sum += 2;
        } else if (letter === "i"){
            sum += 3;
        } else if (letter === "o"){
            sum += 4;
        } else if (letter === "u"){
            sum += 5;
        }
    }
    console.log(sum);
}

solve("hello");
