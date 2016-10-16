'use strict';
import View from './view.js'
//write your code here
var models = require('./models')
var Todos = models.Todo
var argv = process.argv


class Task {
  constructor(task, completed) {
    this.task = task
    this.completed = completed
  }

  static viewHelp(){
    View.printHelp()
  }
}


if (typeof argv[2] === "undefined") {
  View.printHelp()
}


argv.forEach((val, index) => {

  let indexTask = argv[3]

  val = val.toLowerCase()
  // index = searchIndex(indexTask)

  if(val == "help"){
    Task.viewHelp()
  }
  else if(val == "list"){
    Todos.getList()
  }
  else if (val == "add") {
      // console.log(argv.length);
      var dataBaru = ""
      var temp = {}

      if (typeof argv[3] == "undefined") {
        console.log("Data harus di isi");
      }else {
        for (var i = 3; i < argv.length; i++) {
          dataBaru += argv[i] + (i < argv.length-1 ? " " : "")
        }
        temp = new Task(dataBaru, false)
        Todos.addList(temp)
        // console.log(temp);
        console.log(`Added "${dataBaru}" to your TODO list`);
      }
  }

  else if (val == "delete") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      Todos.deleteList(argv[3])
      // console.log(dataBaru);
    }

  }

  else if (val == "completed") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      Todos.updateList(argv[3])
      // console.log(dataBaru);
    }

  }

  else if (val == "uncompleted") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      Todos.uncompleteList(argv[3])
      // console.log(dataBaru);
    }
  }

})
