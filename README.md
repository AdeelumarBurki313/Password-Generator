Password Generator

![Screenshot 2025-03-06 233529](https://github.com/user-attachments/assets/cf0e4b93-d893-4e4f-9bd0-e7ad47d99f8a)

Overview

This is a Password Generator web app built using React.js. The app generates strong and secure passwords based on user preferences such as password length, inclusion of numbers, and inclusion of special characters.

Features:

Generate random passwords with customizable length.
Option to include numbers and special characters.
Copy the generated password to the clipboard for easy usage.

Project Structure



src/

├── components/

│   └── PasswordGenerator.js

├── App.js

├── index.css

└── styles/

    └── Tailwind CSS file

PasswordGenerator.js:
 The main functional component responsible for generating passwords, providing the options to adjust length, numbers, and special characters.
App.js:
 The main entry point for the app, rendering the PasswordGenerator component.
How to Use:

Password Length:
 Use the range slider to adjust the length of the generated password.
Include Numbers:
 Toggle the checkbox to include numbers (0-9) in the password.
Include Special Characters:
 Toggle the checkbox to include special characters (e.g., !@#$%^&*()).
Generate Password:
 Once the settings are selected, the password will be generated automatically.
Copy Password:
 Click the "Copy" button to copy the generated password to your clipboard.

State Management:

password:
Stores the generated password.

length:
Stores the length of the generated password.

numberAllowed:
A boolean value indicating whether numbers should be included.

charAllowed:
A boolean value indicating whether special characters should be included.

passwordGenerator:
Generates a random password based on the current state values.

copyToClipBoard:
Copies the generated password to the clipboard using the browser's navigator.clipboard.writeText() API.

useEffect Hook:
The passwordGenerator function runs whenever the length, numberAllowed, or charAllowed state changes.

useCallback Hook:
Ensures that the passwordGenerator and copyToClipBoard functions do not get recreated on every render, improving performance.


Technologies Used

React.js:
 JavaScript library for building user interfaces.

Tailwind CSS:
 Utility-first CSS framework for styling the components.

Clipboard API: 
To copy the generated password to the clipboard.

Future Enhancements:

Add password strength indicator (e.g., weak, strong, very strong).

Add options to exclude certain characters or types of characters.

Allow for saving and storing multiple passwords for user convenience.

Implement a password validator to check password strength against common patterns.


How to Improve

Replace the alert with a user-friendly notification when copying to clipboard.

Add unit tests for the password generator logic.
