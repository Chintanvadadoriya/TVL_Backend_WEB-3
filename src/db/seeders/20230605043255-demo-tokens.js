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
      'Tokens',
      [
        {
          name: 'MATIC',
          symbol: 'MATIC',
          address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
          decimals: 18,
          logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Test1',
          symbol: 'T1',
          address: '0xD05D7fa6545959DE27f6f9C4bab24cDdF3e8797E',
          decimals: 18,
          logoURI: 'https://assets.coingecko.com/coins/images/279/small/USD_Coin_icon.png?1547042389',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BUSD',
          symbol: 'BUSD',
          address: '0x9A2ABAA45f21d245fF2F440a6b8e6AFDD19f1492',
          decimals: 18,
          logoURI: 'https://assets.coingecko.com/coins/images/279/small/USD_Coin_icon.png?1547042389',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TVL',
          symbol: 'TVL',
          address: '0x0B9782e04736f023471B77A9C5726A643d28c15f',
          decimals: 18,
          logoURI: 'https://assets.coingecko.com/coins/images/279/small/USD_Coin_icon.png?1547042389',
          chainId: 80001,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Token A',
          symbol: 'TKA',
          address: '0xaa4b95e48e5c5631D869Ad92806aa969b49fb519',
          decimals: 18,
          logoURI: 'https://assets.coingecko.com/coins/images/279/small/USD_Coin_icon.png?1547042389',
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
     */
    await queryInterface.bulkDelete('Tokens', null, {});
  },
};
