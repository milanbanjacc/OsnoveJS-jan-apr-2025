function solve(country, aparatus) {
  let russia = 0;
  let bulgaria = 0;
  let italy = 0;

  let percentage = 0;

  switch (aparatus) {
    case "ribbon":
      russia = 9.1 + 9.4;
      bulgaria = 9.6 + 9.4;
      italy = 9.2 + 9.5;
      break;
    case "hoop":
      russia = 9.3 + 9.8;
      bulgaria = 9.55 + 9.75;
      italy = 9.45 + 9.35;
      break;
    case "rope":
      russia = 9.6 + 9.0;
      bulgaria = 9.5 + 9.4;
      italy = 9.7 + 9.15;
      break;
  }

  if (country === "Russia") {
    percentage = (((20 - russia) / 20) * 100).toFixed(2);
    console.log(
      `The team of ${country} get ${russia.toFixed(3)} on ${aparatus}.`
    );
    console.log(`${percentage}%`);
  } else if (country === "Bulgaria") {
    percentage = (((20 - bulgaria) / 20) * 100).toFixed(2);
    console.log(
      `The team of ${country} get ${bulgaria.toFixed(3)} on ${aparatus}.`
    );
    console.log(`${percentage}%`);
  } else if (country === "Italy") {
    percentage = (((20 - italy) / 20) * 100).toFixed(2);
    console.log(
      `The team of ${country} get ${italy.toFixed(3)} on ${aparatus}.`
    );
    console.log(`${percentage}%`);
  }
}
