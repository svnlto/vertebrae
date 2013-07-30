# vertebrae

[![Build Status](https://travis-ci.org/svnlto/vertebrae.png?branch=master)](https://travis-ci.org/svnlto/vertebrae)

__yet another Backbone.Marionette Boilerplate__

this is the sort of app structure I would usually start off a Backbone
based project.

### Prerequisites

the readme assumes that you have NPM and Bower installed.

## App Structure ##

* `app` - holds the backbone app
* `assets` - images and css
* `bin` - bin files that start the projects webserver in different modes
* `lib` - js libraries used by the backbone apps
* `prod` - this is where stuff goes post build
* `server` - the actual web server
* `tests` - mocha / expect based unit tests

* `Gruntfile.js`  - [grunt.js](http://gruntjs.com "grunt.js") grunt file ( look out for the watch and build task )
* `karma.conf.js` - [karma](https://github.com/karma-runner/karma)
  config file

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


### Changelog ###

#### 0.2.1 / 2013-04-29

  * [fix] refer to backbone.marionette.hbs by version number
  * [fix] grunt copy css path
  * [fix] r.js output
  * adds lodash dependency
  * bump engine version
  * remove node 0.8 from travis build
  * [revert] e3752ab307a7828e18a5f5044bf39fe66e90c7f0
  * [minor] bump testem package version
  * adds travis-ci build status image
  * adding node 0.9 to build
  * adds travis-ci config
  * [refactor] rename site to app
  * Merge branch 'master' of github.com:svnlto/vertebrae
  * Update server.js
  * Update store.js
  * Update config.js


#### Author: [Sven Lito](http://svenlito.com)

#### License: MIT
