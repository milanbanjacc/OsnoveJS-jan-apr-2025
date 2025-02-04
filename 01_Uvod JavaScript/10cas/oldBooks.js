


function solve(input){
    // prvi element predstavlja omiljenu knjigu
    let favouriteBook = input[0];
    // pocetni indeks za pretragu knjiga je od drugog elementa
    let index = 1;
    // prva knjiga za proveru u nizu je trenutno na ovom indeksu
    let book = input[index];

    // promenljiva koja prati da li je knjiga pronadjena ili nije
    let bookIsFound = false; // mora da bude false dokle god se ne pronadje knjiga, tada cemo promeniti na true

    // petlja koja ce se izvrsavati sve dok ne dodjemo do naredbe no more books
    while (book !== "No More Books"){
        // proveravamo da li je trenutna knjiga jednaka omiljenoj knjizi
        if (book === favouriteBook){
            console.log(`You checked ${index - 1} books and found it.`);
            bookIsFound = true; // pronasli smo knjigu
            break; // tada moramo da prekinemo petlju
        }

        // povecavamo indeks da bi smo pronasli knjigu
        index++;
        // postavljamo vrednost promenljive book na sledecu knjigu
        book = input[index]
    }

    // ako knjiga nije pronadjena kada se prodje kroz ceo niz ispisujemo sl
    if (bookIsFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }

}





solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);
    