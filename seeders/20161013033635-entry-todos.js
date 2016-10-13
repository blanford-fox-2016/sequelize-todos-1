'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('todos',[{
      task: "minum jus jambu",
      completed:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task: "minum es teh manis",
      completed:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos',null,{});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
