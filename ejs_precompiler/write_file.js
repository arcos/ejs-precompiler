var fs = require('fs'),
    ejs = require('./ejs_server'),
    browser_upgrade_template = require('./panel.browser.upgrade');
    
var ejsCompile = new EJS.Compiler(browser_upgrade_template.text);

var panel_browser_upgrade = ejsCompile.compile(null, 'panel_browser_upgrade');    

fs.writeFile('panel_browser_upgrade.js', panel_browser_upgrade, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

