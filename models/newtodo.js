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
        }).then((data, err) => {
          return err ? console.log(err) : data.dataValues;
        });
      },
      show_id: function(id_todo) {
        NewTodo.findOne({
          where: {
            id: id_todo
          }
        }).then((data, err) => {
          return err ? console.log(err) : data.dataValues;
        });
      },
      show_status: function(input_status) {
        var cetak_status
        if(){

        }else{

        }
        NewTodo.findAll({
          where: {
            status : input_status
          }
        }).then((data) => {
          data.map((value) => {
            console.log(value.dataValues.id + " " + value.dataValues.title)
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
      }
    }
  });
  return NewTodo;
};
