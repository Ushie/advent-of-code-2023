import fs from "fs";

export function getInputList(day) {
    return fs.readFileSync(`day-` + day + "/input.txt").toString().split("\r\n")
}