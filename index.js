// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What is the purpose of this project?", "What installation is required for this project?", "How do you use this project?", "What is this project licensed under?", "How do you want others to contribute to the project?", "What are the testing instructions?", "What is your GitHub?", "What is your email address?"];

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
            name:'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'license',
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
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    .then((data) => {
        console.log(data);
        writeToFile("README.md", data);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
