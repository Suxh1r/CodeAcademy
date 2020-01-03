let userName = ''

userName ? 
console.log(`Hello, ${userName}!`)
: console.log('Hello!');

let userQuestion = 'How are you doing?'
if(userQuestion){
  console.log(`${userQuestion}`);
}

let randomNumber = Math.floor(Math.random()*8);

let eightBall = randomNumber
switch(eightBall) {
  case 0:
    console.log('Your fate is already determined');
  break;
  case 1:
    console.log('No, wrong, try again');
  break;
  case 2:
    console.log('Genius, I will steal that');
  break;
  case 3:
    console.log('Error 44: Input too dumb to comprehend');
  break;
  case 4:
    console.log('I am inevitable');
  break;
  case 5:
    console.log('Blasphemy');
  break;
  case 6:
    console.log('Disgusting, Do not speak again');
  break;
  case 7:
    console.log('Baby Yoda does not approve');
  break;
}