import { getInputList } from "../../utils/getInputList.js"

// const lines = ["467..114..", "...*......", "..35..633.", "......#...", "617*......", ".....+.58.", "..592.....", "......755.", "...$.*....", ".664.598.."]

const lines = getInputList("03");
const isNumber = /\d+/g;
const isSymbol = /[^.0-9]/g;
const setOfNumbers = new Set()

lines.forEach((line, lineIndex) => {
    const symbols = [...line.matchAll(isSymbol)];
    if (!symbols) {
        return;
    }
    symbols.forEach((symbol) => {
        const gearRatioNumbers = [];
        [lines[lineIndex - 1], line, lines[lineIndex + 1]].forEach((line) => {
            const numbers = [...line.matchAll(isNumber)]
            numbers.filter(Boolean).forEach((number) => {
                const startingIndex = number.index;
                const endingIndex = number.index + number[0].length;
                if ((startingIndex - 1) <= symbol.index && symbol.index <= (endingIndex)) {
                    gearRatioNumbers.push(Number(number));
                }
            })
        })
        if (gearRatioNumbers.length != 0) {
            setOfNumbers.add(gearRatioNumbers)
        }
        return;
    })
})


const gearRatios = []

setOfNumbers.forEach((set) => {
    if (set.length > 1) {
        gearRatios.push(set.reduce((auc, num) => auc * num))
    }
})

const sum = gearRatios.reduce((auc, num) => auc + num);

console.log(sum);