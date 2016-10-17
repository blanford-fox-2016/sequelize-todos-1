'use strict';
// modek

module.exports = function(sequelize, DataTypes) {
  var NewTodo = sequelize.define('NewTodo', {
    title: {
      type: DataTypes.STRING,
      validate : {
        len : [5,140]
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      validate:{
        isAlpha: false
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      // view
      show_all: function() {
        NewTodo.findAll({
          attributes: ['id','title', 'status']
        }).then((data) => {
          data.map((value) => {
            console.log(value.dataValues.id + " "+ NewTodo.status_to_symbol(value.dataValues.status)+ " " + value.dataValues.title)
          })
        })
      },
      show_id: function(id_todo) {
        NewTodo.findOne({
          where: {
            id: id_todo
          }
        }).then((data) => {
          console.log(data.dataValues.id + " " + NewTodo.status_to_symbol(data.dataValues.status) + " " + data.dataValues.title);
        });
      },
      show_status: function(input_status) {
        let x = NewTodo.validation(input_status)
        NewTodo.findAll({
          where: {
            status : x[0]
          }
        }).then((data) => {
          data.map((value) => {
            console.log(value.dataValues.id + " " +x[1] + " " + value.dataValues.title)
          })
        }).catch((err) => {
          console.log(err)
        });

      },
      //
      destroy_id: function(id_todo) {
        NewTodo.destroy({
          where: {
            id: id_todo
          }
        });
      },
      update_status : function(id_todo, status_todo) {
        NewTodo.update({
          status : status_todo
        },{
          where:{
            id : id_todo
          }
        })
      },
      validation: function(status){
        let result = [];
        if(status == "true") {
          result.push(1);
          result.push("[x]");
        }else{
          result.push(0);
          result.push("[ ]");
        }
        return result;
      },
      status_to_symbol: function(input) {
        return input == 1 ? "[x]" : "[ ]";
      }
    }
  });
  return NewTodo;
};
