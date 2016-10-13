'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      },
      help:function(){
      console.log("node todo.js help\nnode todo.js list\nnode todo.js add <task_content>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>");
      },
      list: function() {
         todo.findAll({
         }).then(function (user) {
             for (var i = 0; i < user.length; i++) {
               if(!user[i].completed){
                 user[i].completed = '[]'
               }else if(user[i].completed)
               {
                 user[i].completed = '[X]'
               }
               console.log(`${user[i].id} ${user[i].completed} ${user[i].task}`)
             }
         });
       },
       add:function(newTask){
          todo.create({
            completed:false,
            task:newTask
          })
       },
       delete:function(idTask){
         todo.destroy({where:{
           id : idTask
         }}).then(function() {
    console.log('deleted task with ');
})
       },
       completed:function(id){
         todo.update({completed:true},
           {
             where:{id:id}
         }).then(function() {
            console.log('task completed');
         })
       },
       uncompleted:function(id){
         todo.update({completed:false},
           {
             where:{id:id}
         }).then(function() {
            console.log('task uncompleted');
         })
       }

    }
  });
  return todo;
};
