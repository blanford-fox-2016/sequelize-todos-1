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
    return queryInterface.bulkInsert('Tasks', [
      { tugas : 'masak kue keju yang enak',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas : 'Coding export import',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas : 'Sholat Dzuhur',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas : 'Panggil mas hacker 3x',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas : 'bobo siang',
        done: false,
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
    return queryInterface.bulkDelete('Tasks', null, {})
  }
};
