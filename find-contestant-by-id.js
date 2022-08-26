const fs = require('fs');

const contestantsJson = fs.readFileSync("./data/contestants.json");
const contestants = JSON.parse(contestantsJson);

// How can we get the contestant by id?
    // We need the ID passed into the command 
    // Access that argument via process.argv

// we now have an ID, what do with that ID?
// Sanitize the input -> convert string to number?
const contestantId = Number(process.argv[2]);

const foundContestant = contestants.find((contestant) => {
    return contestant.id === contestantId;
});

console.log(foundContestant);