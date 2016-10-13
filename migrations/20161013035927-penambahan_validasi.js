'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn(
      'Todos',
      'title',
      {
        type: Sequelize.STRING,
        validate : {
          len : [5,30]
        }
      }
    ).then(function(){
      return queryInterface.changeColumn(
        'Todos',
        'status',
        {
          type: Sequelize.STRING,
          validate : {
            isAlpha: false
          }
        });
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Todos',
      'title',
      {
        type: Sequelize.STRING
      }
    ).then(function(){
      return queryInterface.changeColumn(
        'Todos',
        'status',
        {
          type: Sequelize.STRING
        });
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
