import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const generateGame = (generateGameStep, taskExplanation = '') => {
  console.log(`Welcome to the Brain Games!\n${taskExplanation}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  if (generateGameStep === undefined) {
    return;
  }
  const stepsAmount = 3;
  for (let i = 1; i <= stepsAmount; i += 1) {
    const currentGame = generateGameStep();
    const correctAnswer = String(car(currentGame));
    const gameTask = String(cdr(currentGame));
    const userAnswer = readlineSync.question(`Question: ${gameTask}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratiulations, ${userName}!`);
};

export default generateGame;
