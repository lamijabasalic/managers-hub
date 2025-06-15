# Manager's Hub

Manager's Hub is a React-based web application that allows users to manage business contacts and reminders. The application was developed as part of the course *Software Verification, Validation and Testing* and includes key software testing components such as unit tests, integration tests, system tests, regression testing, static analysis, and test documentation.

## Live Demo

Link to live app: https://lamijabasalic.github.io/managers-hub/

## Project Purpose

This project demonstrates practical implementation of software testing methods on a non-trivial web-based application. It serves as a course project for the subject *Software Verification, Validation and Testing*.

## Features

- Add and display business contacts (name, company, phone, email)
- Create and display reminders (title, date, note)
- Data is saved to the browser's localStorage
- Simple, intuitive user interface
- No database or backend used

## Technologies Used

- React.js
- HTML, CSS, JavaScript
- LocalStorage API
- Jest and React Testing Library for unit and integration testing
- Cypress for end-to-end testing
- ESLint for static code analysis

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/lamijabasalic/managers-hub.git
   ```

2. Navigate into the project:
   ```
   cd managers-hub
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Testing Instructions

### Unit & Integration Tests

Run all Jest tests:

```
npm test
```

### Cypress (E2E) Tests

Make sure the app is running locally (`npm start`), then in a second terminal:

```
npx cypress run --spec "cypress/e2e/reminder.spec.js"
```

## Project Structure

```
/src
  /components
    ContactForm.js
    ContactList.js
    ReminderForm.js
    ReminderList.js
    Reminder.test.js
    ReminderFlow.test.js
  App.js
  App.css
/cypress
  /e2e
    reminder.spec.js
```

## Online Testing Tools Used

- **BrowserStack** – for manual testing on various devices and browsers
- **Checkly** – for end-to-end testing and uptime monitoring
- **LambdaTest** – for interactive browser/device testing via shared link

## Author

Lamija Basalić  
Project for course: Software Verification, Validation and Testing  
University: [Enter your university name]  
Supervisor: [Enter professor's name]

## License

This project is open-source and available under the MIT License.