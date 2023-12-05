import { getInputList } from "../../utils/getInputList.js"

// const lines = ["467..114..", "...*......", "..35..633.", "......#...", "617*......", ".....+.58.", "..592.....", "......755.", "...$.*....", ".664.598.."]

const lines = getInputList("03");
const isNumber = /\d+/g;
const isSymbol = /[^.0-9]/g;
const setOfNumbers = new Set();

lines.forEach((line, lineIndex) => {
    const symbols = [...line.matchAll(isSymbol)];
    if (!symbols) {
        return;
    }
    symbols.forEach((symbol) => {
        const gearRatioNumbers = [];
        const surroundingLines = [lines[lineIndex - 1], line, lines[lineIndex + 1]]
        surroundingLines.forEach((surroundingLine) => {
            const numbers = [...surroundingLine.matchAll(isNumber)]
            numbers.filter(Boolean).forEach((number) => {
                const startingIndex = number.index;
                const endingIndex = number.index + number[0].length;
                if ((startingIndex - 1) <= symbol.index && symbol.index <= (endingIndex)) {
                    gearRatioNumbers.push(Number(number[0]));
                }
            })
        })
        if (gearRatioNumbers.length > 1) {
            setOfNumbers.add(gearRatioNumbers)
        }
    })
});

const sum = Array.from(setOfNumbers)
    .map((set) => set.reduce((acc, num) => acc * num, 1))
    .reduce((auc, num) => auc + num)

console.log(sum);