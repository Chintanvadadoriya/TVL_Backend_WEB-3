'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   'Whitelists',
    //   [
    //     {
    //       idoId: 2,
    //       address: 'address1',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address2',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address3',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address4',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address5',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address6',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address7',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address8',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address9',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address10',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address11',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address12',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address13',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address14',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address15',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address16',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address17',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address18',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address19',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address20',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address21',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address22',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address23',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address24',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address25',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address26',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address27',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address28',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address29',
    //       status: 'add',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address30',
    //       status: 'remove',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       idoId: 2,
    //       address: 'address31',
    //       status: 'remove',
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
