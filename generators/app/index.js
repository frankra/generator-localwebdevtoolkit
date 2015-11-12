var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    bootstrap : function(){
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
        };
        this._copyPackageFile = function () {
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json')
            );
        };

        this._copyGitIgnoreFile = function(){
            this.fs.copyTpl(
                this.templatePath('.gitignore'),
                this.destinationPath('.gitignore')
            );
        };

        this._installDependencies = function(){
            this.log('Installing dependencies');
            this.npmInstall(["grunt"],{ 'save': true });
            this.npmInstall(["grunt-middleware-proxy"],{ 'save': true });
            this.npmInstall(["grunt-connect-rewrite"],{ 'save': true });
            this.npmInstall(["grunt-contrib-connect"],{ 'save': true });
            this.npmInstall(["grunt-contrib-watch"],{ 'save': true });
            this.npmInstall(["include-all"],{ 'save': true });
            this.npmInstall(["path"],{ 'save': true });
        };

        
        this._copyPackageFile(); 
        this._copyGruntConfiguration();
        this._copyGitIgnoreFile();
        this._installDependencies();

    }
});
