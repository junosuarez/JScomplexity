# Hacking JavaScript Complexity
=================
twitter: @leJDen

Updated for Portland Code Camp talk. Please sit tight, as I'm still cleaning up some of the extral files in this repo. I expect to clean things up more over the week of 6/4/2012. Please reach out to me on Twitter if you have any specific questions. Thanks!

## thanks for checking out this repository

The complete demo app is now added. Still working on getting the screencast recording available online.

## /Demo
A twitter visualizer written in jslint-compliant modules. Note: due to security policies, some browsers will not let you make ajax calls from the local filesystem. Try viewing through a local webserver, like Apache, ngnix, or IIS.

## /PizzaDemo
A sample ordering system for customizing the topings of a pizza and calculating the price. I implement the Observer pattern to create a ViewModel which contains all of the information about the current order state for order subtotal, tax, tip and total amounts, and then isolate the DOM interaction to a single module. Example unit test written in Mocha using the Should assertion library.

## /Modules
A bare-bones example showing Asynchronous Module Definitions to define a function as a module and then use that module to inject behavior on a page.

## /Tests
Examples of tests using jasmine.

## Tools used:
 - jslint
 - jasmine
 - lodash
 - mocha
 - requirejs
 - jquery
 - underscore

## Slides
Slides are available at http://www.slideshare.net/jdenizac/hacking-javascript-complexity-boise-code-camp-12
Video available at http://www.youtube.com/watch?v=Ea0FKq0a2-g&feature=youtu.be

## License
Please use any of the code or files in this example for any purpose with no attribution necessary. The disclaimer of liability or warranty from the standard MIT license applies. Enjoy!