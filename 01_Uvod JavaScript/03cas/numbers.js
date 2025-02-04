

/*
- less than 100 print: "Less than 100"
- between 100 and 200 print: "Between 100 and 200"
- greater than 200 print: "Greater than 200"
*/

function calculate(num){
    if(num < 100) {
        console.log("Less than 100");
        // && predstavlja logicko I! ovde je potrebno da svi uslovi budu tacni iz zagrade
        // || predstavlja logicko ILI! ovde je potrebno da samo jedan uslov bude tacan
    } else if ( 100 <= num && num <= 200){
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

calculate(250);
