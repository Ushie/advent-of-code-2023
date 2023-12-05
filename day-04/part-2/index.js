import { getInputList } from "../../utils/getInputList.js";

// const cards = ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53", "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19", "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1", "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83", "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36", "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"]

const cards = getInputList("04");
const isNumber = /\d+/g;

let totalCards = 0;

const copies = new Map()

for (let i = 0; i < cards.length; i++) {
    copies.set(i + 1, 1)
}

cards.forEach((card) => {
    let amountOfWins = 0;
    const [cardId, numbersString] = card.split(":");
    const [winningNumbersStr, cardNumbersStr] = numbersString.split("|");

    const cardDetails = {
        cardId: Number(cardId.match(isNumber)),
        numbers: {
            winningNumbers: winningNumbersStr.match(isNumber),
            cardNumbers: cardNumbersStr.match(isNumber)
        }
    };
    cardDetails.numbers.cardNumbers.forEach((number) => {
        if (cardDetails.numbers.winningNumbers.includes(number)) {
            amountOfWins += 1
        }
    });

    const amountOfCopies = copies.get(cardDetails.cardId);
    totalCards += amountOfCopies;

    for (let i = 1; i <= amountOfWins; i++) {
        const targetId = cardDetails.cardId + i;
        copies.set(targetId, copies.get(targetId) + (1 * amountOfCopies))
    }
})


console.log(totalCards);