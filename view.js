'use strict'
// the variable needed for starting the programs
const models = require('./models');
const Todo = models.NewTodo;

const commands = ["help","add", "show", "delete", "update", "show_by_status"];
const defaultMessage = `
<--Welcome to CLI to-do-list Application-->

1. ${commands[0]}
2. ${commands[1]} <add "your task">
3. ${commands[2]} <show "id" or "all">
4. ${commands[3]} <delete "id">
5. ${commands[4]} <update id "your task"> <status:true|false>
6. ${commands[5]} <show_by_status "true | false">

* Your space matters Bro!`;

export class View {
  constructor() {

  }

  static welcome(){
    console.log(defaultMessage);
  }

  static viewData(args) {
    switch(args[0]){
      case 'add' :
        args[1] === undefined ? View.welcome() : Todo.create({title: args[1], status: false});
        break;
      case 'delete' :
        args[1] === undefined ? View.welcome() : Todo.destroy_id(args[1]);
        break;
      case 'update' :
        args[1] === undefined ? View.welcome() : Todo.update_status(args[1], args[2]);
        break;
      case 'show':
        args[1] === undefined ? Todo.show_all() : Todo.show_id(args[1]);
        break;
      case 'show_by_status':
        args[1] === undefined ? Todo.show_all() : Todo.show_status(args[1]);
        break;
      default:
        View.welcome();
    }
  }
}
