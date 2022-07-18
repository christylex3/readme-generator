// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    "What is the title of your project?",
    "What is the purpose of this project?",
    "What installation is required for this project?",
    "How do you use this project?",
    "What is this project licensed under?",
    "How do you want others to contribute to the project?",
    "What are the testing instructions?",
    "What is your GitHub's username?",
    "What is your email address?"
];

// Create a function to write README file
function writeToFile(fileName, data) {

    // Stores the generateMarkdown(data) as a string
    var fileContents = generateMarkdown(data);

    // Generates the README.md
    fs.writeFile(fileName, fileContents, (err) =>
        err ? console.error(err) : console.log("Your README.md has been generated!")
    );
}

// Initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['Apache', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'MIT License', 'Mozilla Public License 2.0', 'The Unilicense', 'None'],
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'githubUsername',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((data) => {
            // console.log(data);
            writeToFile("README.md", data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
