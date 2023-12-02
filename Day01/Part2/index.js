const list = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"]

const wordToDigit = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

function insertAtIndex(str, substring, index) {
    const arr = str.split('');
    arr.splice(index, 0, substring);
    return arr.join('');
}

function transformWord(word) {
    let remainingEntries = true;

    while (remainingEntries) {
        const foundEntries = Object.entries(wordToDigit).map(([key, value]) => {
            const index = word.indexOf(key);
            if (index !== -1) {
                const wordEndIndex = index + key.length;
                return { index: wordEndIndex, word: key, replacement: value };
            }
            return null;
        }).filter(Boolean);

        if (foundEntries.length === 0) {
            remainingEntries = false;
        } else {
            const entry = foundEntries[0];
            word = insertAtIndex(word, entry.replacement, entry.index - 1);
        }
    }

    return word;
}

const listOfNumbers = list
    .map(transformWord)
    .map((item) => item.match(/\d/g))
    .map((numbers) => Number(numbers[0] + numbers.pop()));
const sum = listOfNumbers.reduce((acc, num) => acc + num);

console.log(sum);