const list = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"]

const wordAndDigit = Object.entries({
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
})

function insert(str, substring, index) {
    const arr = str.split('');

    arr.splice(index, 0, substring);

    return arr.join('');
}

const transformedList = list.map((item) => {
    let hasWords = true;

    while (hasWords == true) {
        function getValidEntriesAndIndexes() {
            let objectOfFoundWordsAndIndexes = [];
            wordAndDigit.forEach((digit) => {
                const [key, value] = digit;
                const index = item.indexOf(key);
                if (index != -1) {
                    const secondIndex = index + key.length;

                    objectOfFoundWordsAndIndexes[index] = {
                        index: secondIndex,
                        word: key,
                        replacement: value
                    }
                }
            })
            return objectOfFoundWordsAndIndexes.filter(Boolean);
        }

        const entries = getValidEntriesAndIndexes()

        if (entries.length == 0) {
            hasWords = false;
        } else {
            const entry = entries.at(0)
            item = insert(item, entry.replacement, entry.index - 1)
        }
    }

    return item;
});

const listOfNumbers = transformedList.map((item) => item.match(/\d/g)).map((numbers) => Number(numbers[0] + numbers.pop()));
const sum = listOfNumbers.reduce((acc, num) => acc + num);

console.log(sum);