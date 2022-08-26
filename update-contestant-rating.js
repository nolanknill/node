/*
inputs:
    - contestantId    2
    - rating          7
*/  
 
const fs = require('fs');

function updateContestantRating(ratingArg, contestantIdArg) {
    const contestantsJson = fs.readFileSync("./data/contestants.json");
    const contestants = JSON.parse(contestantsJson); //<--- Array

    // 1. Find the contestant 
    const contestantId = Number(contestantIdArg);

    const foundContestant = contestants.find((contestant) => {
        return contestant.id === contestantId;
    });

    // assume contestant is found
    // 2. Modify the value for "rating" key
    foundContestant.rating = Number(ratingArg);
    
    fs.writeFileSync("./data/contestants.json", JSON.stringify(contestants));
}

const rating = process.argv[2];
const contestantId = process.argv[3];

updateContestantRating(rating, contestantId);