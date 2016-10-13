'use strict';

//write your code here
let models = require('./models');
let Todo = models.Todo;
let Sequelize = require('Sequelize');

let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/init.sql'
});

class Controller {
  constructor() {

  }
  list(){
    // Todo.findAll({
    //   attributes: ['completed', 'activity', 'createdAt']
    // }).then(data,err) =>{
    //   return data
    // }
  }
}
let controller = new Controller();

class View {
  constructor() {

  }
  display(){
    console.log(Todo);
  }
}
let view = new View();

view.display()
