// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'what is the description?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        
        type: 'input',
        name: 'Usage',
        message: 'How will this usage information be?',
    },
    {
        type: 'nput',
        name: 'Contribution',
        message: 'What are the contibution guidelines?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github user name?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`File ${fileName} generated successfully.`)
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
// Generate README content based on user input
            const readmeContent = `
# ${data.title}

## Description

${data.Description}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Github](#Github)
- [Email](#Email)

## Installation

${data.Installation}

## Usage

${data.Usage}

## contribution

${data.Contribution}

## tests

${data.Tests}

## Github

<a href= "https://github.com/${data.Github}">github link</a>

## email

you can reach me for additional comments or questions at my email ${data.email}

## License

<!-- add license  here -->
`;
            // Write README file
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => console.error(error));
}

// Function call to initialize app
init();
