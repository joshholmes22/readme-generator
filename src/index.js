// 1. import inquirer
const inquirer = require("inquirer");

// 2. declare your questions array
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project title:",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please enter a description of your project:",
  },
  {
    type: "confirm",
    name: "isInstallation",
    message: "Would you like to enter installation instructions?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter your installation instructions:",
    when: (answers) => {
      return answers.isInstallation;
    },
  },
  {
    type: "confirm",
    name: "isUsage",
    message: "Would you like to enter usage instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your usage instructions:",
    when: (answers) => {
      return answers.isUsage;
    },
  },
  {
    type: "expand",
    name: "license",
    message:
      "Which license would you like to use? (Enter H to view all options)",
    choices: [
      {
        key: "a",
        name: "MIT License",
        value: "MIT",
      },
      {
        key: "b",
        name: "Apache License 2.0",
        value: "Apache",
      },
      {
        key: "c",
        name: "GNU General Public License v3.0",
        value: "GNU General",
      },
      {
        key: "d",
        name: "GNU General Public License v2.0",
        value: "GNU General",
      },
      {
        key: "e",
        name: "Other License",
        value: "other",
      },
    ],
  },
  {
    type: "confirm",
    name: "isContributing",
    message: "Would you like to enter any contributions?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your contributions:",
    when: (answers) => {
      return answers.isContributing;
    },
  },
  {
    type: "confirm",
    name: "isTest",
    message: "Would you like to enter testing instructions?",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter your testing instructions:",
    when: (answers) => {
      return answers.isTest;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub profile link:",
  },
];

// 3. declare your init function to ask questions
const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  console.log(answers);
};

// 4. start your application
init();
