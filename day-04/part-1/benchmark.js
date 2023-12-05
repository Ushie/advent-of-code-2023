import { getInputList } from "../../utils/getInputList.js";

const cards = getInputList("04");


console.time("regex")

let totalPointsRegex = 0;
const isNumber = /\d+/g;

for (let i = 0; i < 100000; i++) {
    cards.forEach((card) => {
        let points = 0;
        const numbers = card.split(":")[1].split("|");
        const winningNumbers = [...numbers[0].match(isNumber)];
        [...numbers[1].match(isNumber)].forEach((number) => {
            if (winningNumbers.includes(number)) {
                points == 0 ? points += 1 : points *= 2;
            }
        })
        totalPointsRegex += points
    })
}
console.timeEnd("regex")

console.time("split")

let totalPointsSplit = 0;

for (let i = 0; i < 100000; i++) {
    cards.forEach((card) => {
        let points = 0;
        const numbers = card.split(":")[1].split("|");
        const winningNumbers = [...numbers[0].split(" ")];
        [...numbers[1].split(" ")].forEach((number) => {
            if (winningNumbers.includes(number) && number.length > 0) {
                points == 0 ? points += 1 : points *= 2;
            }
        })
        totalPointsSplit += points
    })
}
console.timeEnd('split')