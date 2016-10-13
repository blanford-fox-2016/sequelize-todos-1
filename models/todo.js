'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    activity: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      list: function(models) {
        console.log(models);
        models.findOne({
          attributes: ['completed', 'activity', 'createdAt']
        }).then(data,err) =>{
          return data
        }
      }
    }
  });
  return Todo;
};
