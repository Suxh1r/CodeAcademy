let raceNumber = Math.floor(Math.random() * 1000);
let registrar = true
let runnerAge = 21
if (registrar === true && runnerAge>18) {
raceNumber = 1000 + Math.floor(Math.random() * 1000);
}
if (registrar === true && runnerAge>18) {
  console.log(`Thanks for registering! Your number is ${raceNumber}.The race will begin at 9:30. See you at the finish line!.`);
} else if(registrar === false && runnerAge>18) {
  console.log(`Thanks for registering! Your number is ${raceNumber}. The race starts at 11:00. See you at the finish line!`);
} else if(runnerAge<18) {
  console.log(`Thanks for registering! Your number is ${raceNumber}. The race starts at 12:30. See you on the finish line!`);
} else { 
  console.log('Thanks your for registering! Please go to the registration desk for reciving your race time.');
}