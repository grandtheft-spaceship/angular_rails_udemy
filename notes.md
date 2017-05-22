# Angular + Rails

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

## Hello Angular

* 
