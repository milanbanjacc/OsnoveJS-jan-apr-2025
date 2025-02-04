function solve(month) {
  switch (month) {
    case 1:
      console.log("January");
      break; // ako nema break, onda izvrsava ovaj case ali nastavlja dalje sa izvrsenjem!
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
      break;
  }
}

/*
moze i vise case-va da se veze npr:
case 1:
case 5:
case 9:
    pa onda dalje console.log ili nastavak izvrsenje za sve case-ove nadalje
*/

solve(2);
solve(16);
solve(4);
