
// NASTAVI !!!

function solve(input){
  let i = 0;
  let poorGradesNum = Number(input[i++]);
  let currentName = input[i++];
  let problemCount = 0;
  let nameProblem = "";
  let totalGrades = 0;
  let pureGrades = 0;

  while (currentName !== "Enough"){
    
    let currentTask = currentName;
    let currentGrade = input[i];
    
    if (currentGrade <= 4){
      pureGrades++;
    }

    if (pureGrades === poorGradesNum){
      console.log(`You need a break, ${poorGradesNum} poor grades.`);
      break;
    }

    totalGrades += currentGrade;
    problemCount++;
    nameProblem = currentTask;
    i++;
    currentName = input[i++];
  }

  let avg = totalGrades / problemCount

  if (pureGrades !== poorGradesNum){
  console.log(`Average score: ${avg}`);
  console.log(`Number of problems: ${problemCount}`);
  console.log(`Last problem: ${nameProblem}`);
  }

  
}



solve([2,"Income",3,"Game Info",6,"Best Player",4]);
