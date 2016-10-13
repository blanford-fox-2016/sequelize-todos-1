'use strict'
import {View} from './view.js'

//write your code here
const models = require('./models');
const Todo = models.NewTodo;
// View
//Todo.show_all();
//console.log(Todo.show_all());
//Todo.show_id(1);
//Todo.update_status(1, false)

var args = process.argv.slice(2);
// View.welcome();

// Todo.create({title:"makan makan", status:true});
View.viewData(args)
