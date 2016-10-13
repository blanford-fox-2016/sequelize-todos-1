'use strict';
var models = require('./models')
var Sequelize = require('sequelize')
var todo = models.todo

if(typeof process.argv[2] === 'undefined'){
  todo.help()
}

process.argv.forEach((val,index,array)=>{
  switch (val) {
    case 'help':
    todo.help()
    break;
    case 'list':
    todo.list()
    break;
    case 'add':
    var tampung_string =""
    if(array.length >3){
      for(var i=3;i<array.length;i++){
        tampung_string +=" "+array[i]
      }
      todo.add(tampung_string)
    }
    break;
    case 'task':
    if(array.length === 4)
    {
      console.log(array[3]);
      for(var i=0;i<=dataObject.length;i++){
      if(i.toString() === array[3]){
      console.log('=========== [ ] => Uncompleted [X] || => Completed ================');
      console.log(dataObject[i-1].status+" "+ dataObject[i-1].task);
    }
    }
  }
    break;
    case 'delete':
    if(typeof array[3] === 'undefined'){
      console.log('input id task to delete');
    }else todo.delete(array[3])
    break;

    case 'complete':
    if(array.length === 4){
        todo.completed(array[3])
      }
    break;
    case 'uncomplete':
      todo.uncompleted(array[3])
    break;
    default:
  }
})
