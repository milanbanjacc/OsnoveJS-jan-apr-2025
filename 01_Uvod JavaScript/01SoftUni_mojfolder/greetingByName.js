

// string je naziv za Tekst
// konkatanacija je spajanje stringova, ovde cemo spojiti tekstove sa +
// za argument pisemo name u nastavku
// mozemo da imamo isti naziv za argument i funkciju, ali se izbegava zbog mogucnosti zabune u daljem pisanju!

function greeting(name){
    let greeting = "Hello, " + name + "!";
    console.log(greeting);
}

greeting("Milan");
greeting("Banjac");
