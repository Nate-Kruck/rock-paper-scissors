/* getRandomThrow function that generates a random number then returns rock, paper, scissors. */

export function getRandomThrow() {
    const randomResult = Math.ceil(Math.random() * 3);

    if (randomResult === 1) {
        return 'rock';
    } else if (randomResult === 2) {
        return 'paper';
    } else if (randomResult === 3) {
        return 'scissors';
    }
}


