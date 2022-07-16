const fs = require("fs");
const { sep } = require("path");
const { array } = require("yargs");

const ids = [];
const justQuestions = [];
const justAnswers = [];
const pointValues = [];
const arrOfObjects = [];


//gets one big string full of the entirety of the txt file
const data = fs.readFileSync('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    return data;
});

//turn data into an array of questions, splitting on the indicator in the file of when the question is ended
const separatedQuestions = data.split("_____     _____     _____     _____");


//iterate through separatedQuestions array, grabbing each string in array and getting its ID value
for (let i = 0; i < separatedQuestions.length; i++) {
    let str = separatedQuestions[i];

    // str.trim();

    let indexForId = str.indexOf("(") + 1;

    let indexForQMark = str.indexOf("?");
    let distanceToQ = i === 0 ? indexForQMark - 5 : indexForQMark - 9;

    let indexForAnswer = indexForQMark + 7;
    let distanceToAnswerEnd = str.length - indexForAnswer - 2;

    let pointIndex = indexForQMark + 3;


    if (i === 0) {
        ids.push(str.substr(indexForId, 3));
        justQuestions.push(str.substr(6, distanceToQ).replace(/\n|\r/g, ""));
        justAnswers.push(str.substr(indexForAnswer, distanceToAnswerEnd).replace(/\n|\r/g, ""));
        pointValues.push(str.substr(pointIndex, 2));
    } else {
        ids.push(str.substr(indexForId, 3));
        justQuestions.push(str.substr(10, distanceToQ).replace(/\n|\r/g, ""));
        justAnswers.push(str.substr(indexForAnswer, distanceToAnswerEnd).replace(/\n|\r/g, ""));
        pointValues.push(str.substr(pointIndex, 2));
    }

}

for (let i = 0; i < ids.length; i++) {
    let obj = {};

    obj.id = ids[i];
    obj.question = justQuestions[i];
    obj.answer = justAnswers[i];
    obj.points = Number(pointValues[i]);

    arrOfObjects.push(obj);
}

let counter = 0;

for (let i = 0; i < arrOfObjects.length - 1; i++) {
    let temp = JSON.stringify(arrOfObjects[i]);

    try {
        fs.appendFileSync("databaseQuestions.json", temp);
        counter++;
        console.log(`\n${counter} sequences completed\n`);
    } catch (err) {
        console.error(err);
    }
}

//Formatted correctly : 1 - 31