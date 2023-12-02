const list = ["nqninenmvnpsz874", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

let sum = 0;

const listOfNumbers = list.map((item) => item.match(/\d/g));
console.log(listOfNumbers);
listOfNumbers
    .map((numbers) => Number(numbers[0] + numbers.pop()))
    .forEach((number) => {
        sum += number;
    });

console.log(sum);
