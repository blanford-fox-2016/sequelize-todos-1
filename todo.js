'use strict';

import System from './view.js'
//write your code here
var sequelize = require('Sequelize')
var sequelize = new sequelize({
  "storage": "./db/init.db",
  "dialect": "sqlite"
})

var models = require('./models')
// var view = require('./view.js')
var task = models.Task
// task.create({
//   tugas:param
// })


var argv = process.argv
var param = argv.slice(3,argv.length).join(" ")



switch (argv[2]) {
  case "add":
    task.create({
      tugas: param,
      done: false
    }).then(function(data){
      console.log(`Task created`);
    })
    break;
  case "delete":
    task.destroy({
      where:{
        id : argv[3]
      }
    })
    break;
  case "complete":
    task.findOne({
      where:{
        id : argv[3]
      }
    }).then(function(data){
        data.update({done:true},
          {fields: ["done"]})
            .then(function(){
        console.log(`Task set to complete`);
      })
    })
    break;
  case "list":
    task.findAll()
      .then(function(data){
        for(var i = 0; i<data.length; i++){
          if(data[i].dataValues.done == false){
            console.log(`[ ] | ${data[i].dataValues.id} | ${data[i].dataValues.tugas} |`);
          }else{
            console.log(`[X] | ${data[i].dataValues.id} | ${data[i].dataValues.tugas} |`);
          }
        }
      })
    break;
  case "help":
    System.help()
    break;
  case "uncomplete":
    task.findOne({
      where:{
        id : argv[3]
      }
    }).then(function(data){
        data.update({done:false},
          {fields: ["done"]})
            .then(function(){
        console.log(`Task set to uncomplete`);
      })
    })
    break;
  // case "save":
  //
  //   break;
  // case "update":
  //
  //   break;
  default:
  System.mainMenu()
}
