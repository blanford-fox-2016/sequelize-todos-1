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
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      { tugas : 'Coding export import',
        done: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      { tugas : 'Sholat Dzuhur',
        done: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      { tugas : 'Panggil mas hacker 3x',
        done: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      { tugas : 'bobo siang',
        done: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
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
