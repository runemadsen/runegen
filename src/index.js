#! /usr/bin/env node

// Requires
// -------------------------------------------------------------

var _ = require('lodash');
var fs = require("fs");
var argv = require('yargs').argv;
var newCmd = require('./new');
var testCmd = require('./test');
var publishCmd = require('./publish');

// Variables
// -------------------------------------------------------------

var args = process.argv;
var cmd = args[2];
var commands = [
  "new",
  "test",
  "publish"
]

// Check that there's a config.json file
// var config = JSON.parse(fs.readFileSync('./config.json'));
// if(!config) {
//   return console.log("config.json does not exist");
// }

// Check that we got a correct command
if(!_.includes(commands, cmd)) {
  return console.log("Wrong command provided");
}

if(cmd == "new") newCmd(argv);
else if(cmd == "test") testCmd(argv);
else if(cmd == "publish") publishCmd(argv);
