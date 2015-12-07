var _ = require('lodash');
var ncp = require('ncp').ncp;
var replaceStream = require('replacestream');

// Main
// -------------------------------------------------------------

module.exports = function(argv, config) {

  var pluginName = argv._[1];
  if(!pluginName) return console.log("Plugin must have a name");

  var fromFolder = __dirname + '/../skeleton';
  var toFolder = './rune.' + pluginName + '.js';

  ncp(fromFolder, toFolder, {
    transform: function(read, write) {

        // if this package.json, replace {name}
        if(read.path.match(/package\.json/)) {
          read = read.pipe(replaceStream('{name}', pluginName))
        }
        read.pipe(write)
    }
  },
  function (err) {
      if (err) return console.error(err);
      console.log('done!');
  });

}
