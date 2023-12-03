import { getInputList } from "../../utils/getInputList.js"

// const lines = ["467..114..", "...*......", "..35..633.", "......#...", "617*......", ".....+.58.", "..592.....", "......755.", "...$.*....", ".664.598.."]

const lines = getInputList("03");
const isNumber = /\d+/g;
const isSymbol = /[^.0-9]/g;
const partNumbers = []

function isValidPartNumber(startingIndex, endingIndex, lines) {
    let isValid = false;
    lines.filter(Boolean).forEach((line) => {
        const symbols = [...line.matchAll(isSymbol)];
        if (!symbols) {
            return;
        }
        symbols.forEach((symbol) => {
            const symbolIndex = symbol.index;
            if ((startingIndex - 1) <= symbolIndex && symbolIndex <= (endingIndex)) {
                isValid = true;
                return;
            }
        })
    })
    return isValid;
}

lines.forEach((line, index) => {
    const numbers = [...line.matchAll(isNumber)];
    if (!numbers) {
        return;
    }
    numbers.forEach((number) => {
        const startingIndex = number.index;
        const endingIndex = startingIndex + number[0].length;
        if (isValidPartNumber(startingIndex, endingIndex, [lines[index - 1], line, lines[index + 1]])) {
            partNumbers.push(Number(number));
        }
    })
});

const sum = partNumbers.reduce((auc, num) => auc + num);

console.log(sum);