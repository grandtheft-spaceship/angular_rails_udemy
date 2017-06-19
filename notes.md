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
* "Separation of concerns"
* You can also create new records in the database from the frontend application by communicating with the backend API

## The Role of Components in Microservices

* Instead of using an MVC architecture, Angular uses an "Component Based Approach"
  * All the code for a certain feature will be inside the corresponding directory
* Components can be anything within the application
* App -> Feature -> New -> Show -> List -> Feature-Button, etc.

## Configuring a system to Run Angular 2 Applications

* **Install homebrew**
* **Install node**
* **Install npm**

## Generating an Angular 2 Application From Scratch

* [Angular QuickStart](https://angular.io/docs/ts/latest/quickstart.html)
  * Follow for installation
  * Makes it easier for correct versions of dependencies
* **Add package.json file**
  * Holds dependencies and libraries -> similar to Rails' Gemfile
  * Directly connected to NPM
  * **$ sudo npm install**
    * Wires up dependencies and libraries within package.json file
    * Various modules within an "npm_modules" directory will be added to file tree
    * DO NOT EDIT MODULE FILES
* **Add tsconfig.json file**
  * Handles configurati on for compiling TypeScript -> JavaScript
* **Add systemjs.config.js file**
  * System configuration file for the application. Essentially, wires up entire application


## Hello Angular

* **Add app.module.ts file**
  * Required to have the entire Angular system working
  * Used to manage various components of application
    * Declarations, import modules
  * Controls access of what's allowed in the application
* **Add main.ts file**
  * Manages the connection to the web server
  * Makes it possible for application to be seen in the browser
* **Decorator** in TypeScript is a way to wrap metadata around classes
* Angular takes a more lightweight approach to importing modules
* Selector: What the rest of the application references when we are calling the homepage
* "Directive" - custom CSS selector that you set for rendering data
* **$ npm start**
  * Starts server and opens application

## Working with Browser Sync

* Special component within Angular
* Located within node_modules directory
* Watches for file changes and on SAVE, will update browser in real time
* Anguar ERRORS will show up in browser CONSOLE

## Creating the App Component

* Have a clear, organizational structure for directories
* App Component is the master component that all other components flow through
  * Similar to ApplicationController in Rails
* Have subcomponents in directory with name of component
* **moduleID** keeps track of everything component needs to do
  * If you forget to include moduleID, error message will be difficult to debug
* **Bootstrap** - Dictates which component to begin application with
* **Declarations** - Add AppComponent
* Now, our AppComponent and HomepageComponent are separated

## Introduction to Angular 2 Routing

* Routing is component-based
* **Add import app-routing.module.ts** file to hold routes
* Angular works all on a **single-page application structure**
  * There aren't multiple pages/ no refreshes
* Routes help the application add and remove components to render on the page

## How to Create View Files in Angular 2

* Create view: #componentname.component.html
* **template: -> templateUrl:**

## Create a Document Management Component

## Creating Links Between Pages in Angular

* Links in Angular are different than links in HTML
* **anchor** tags will use **routerLink** attribute
  * Pages get called dynamically with AJAX and renders the views that you specify, without refreshing the page

## Creating an Angular Interface to Model Data

* An **interface** in TypeScript is a way to describe a type of object
  * Supplies structure for how an object should look like and what attributes it should have
    * Each attribute should have a data type
* **export interface Object{}**
* We are using snake_case vs camel_case here because we are going to eventually use a Rails API and we want to match the attributes between the two

## Creating Mock Data in an Angular 2 Application

* **documents: Document[]** - Creates a variable, named **documents**, which will be an **array** of datatype **Document**
  * We still use JavaScript Objects to create each document
* Because we have an array of objects, we need to iterate through them
* Specific to Angular -> **<div *ngFor="let doc of documents"></div>**
  * **ngFor** - iterates through our collection
  * **let doc** - **doc** acts as our variable representing each object in the collection
  * **of documents** - **documents** is our array of document objects
  * **div** - will represent structure for each object in the collection
* **{{}}** - the Angular way to **interpolate** in HTML
* We can use **href** attribute for link here because we are redirecting outside of our application. We only use **routerLink** if we are going to redirect within our own application

## How to Access Data from an Angular View Template

* Overview: We can set data to variables declared in components that can be accessed by the corresponding template

## Creating the Initial Proposal Component

## Creating an Angular 2 Data Model for Proposals

* instead of exporting an **interface**, we are going to use a **class** and a **constructor function**
* adding the **?** after a parameter makes it optional

## Populating an Angular List View with Data

* Because we used a class and a constructor function, each proposal is a true object
* When creating a record, we are doing something a little different because we are creating actual proposal objects
* **this.proposalOne** - When we are referencing a data attribute in a class, we cannot just call a value.
  * We need **this** here because **proposalOne** is more like a model/blueprint for the object/variable. **this** will inject actual data when the program is running; allowing the values to be updated dynamically.
  * **this** references the real objects

## Building an Angular 2 Component that will Create New Proposals

## Introduction to Angular 2 Forms

* import **forms module** in **app.module.ts**
* **<form #proposalForm="ngForm"></form>** - Angular way of creating a form
  * **#proposalForm=** - name of our form
  * **"ngForm"** - the type of form
* common convention to split all attributes for **input** tag on separate lines
* **#customer='ngModel'** => **designator** - placeholder so Angular knows this item is tied to the rest of the module/entire Angular ecosystem for component
* **[(ngModel)]="proposal.customer"** - wires up/connect **ngModel**
  * **[()]** - Creates an input and outlet in Angular. It tells Angular we want the value to be read in from the component and have the ability to change other things.
    * The **[]** mean you can **read data in**
    * The **()** mean you can **set values**
  * So, we are saying that our input item is going to connect to **ngModel** and it is going to talk with the **proposal.customer**.
  * We have access to **proposal** because when we created the component, we a **proposal**. We then gave our view access to proposal.

## Completing the Angular Proposal Form
* Be aware and update **type** attributes

## How to implement Dynamic Data Validations in Angular 2

* **<div [hidden]=customer.valid || customer.pristine>**
  * First, we want the **div** to be **hidden** // Users will not see this div
  * **customer.valid** - just validates that there is some text entered
  * **customer.pristine** - **pristine** is a state that Angular looks for in the form. It checks to see if the input had been touched at all; meaning has someone typed something within the box. If you don't put pristine, the error will pop up as soon as the form loads
  * The value (error message) you enter in the div will only be displayed if both statements are false
  * IMPORTANT NOTE: You should still enter **server-side validations** because a user can still work around and break these **client-side validations**

## Creating Dynamic Routes in Angular 2 Based on an ID Lookup

* The **proposal-show** route needs to be dynamic; similar to Rails routes for **show pages**
* Like Rails, we are going to use **:id**

## How to Trigger "Active" Classes in Angular 2 Views

* Because we need to ability to read in the route parameters; when we go to the show page, the Angular system can dynamically see what the route is to read the id
  * We're going to use **ActivatedRoute** and **Params** modules from **Router**
  * We're going to use **OnInit** from **Core**
  * export class ProposalShowComponent **implements OnInit** {}
    * **OnInit** - On Initialization of the page load
* **routeID** - we're gong to use **datatype: any** because the value we get back from the route is an **observable**
* **dependency injection** - Let's component know that when a **new class is instantiated, it immediately calls the constructor**, and the constructor calls an instance of **ActivatedRoute**, then stores it in **route** argument
  * First, you need a **constructor**
  * Then, you pass keyword **private**
  * Then, the value of the **argument**
  * Last, the **datatype** of argument
* **ngOnInit: void()** - means that there will be **no return values**, it will only **perform some actions**
  * **this.route.params.subscribe** - the **subscribe** keyword gives us access to the object we want to communicate with
  * We then pass **subscribe** an **anonymous function**
  * **+params['id']** - the **+** converts id from string to number
* NOTE: At this point, we don't actually have access to the object itself, we're only calling the ID by interpolating values from the URL

## Installing Bootstrap 4 into an Angular 2 Application with ng-bootstrap

* [ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)
* NOTE: If you want to install a **specific version** of an npm package;
  * SYNTAX: $ npm install *package_name*@*version_number*
* $ sudo npm install --save @ng-bootstrap/ng-bootstrap@1.0.0-alpha.24
* Add **CDN** from bootstrap to index.html file

## How to Set Universal Styles in an Angular 2 Application

## Creating a Bootstrap 4 Navigation Bar

* **NOTE** - There is a different between UI components for standard Bootstrap and ngBootstrap

## How to Dynamically Add CSS Classes in an Angular 2 View

* **routerLinkActive="active"** - indicates which page were are currently on within the navbar by dynamically adding the **active class** to whatever route we are on
* **[routerLinkActiveOptions]="{exact: true}"** - Specifies differences between the different proposal routes

## Using Bootstrap Cards in an Angular Application

## Creating Angular 2 Component Specific CSS Files

* **styleUrls** - An array of stylesheets
  * Anytime you want to call a custom CSS file for a component, you need to add it to the **decorator**
* Be mindful on scoping
* Specific styles for a component need to be included in the same directory as the component

## Setting Additional Global Styles for All Application Components in Angular 2

* We can set up a global stylesheet, but can override specific styling with document-specific stylesheets

## How to Override the Default Bootstrap 4 Navigation Styles

## Adding Styles to an Angular 2 Form

## How to Style Dynamic Validation Messages in Angular 2

## How to Style Form Inputs with Bootstrap 4 Styles

## How to Integrate the List Group Component Styles in Angular 2

## How to Work with Angular 2 Pipes to Format Currencies

* **Pipes** allow you to dynamically **format** a value to fit certain parameters
  * implement pipes using the **|** character
  * you can also pass options to pipes using a colon **:**
* **| currency:"USD":true:".0"**
  * **"USD":true** is the option that provides the **$** symbol in our format
  * **".0"** is the number of **0**'s we want after a decimal point

## Final Style Changes to Angular Application

## How to Add a Custom Font to an Angular 2 Application

* [Google Fonts](http://fonts.google.com)
* put import link before stylesheet link so font is available

## Generating a Rails 5 API Application from Scratch

* **$ rails new freelance_documents --api -T -d postgresql**
  * creates an **API only** rails application with a Postgresql db and excludes tests
* **text** vs **string** datatypes in rails db
  * **text** allows for infinite amount of chartacters
  * **string** has character limit and will throw errors if too long

## How to Generate Data in a Rails 5 Application

* **$ rails s -p 3001**
  * Starts rails server on specified **port** - **3001**

## How to Configure the Network Settings for a Rails API App

* **gem 'rack-cors'**
  * Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
  * Allows you to setup rules/standards for networks and applications to communicate with our rails API.
* **origins '*'**
  * Allows any application to communicate with our API; **this is not best, real-world practice**

## Creating an Angular 2 Service for Managing API Data

* First, we need to create a **service** for our documents
  * a **service** is a layer between our application and our API
* **document.service.ts**
  * instead of bringing in components, this component will bring in the things we need to **connect with the API**
* **Injectable** is a module from the Angular core library
  * It is also a **decorator**
  * We're saying that our **DocumentService** class is going to be an **Injectable** type of class
* **providers** - provides data

## Introduction to Angular 2 Observables

* [RxJS](http://reactivex.io) - a set of JS libraries that follow the **observer pattern**
  * **reactive programming**
  * **Observables** set up **streams of data** that allow multiple things to happen at the same time or at structured intervals
  * This allows us to call our API, after the initial call, in the background and get any new objects that have been created and return them
  * You can think about user actions having an entire **lifecycle**
* **private documentsUrl = 'http://localhost:3001/freelance_documents.json';**
  * This is what we use to connect with our API
  * The URL is our **API query string**; the endpoint we want to get data from
* **private http: Http**
  * Our **constructor** function is going to be our connection with **HTTP**
  * **http** will be of **Http** type/ the **Http** library will be called as soon as the **class is instantiated**
  * We will use **dependency injection**
* **getDocuments(): Observable<Document[]> {**
  * **getDocuments** is a function that is going to return an **observable**
  * The observable takes a **type argument** which is given through **<>**
* **return this.http.get(this.documentsUrl)** - a **singleton** method/function
  * a single connection to the API to get the data
* **.map((response: Response) => <Document[]>response.json())**
  * Here, we are going to **map** each **response** to a datatype of **document** and convert all that to **JSON**
  * **=>** is an **arrow function**; which is how to implement an **anonymous function** in ES6
* **import { Observable } from 'rxjs/Rx';**
  * Changed **Observable** to **Rx** because we need the **map** function
* **.catch(this.handleError);** - used for error handling

## How to Render API Data in an Angular 2 Application

* **subscribe** - communicates with the stream process for **Observables**
  * takes two functions as arguments
* **timer** - function from Observable library that dynamically checks for data changes
  * lets us make calls to our API in the background

## Analyzing Real Time Data Updates with an Angular + Rails System

## Final Style Changes to Angular 2 Document Component
