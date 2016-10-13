'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      validate : {
        len : [5,30]
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      validate:{
        isAlpha: false
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      show_all: function() {
        Todo.findAll({
          attributes: ['id','title', 'status']
        });
      },
      show_id: function(id_todo) {
        Todo.findOne({
          where: {
            id: id_todo
          }
        }).then((data, err) => {
          //return err ? ;
        })
      },
      show_status: function(status) {

      },
      destroy: function() {

      },
      update_status() {

      }
    }
  });
  return Todo;
};
