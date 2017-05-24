# Angular + Rails
## [Class Repo](https://github.com/rails-camp/freelance-camp-fe/tree/dbf26670a67d38748925cf4529e2c4303144e7c3)

* You're architecture needs to fit your desired outcome
* Monolithic Architecture
  * Everything resides within the application itself
* Microservice Architecture
  * Frontend and Backend are different applications
    * Frontend is used to simply show data and features to user
    * Backend consists of database, CRUD functionality, mailer functionality
    * Backend applications serve as API; they store and manage data

## Monolith vs Microservce Architecture

* Monolithic: Used for traditional, server-side system
  * The entire system's function is based on a single application
  * Advatanges: Faster to develop, could function faster
  * Every feature resides within the application itself
  * Uses the same database, server, file-system
    * Maintaining application can be difficult to do once app becomes large due to being tightly coupled

* Microservice
  * Every feature is its own application
  * Each application reside on their own servers
  * They all have APIs in order to communicate with each other
    * Because applications are decoupled; you can scale each component separately.
    * You can also test and isolate each component separately
    * Also, if one component fails, the entire application won't break, only that component

## The Role of Services in Microservice Architecture

* You have separate applications that communicate with each other via APIs
  * The backend application will have a JSON feed available
  * The frontend component will send a REQUEST to the backend for some JSON data
  * The backend will then RESPOND back with a JSON object
  * The frontend will then read it, parse it, and render it
    * The frontend will NOT store the data, only render it
* "Separate of concerns"
* You can also create new records in the database from the frontend application by communicating with the backend API

## The Role of Components in Microservices

* Instead of using an MVC architecture, Angular uses an "Component Based Approach"
  * All the code for a certain feature will be inside the corresponding directory
* Components can be anything within the application
* App -> Feature -> New -> Show -> List -> Feature-Button, etc.

## Configuring a system to Run Angular 2 Applications

* Install homebrew
* Install node
* Install npm

## Generating an Angular 2 Application From Scratch

* [Angular QuickStart](https://angular.io/docs/ts/latest/quickstart.html)
  * Follow for installation
  * Makes it easier for correct versions of dependencies
* Add package.json file
  * Holds dependencies and libraries -> similar to Rails' Gemfile
  * Directly connected to NPM
  * $ sudo npm install
    * Wires up dependencies and libraries within package.json file
    * Various modules within an "npm_modules" directory will be added to file tree
    * DO NOT EDIT MODULE FILES
* Add tsconfig.json file
  * Handles configuration for compiling TypeScript -> JavaScript
* Add systemjs.config.js file
  * System configuration file for the application. Essentially, wires up entire application


## Hello Angular

* Add app.module.ts file
  * Required to have the entire Angular system working
  * Used to manage various components of application
    * Declarations, import modules
  * Controls access of what's allowed in the application
* Add main.ts file
  * Manages the connection to the web server
  * Makes it possible for application to be seen in the browser
* "Decorator" in TypeScript is a way to wrap metadata around classes
* Angular takes a more lightweight approach to importing modules
* Selector: What the rest of the application references when we are calling the homepage
* "Directive" - custom CSS selector that you set for rendering data
* $ npm start
  * Starts server and opens application 
