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
    return queryInterface.bulkInsert('Todos',[{
        completed: null,
        activity: "Coding",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: null,
        activity: "Coding lagi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: null,
        activity: "Coding lagi lagi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        completed: null,
        activity: "Tidur",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        completed: null,
        activity: "Makan",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
