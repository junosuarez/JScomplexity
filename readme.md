# Hacking JavaScript Complexity
=================
twitter: @leJDen

JavaScript can be a complex language in which to write and maintain large scale applications. The flexibility of the language, combined with its lack of native module support (until ES6) - and a widespread case of jQueryitis - has left many thinking that JavaScript just isn't suited to large scale applications. I've set out to provide some guidance on ways to improve the team-based practice of JavaScript to write applications that are composed of modular components for increased flexibility, maintainability, and productivity.

## History

The code and demos in this repository have supported the following talks

* BoiseJS - 6/5/2012, Boise, ID
* Potland Code Camp - 6/2/2012, Portland, OR
* Utah JS Conference - 6/1/2012, Salt Lake City, UT
* Boise Web Techs Meetup - 5/24/2012, Boise, ID
* Boise Code Camp - 3/24/2012, Boise, ID

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