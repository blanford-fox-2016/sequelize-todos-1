'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todos = sequelize.define('Todos', {
    task: DataTypes.TEXT,
    status: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      help: function(){
         process.argv.forEach((pilihan) => {
           if(pilihan === "help"){
                console.log(`==================== \n node todo.js list \n node todo.js add <task_content> \n node todo.js task <task_id> \n node todo.js delete <task_id> \n node todo.js complete <task_id> \n node todo.js uncomplete <task_id>`);
           }
         });
      },
      display:function(){
        process.argv.forEach((pilihan) => {
        if(pilihan === "list"){
            Todos.findAll({
              attributes:['id','task','status']
            }).then((data)=>{
               for (var i = 0; i < data.length; i++) {
                console.log(`${data[i].id} || ${data[i].task} || ${data[i].status}`)
              }
            })
          }
          });
      }








    }
  });
  return Todos;
};
