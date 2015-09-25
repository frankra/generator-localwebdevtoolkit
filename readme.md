# Simple NodeJS Server with Proxy included
The purpose of this module is help web developers to quickly run and develop web applications on their local NodeJS environment, and through the Bundled Proxy setup, connect to the actual data server (Solve [Same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) problems), without requiring modifications to the application code.

#### Use case
##### Constraints
* You are developing the UI(HTML) of your web application locally.
* You have the database server located somewhere on the web.

##### Problem
* You want to connect your application (localhost) to the database server (https://...), so you can test with the data that you actually have.

#### Solution

1. Install [Yeoman](http://yeoman.io/) by `npm install yo -g`
2. Install [GruntJS](http://gruntjs.com/) by `npm install grunt-cli -g`
3. Install the toolkit `npm install generator-localwebdevtoolkit`
4. Navigate to your project folder
5. Run `yo localwebdevtoolkit`

All you have to do now is configure the grunt tasks and run ```grunt server```.

#### Configuration

This sandbox is based purely on GruntJS Modules, hence it is easy to extend and to configure.
The folder structure by default looks like:
```
yourprojectfolder/
  grunt/
    config/
       *here you place all configuration files*
    tasks/
       *here you map the configuration files to tasks*
```
Feel free to edit these to fit your needs.

Currently this scaffold ships the following modules, so follow the links to have further information about the supported API.

* [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy)
* [grunt-connect-rewrite](https://github.com/viart/grunt-connect-rewrite)
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
