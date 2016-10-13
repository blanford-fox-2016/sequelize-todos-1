'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      printHelp: function() {
        console.log("============HELP============\n");
        console.log("node todo.js #will call help");
        console.log("node todo.js help");
        console.log("node todo.js add <task_content>");
        console.log("node todo.js delete <task_id>");
        console.log("node todo.js completed <task_id>");
      },

      getList: function() {
        Todo.findAll().then(function (todo) {
            for (var i = 0; i < todo.length; i++) {
              var completed = todo[i].completed
              console.log(`${todo[i].id}. [${completed == true ? "x" : " "}] ${todo[i].task} `)
            }
        });
      },

      addList: function(addTask) {
        Todo.create({
          task: addTask.task,
          completed: addTask.completed
        }).catch(function(err) {
          console.log(err.message);
        })
      },

      updateList: function(idTask) {
        Todo.update({
          completed:1
        },{
          where: {id:idTask}
        })
        .then(function() {
          console.log(`Task id ${idTask} completed`);
        })
      },

      deleteList: function(idTask) {
        Todo.destroy({
          where: {id:idTask}
        })
        .then(function() {
          console.log(`Task id ${idTask} deleted`);
        })
      }
    }
  });
  return Todo;
};
