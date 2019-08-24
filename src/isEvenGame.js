import readlineSync from 'readline-sync';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const isEvenGame = () => {
  let scoreCount = 0;
  const isEvenQuestion = (num) => {
    console.log(`\nQuestion: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(num) === answer) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      console.log('Oops, it is the wrong answer :( The correct one is "no".\nLet\'s try again!');
    }
    return scoreCount;
  };

  isEvenQuestion(15);
  isEvenQuestion(6);
  isEvenQuestion(7);

  if (scoreCount === 3) {
    console.log('\nCongradulations!');
  }
};
