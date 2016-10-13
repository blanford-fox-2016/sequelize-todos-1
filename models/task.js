'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    tugas: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      add: function(param){
        Task.create({
          tugas: param,
          done: false
        }).then(function(data){
          console.log(`Task created`);
        })
      },
      list: function(){
        Task.findAll()
          .then(function(data){
            for(var i = 0; i<data.length; i++){
              if(data[i].dataValues.done == false){
                console.log(`[ ] | ${data[i].dataValues.id} | ${data[i].dataValues.tugas} |`);
              }else{
                console.log(`[x] | ${data[i].dataValues.id} | ${data[i].dataValues.tugas} |`);
              }
            }
          })
      },
      complete: function(param){
        Task.findOne({
          where:{
            id : param
          }
        }).then(function(data){
            data.update({done:true},
              {fields: ["done"]})
                .then(function(){
            console.log(`Task set to complete`);
          })
        })
      },
      uncomplete: function(param){
        Task.findOne({
          where:{
            id : param
          }
        }).then(function(data){
            data.update({done:false},
              {fields: ["done"]})
                .then(function(){
            console.log(`Task set to uncomplete`);
          })
        })
      },
      delete: function(param){
        Task.destroy({
          where:{
            id : param
          }
        }).then(function(){
          console.log(`Data deleted Successfully`);
        })
      }
    }
  });
  return Task;
};
