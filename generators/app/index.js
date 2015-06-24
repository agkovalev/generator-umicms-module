'use strict';
var yeoman = require('yeoman-generator'),
    chalk  = require('chalk'),
    yosay  = require('yosay'),
    path   = require('path'),
    util   = require('util'),
    lodash = require('lodash'),
    slug   = require('slug'),

    umicmsModuleGenerator = module.exports = function umicmsModuleGenerator(args, options, config) {
      yeoman.generators.Base.apply(this, arguments);

      this.on('end', function () {
        // this.installDependencies({ skipInstall: options['skip-install'] });
        console.log("'opla!'", 'opla!');
      });

      this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../../package.json')));
    };

util.inherits(umicmsModuleGenerator, yeoman.generators.Base);


umicmsModuleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();


  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'destRootPath',
      message: 'Give the relative path to the root of UMI.CMS',
      default: './'
    },
    {
      name: 'title',
      message: 'What is the title of the new UMI.CMS module?',
      default: 'My Module Title'
    },
    {
      name: 'name',
      message: 'What is the name (slug) of the new UMI.CMS module?',
      default: 'my_module_name'
    },
    {
      name: 'moduleDescription',
      message: 'Give me a description on what your module is supposed to do',
      default: 'A sample description'
    },

    //author and header info
    {
      name: 'authorName',
      message: 'Who is the creator of this module?',
      default: 'Alexey Kovalev'
    },
    {
      name: 'authorEmail',
      message: 'What is your primary e-mail address',
      default: 'me@agkovalev.com'
    },

    {
      name: 'authorURL',
      message: 'What is the site where the author can be reached?',
      default: 'http://agkovalev.com'
    },

    {
      name: 'authorGitHub',
      message: 'What is your gitHub account?',
      default: 'agkovalev'
    },

    {
      name: 'authorCompanyName',
      message: '(optional) What is your company name?',
      default: 'Company Name'
    }
  ];

  this.prompt(prompts, function (props) {
    //date helper
    var today = new Date();

    var prefix  = today.getUTCMonth() + 1;
    prefix     += '-' + today.getDate();
    prefix     += '-' + today.getFullYear();

    this.currentDate       = prefix;
    this.destRootPath      = props.destRootPath;
    this.title             = props.title;
    this.name              = props.name;
    this.safeModuleName    = slug(this.name, {
      replacement: '_',
      lower: false
    });
    this.moduleDescription = props.moduleDescription;
    this.authorName        = props.authorName;
    this.authorEmail       = props.authorEmail;
    this.authorURL         = props.authorURL;
    this.authorGitHub      = props.authorGitHub;
    this.authorTwitter     = props.authorTwitter;
    this.authorCompanyName = props.authorCompanyName;
    cb();
  }.bind(this));
};



umicmsModuleGenerator.prototype.classesFiles = function classesFiles() {
  var destModulePath = this.destRootPath + 'classes/modules/' + this.safeModuleName;

  // install.php
  this.template('classes/_install.php',         destModulePath + '/install.php');

  // main files
  this.template('classes/_class.php',           destModulePath + '/class.php');
  this.template('classes/_admin.php',           destModulePath + '/__admin.php');
  this.template('classes/_event_handlers.php',  destModulePath + '/__events.php');

  this.copy('classes/events.php',               destModulePath + '/events.php');
  this.copy('classes/permissions.php',          destModulePath + '/permissions.php');

  // langs
  this.template('classes/_i18n.php',            destModulePath + '/i18n.php');
  this.template('classes/_i18n.en.php',         destModulePath + '/i18n.en.php');
  this.template('classes/_lang.php',            destModulePath + '/lang.php');
  this.template('classes/_lang.en.php',         destModulePath + '/lang.en.php');

  // custom files
  this.template('classes/_custom.php',          destModulePath + '/__custom.php');
  this.template('classes/_custom_adm.php',      destModulePath + '/__custom_adm.php');

  this.copy('classes/custom_events.php',       destModulePath + '/custom_events.php');
  this.copy('classes/custom_perms.php',        destModulePath + '/permissions.custom.php');

};

umicmsModuleGenerator.prototype.stylesAdminFiles = function stylesAdminFiles() {
  var destStylesPath = this.destRootPath + 'styles/skins/mac/data/modules/' + this.safeModuleName;

  this.template('styles/_formModify.xsl',       destStylesPath + '/form.modify.xsl');
  this.template('styles/_listView.xsl',         destStylesPath + '/list.view.xsl');
  this.template('styles/_listModify.xsl',       destStylesPath + '/list.modify.xsl');
  this.template('styles/_settingsView.xsl',     destStylesPath + '/settings.view.xsl');
  this.template('styles/_settingsModify.xsl',   destStylesPath + '/settings.modify.xsl');

};
