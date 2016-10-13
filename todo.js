'use strict';

import System from './view.js'
//write your code here
var models = require('./models')
var task = models.Task
var argv = process.argv
var content = argv.slice(3,argv.length).join(" ")



switch (argv[2]) {
  case "add":
    task.add(content)
    break;
  case "delete":
    task.delete(argv[3])
    break;
  case "complete":
    task.complete(argv[3])
    break;
  case "list":
    task.list()
    break;
  case "help":
    System.help()
    break;
  case "uncomplete":
    task.uncomplete(argv[3])
    break;
  default:
    System.clearScreen()
    System.mainMenu()
}
