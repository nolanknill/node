# Intro to Node
This demo shows how to: 
- add modules
- use axios
- use process.argv for additional runtime arguments
- read/write from files using fs.readFileSync, fs.writeFileSync

## Installing this demo:
1. `npm install`

## Running scripts:
- Use `node <name of script>` to run any of the scripts in this directory

### Available scripts:
- `node let-me-in.js <age> <country>`
    - ie. `node let-me-in.js 18 Canada`


- `node find-contestant-by-id.js <id>`
    - ie. `node find-contestant-by-id.js 4`
    - Finds a contestant from ./data/contestants.json

3. `node update-contestant-rating.js <rating> <contestant-id>`
    - ie. `node update-contestant-rating.js 8 1`
    - Updates a contestant's rating in ./data/contestants.json

4. `node axios-demo.js`
    - Gets list of TV Shows from an API and outputs them to the console
