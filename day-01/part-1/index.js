import { getInputList } from "../../utils/getInputList.js"

// const list = ["nqninenmvnpsz874", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

const list = getInputList("01");

let sum = 0;

const listOfNumbers = list.map((item) => item.match(/\d/g));
listOfNumbers
    .map((numbers) => Number(numbers[0] + numbers.pop()))
    .forEach((number) => {
        sum += number;
    });

console.log(sum);
