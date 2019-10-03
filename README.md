# Mydist

github url="https://github.com/nathan-chmielewski/mydist"

1. 
* Created my-image component, with no properties and no constructor. The template has a div tag to display the image. I was getting a browser error (CORB?) when using the img src url, so the image is stored in the project's asset folder, and is rendered using the img src tag
* Created my-button component, which imports my-service service. The component has two properties: the service, and isLiked boolean. It has an onClick() method which is called when the 'Like' button is clicked. The method calls the my-service service and passes the isLiked boolean property.
* The my-button template creates a button element and uses the ngClass to style the button with the is-liked css class.
* The my-service service has a likeImage(..) method that takes boolean argument and returns the ! of the boolean. This method is called by the my-button component when the button is clicked, passing its isLiked boolean property. The returned boolean is stored in the my-button isLiked property.
* The my-button renders 'Image is liked == {{ isLiked }} under an image of Homer.
2. 
* the button element so that when the button is clicked, the my-button component member isLiked flips (to true on the first click and every other click after), and the button turns green on 'true'.
3. 
* Created a model folder and created User, Messages, and Message model classes, all of which implement their respective IUser, IMessages, and IMessage interfaces.
4. 
* Created messages-service that imports the classes from the model folder, and has a member function that creates Message objects and stores them in a Messages object. 
5. 
* App-component imports messages-service and invokes the member function created for #4 and stores the returned messages array in a member property. Used an *ngFor directive to iterate over the messages and displays them under the image and 'Like' button.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

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
