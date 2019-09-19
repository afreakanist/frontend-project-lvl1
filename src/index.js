import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
export default (gameDescription, question, expectedAnswer) => {
  console.log(greeting);
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  let scoreCount = 0;
  const playRound = (q, a) => {
    console.log(`\nQuestion: ${q}`);
    const givenAnswer = readlineSync.question('Your answer: ');
    if (a === givenAnswer) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      console.log(`Oops, "${givenAnswer}" is the wrong answer :( The correct one is "${a}".\nLet's try again, ${userName}!`);
    }
    return scoreCount;
  };

  const roundAmount = 3;
  for (let i = 1; i <= roundAmount; i += 1) {
    playRound(question(), expectedAnswer(question()));
  }

  if (scoreCount === roundAmount) {
    console.log(`\nCongratulations, ${userName}!`);
  }
};
