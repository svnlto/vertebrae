# vertebrae #

_yet another Backbone.js Boilerplate_

this is the sort of app structure I would usually start off a Backbone
based project. Have a look, there are base views, tests etc.

Also let me know if you find anything that bugs you or maybe something
that could be added.

## App Structure ##

* `app` - holds the backbone app
* `assets` - images and css
* `bin` - bin files that start the projects webserver in different modes
* `lib` - js libraries used by the backbone apps
* `prod` - this is where stuff goes post build
* `server` - the actual web server
* `tests` - mocha / chai based unit tests

+ `grunt.js`  - grunt file ( look out for the watch and build task )

## Usage ##

Run the following command from within the project directory

```js
   npm install
```

start node service

```js
  node bin/dev
```

point your browser to

```js
  http://localhost:4444
```

and start hacking.


#### Author: [Sven Lito](http://svenlito.com)
#### License: MIT
