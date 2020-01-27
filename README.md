# Ecabs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.
its a frontend crud for the Ecabs Backend application that implements saving data to a database through rest API and also through rabbitMQ's exchange to exchange binding and routing.

To be able to add, edit and remove a booking by both rabbitMQ or REST this can be achieved by  
swapping between 0 and 1 in the url defined in the addBooking, updateBooking, deleteBooking methods in api.services.ts file in services folder in the front end project


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
