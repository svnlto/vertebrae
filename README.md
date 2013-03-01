# vertebrae

__yet another Backbone.Marionette Boilerplate__

this is the sort of app structure I would usually start off a Backbone
based project. Have a look, there are base views, tests etc.

Also let me know if you find anything that bugs you or maybe something
that could be added.


### prerequisites

the readme assumes that you have NPM and Bower installed.


__Also, thanks to [@rmurphey](https://github.com/rmurphey) for the inspiration on getting this
project up on github.__

## App Structure ##

* `app` - holds the backbone app
* `assets` - images and css
* `bin` - bin files that start the projects webserver in different modes
* `lib` - js libraries used by the backbone apps
* `prod` - this is where stuff goes post build
* `server` - the actual web server
* `tests` - mocha / chai based unit tests

* `grunt.js`  - [grunt.js](http://gruntjs.com "grunt.js") grunt file ( look out for the watch and build task )
* `testem.yml` - [testem](https://github.com/airportyh/testem "Testem") control file

## Usage ##

Run the following commands from within the project directory

`npm install` `bower install`

start node service

`node bin/dev`

point your browser to

`http://localhost:4444`

and start hacking.

### Testing

Running your unit tests is as easy as going to `http://localhost:4444/_tests`.

### Build Process

To get a minified version of your app. All you should have to do is run `grunt build`
from within the project directory. This will generate a deployable version of your app right
under: `/prod`


#### Author: [Sven Lito](http://svenlito.com)

#### License: MIT
