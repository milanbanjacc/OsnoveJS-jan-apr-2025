


function solve(input){
    // inicijalizujemo vrednosti za username i pass
    let username = input[0];
    let password = input[1];

    // uzimamo prvu lozinku za proveru
    let data = input[2];  // treci element u nizu je lozinka za proveru

    // inicijalizacija indeksa za dalju proveru lozinke, tj nama u while petlji znaci kao pocetak provere
    let index = 3;

    while (data !== password){  // input[2] da li je = password
        // ako lozinka nije ispravna uzimamo sledecu lozinku za proveru
        data = input[index];
        index++;  // povecavamo index=3 za jedan dok ne dodjemo do tacnog pasvorda na nekom od narednih elemenata!
    }

    console.log(`Welcome ${username}!`);
}


solve(["Smith","1234","Pass","1324","1234"]);
