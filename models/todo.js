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
      list: function() {
        Todo.findAll({
          attributes: ['id','completed', 'activity', 'createdAt']
        }).then((data) => {
          console.log("id | status | activity");
          for (var i = 0; i < data.length; i++) {
            let status = "";
            if (data[i].dataValues.completed == 0) {
              status = "[ ]";
            } else {
              status = "[x]";
            }

            console.log(`${data[i].dataValues.id}. | ${status} |${data[i].dataValues.activity}`);


          };
        })

      }
    }
  });
  return Todo;
};
