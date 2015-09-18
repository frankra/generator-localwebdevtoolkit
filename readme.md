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

*... Yeoman will guide you through the installation process.*


Now you should have the base folder structure with the base configuration files.

#### Configuration
