# Password-Generator
A simple Webapp that generates passwords that can include different types of characters randomly picked and placed to increase strength.

![Product screenshot](./assets/images/screenshots/screenshot1.jpg)

### Built With

* HTML5
* CSS3
* JavaScript ES6

## Features

- Picks the password length from the user, ranging between 8 and 128 characters.
- Can include different types of character at user's choice (Uppercase alphabets, lowercase alphabets, numeric and special characters).
- Includes validation of password length input, only accepting a number type falling within the range of 8 to 128.
- In case the user inputs the an unexpected input they are alerted to reattempt the input ith an alert mentioning what the mistake was.
- Expects the user to provide at least one type of characters to be included in the generated password through confirmation prompts
- If the user does not provide any character type, they are reprompted again to select at least one type.
- The user may abort the process at each input cycle, exiting the program with a message "Password was not created" not changing the current state of the output, so old passwords remain preseved.
- Intuitive excperience, with questions prompted after the other and exits as mentioned in the above point provided.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

A web browser.

### Installation

Not Required.

## Screenshots of product journey

#### Prompt to provide password length

![Prompt to provide password length](./assets/images/screenshots/screenshot2.jpg)

#### User inputs a word (string), asked to reattempt or cancel

![User inputs a string](./assets/images/screenshots/screenshot3.jpg)

#### User inputs an out of range length, asked to reattempt or cancel

![User inputs an out of range length](./assets/images/screenshots/screenshot4.jpg)

#### User prompt to confirm that the password can include a character type

![User prompt to confirm that the password can include a character type](./assets/images/screenshots/screenshot6.jpg)

#### User fails to confirm any type to be included and alerted that they didn't, asked to reattempt or to cancel

![User fails to confirm](./assets/images/screenshots/screenshot7.jpg)

#### User cancels at any stage, resulting in aborting the program, with a message declaring no password generated

![User aborts](./assets/images/screenshots/screenshot5.jpg)

#### User follows the secquence correctly and a password is succcessfully generated

![Successful attempt](./assets/images/screenshots/screenshot8.jpg)

## License

Created for ESMT Full Stack Developer Bootcamp

## Contact

Your Name - [@tdude_allam](https://twitter.com/Dude_Allam) - mohamedallam.tu@gmail.com

Project Link: [https://github.com/mohamedallam13/Password-Generator](https://github.com/mohamedallam13/Password-Generator)
