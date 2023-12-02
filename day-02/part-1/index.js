import { getInputList } from "../../utils/getInputList.js"

// const games = [
//     "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
//     "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
//     "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
//     "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
//     "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
// ];

const games = getInputList("02");

const valid = { red: 12, green: 13, blue: 14 };

const listOfValidGames = [];

games.forEach((game) => {
    game = game.split(": ");
    const gameId = Number(game[0].match(/\d+/g)[0]);
    const sets = game[1].split("; ");

    let isValidGame = true;
    sets.forEach((set) => {
        set.split(", ").forEach((cube) => {
            const numberAndColor = cube.split(" ");
            const isValidSet = valid[numberAndColor[1]] >= numberAndColor[0];
            if (!isValidSet) {
                isValidGame = false;
            }
        });
    });

    if (isValidGame) {
        listOfValidGames.push(gameId);
    }
});

const sum = listOfValidGames.reduce((auc, num) => auc + num);

console.log(sum);
