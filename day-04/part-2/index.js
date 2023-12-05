import { getInputList } from "../../utils/getInputList.js";

// const cards = ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53", "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19", "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1", "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83", "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36", "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"]

const cards = getInputList("04");
const isNumber = /\d+/g;

let totalCards = 0;

const copies = new Map();

cards.forEach((_, index) => copies.set(index + 1, 1));

cards.forEach((card) => {
    const cardDetails = card.split(":");
    const cardId = Number(cardDetails[0].match(isNumber));
    const numbers = cardDetails[1].split("|");
    const winningNumbers = [...numbers[0].match(isNumber)];
    const cardNumbers = [...numbers[1].match(isNumber)];

    let amountOfWins = cardNumbers.reduce((wins, number) => wins + winningNumbers.includes(number), 0);

    const amountOfCopies = copies.get(cardId);
    totalCards += amountOfCopies;
    for (let i = 1; i <= amountOfWins; i++) {
        const targetId = cardId + i;
        copies.set(targetId, copies.get(targetId) + amountOfCopies)
    };
});

console.log(totalCards);