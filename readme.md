# gulp-boilerplate 🚀

my personal mini-project to start front-end development asap.


## Getting Started

To get things running smoothly, I assume you have already installed globally these packages.
* [NodeJS <8](https://nodejs.org/en/download/releases/)
* [NPM](https://npmjs.com) (you can use [Yarn](https://yarnpkg.com) )
* [Gulp.js](http://gulpjs.com)
* [Bower](https://bower.io)


### Installation

* ```cd <your project> && yarn && bower install && gulp serve ```


## Additional informations

*TinyPNG* - to run gulp task *tinypng* (compressing images), you have to insert your API key in /gulpfile.babel.js:28 . If you don't have one, you can get it at [tinypng website](https://tinypng.com/developers) (500 images per month for free!).

*Building production version* - just run ```gulp``` || ```gulp build```

*Wiredep* - ```gulp wiredep``` will inject js/css files from dependencies, however, if you ATM run ```gulp serve``` (while editing bower.json), this task is self-running.

*Helpers* - be sure to check out /app/styles/base/_helpers-*

*Setting colors* - to set out reusable colors, use /app/styles/abstracts/_variables.scss && /app/styles/base/_colors.scss

Try to explore the project structure ( especially app/styles ) to understand how I manage things.


## Front-End Dependencies included

They are all optional. You can add/remove them as you wish in /bower.json
* [Bootstrap](http://getbootstrap.com) - Front-End Framework ( v3.3.7 )
* [Cookieconsent](https://cookieconsent.insites.com) - The most popular solution to the EU cookie law
* [Font Awesome](http://fontawesome.io) - The iconic font and CSS toolkit
* [jQuery Validation](https://jqueryvalidation.org) - Form validation with jQuery
* [matchHeight](https://github.com/liabru/jquery-match-height) - a responsive equal heights plugin for jQuery
* [normalize-css](https://necolas.github.io/normalize.css/) - A modern, HTML5-ready alternative to CSS resets
* [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) - Beautiful responsive carousel sliders
* [Tooltipster](http://iamceege.github.io/tooltipster/) - jQuery plugin for modern tooltips
* [WOW](https://github.com/matthieua/WOW) - Reveal CSS animation as you scroll down a page
* and others.


## Authors

* **[Keevvinc]((https://github.com/keevvinc))** - [me](https://github.com/keevvinc)


