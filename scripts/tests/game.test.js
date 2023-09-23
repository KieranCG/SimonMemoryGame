/**
 * @jest-environment jsdom
 */

// Import the 'game' object from an external module (e.g., '../game')
const { game } = require("../game");

// Set up the DOM or any necessary environment before running tests
beforeAll(() => {
    // Read the contents of 'index.html' and write to the DOM
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Describe the test suite
describe("Game option contains correct keys", () => {
    // Define the test case
    test("score key exists", () => {
        // Ensure that the 'score' key exists in the 'game' object
        expect("score" in game).toBe(true);
    });
});