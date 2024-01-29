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
    await queryInterface.bulkInsert(
      'Pairs',
      [
        {
          //matic busd
          token0: '0x0B9782e04736f023471B77A9C5726A643d28c15f',
          token1: '0x9A2ABAA45f21d245fF2F440a6b8e6AFDD19f1492',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //matic tvl
          token0: '0x9A2ABAA45f21d245fF2F440a6b8e6AFDD19f1492',
          token1: '0xD05D7fa6545959DE27f6f9C4bab24cDdF3e8797E',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
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
