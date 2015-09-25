var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    bootstrap : function(){
        this.prompt({
            type : 'input',
            name : 'yorno',
            message : 'Should I create a package.json file? [y/n]',
            default : 'y'
        },
        function(mParams){
            var bShouldAddPackageJson = mParams && mParams.yorno && mParams.yorno.toUpperCase() === 'Y' ? true : false;
            if (bShouldAddPackageJson){
                this.log('Copying package.json');
                this._copyPackageFile();
            } else {
                this.log('Skipped copy of package.json');
            }

            this._copyGruntConfiguration();
            this._installDependencies();
        }.bind(this)),

        this._copyGruntConfiguration = function () {
            this.log('Copying Grunt configuration');
            this.fs.copyTpl(
                this.templatePath('grunt'),
                this.destinationPath('grunt')
            );
            this.log('Copying Gruntfile.js');
            this.fs.copyTpl(
                this.templatePath('Gruntfile.js'),
                this.destinationPath('Gruntfile.js')
            );
        },
        this._copyPackageFile = function () {
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json')
            );
        },

        this._installDependencies = function(){
            this.log('Installing dependencies');
            this.npmInstall(["grunt"],{ 'save': true });
            this.npmInstall(["grunt-connect-proxy"],{ 'save': true });
            this.npmInstall(["grunt-connect-rewrite"],{ 'save': true });
            this.npmInstall(["grunt-contrib-connect"],{ 'save': true });
            this.npmInstall(["grunt-contrib-watch"],{ 'save': true });
            this.npmInstall(["include-all"],{ 'save': true });
            this.npmInstall(["path"],{ 'save': true });
        }
    }
});
