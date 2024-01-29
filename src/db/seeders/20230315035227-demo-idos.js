'use strict';

const { default: BigNumber } = require('bignumber.js');
const toWei = (amount, decimals = 18) => {
  try {
    if (!amount) {
      return new BigNumber(0).toString();
    }
    return new BigNumber(amount).multipliedBy(new BigNumber(10).exponentiatedBy(decimals)).toFixed(0).toString();
  } catch (error) {
    console.log('exeption in toWei , ', error);
    return null;
  }
};

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
    const startDate1 = new Date();
    startDate1.setMinutes(startDate1.getMinutes() + 3);

    const endDate1 = new Date();
    endDate1.setMinutes(endDate1.getMinutes() + 6);

    const startDate2 = new Date();
    startDate2.setMinutes(startDate2.getMinutes() + 4);

    const endDate2 = new Date();
    endDate2.setMinutes(endDate2.getMinutes() + 8);

    // try {
    //   await queryInterface.bulkInsert(
    //     'Idos',
    //     [
    //       {
    //         tokenAddress: '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
    //         ownerAddress: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
    //         projectName: 'Yui token',
    //         symbol: 'YUI',
    //         decimal: 18,
    //         idoAddress: '0x1F708C24a0D3A740cD47cC0444E9480899f3dA7D',
    //         projectCover: 'assets/images/icons/BlockChain5.png',
    //         websiteUrl: '',
    //         whitePaperUrlPdf: '',
    //         tokenRate: toWei(2),
    //         description: '',
    //         tokenAllocation: toWei('2000', 18),
    //         softCap: toWei('300', 18),
    //         hardCap: toWei('500', 18),
    //         minBuy: toWei('10', 18),
    //         maxBuy: toWei('500', 18),
    //         idoStartDate: startDate1.toISOString(),
    //         idoEndDate: endDate1.toISOString(),
    //         whiteList: false,
    //         blockchainPlateform: 'MUMBAI',
    //         // chain: idoApply?.blockchainPlateform,       //this is uncomment
    //         telegramUrl: '',
    //         twitterUrl: '',
    //         discordUrl: '',
    //         other: '',
    //         created: 'MAY 2023',
    //         pairCoin: 'MATIC',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //       {
    //         tokenAddress: '0x9A676e781A523b5d0C0e43731313A708CB607508',
    //         ownerAddress: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
    //         projectName: 'Music token',
    //         symbol: 'Music',
    //         decimal: 18,
    //         idoAddress: '0xf41B47c54dEFF12f8fE830A411a09D865eBb120E',
    //         projectCover: 'assets/images/icons/BlockChain4.png',
    //         websiteUrl: '',
    //         whitePaperUrlPdf: '',
    //         tokenRate: toWei(2),
    //         description: '',
    //         tokenAllocation: toWei('100000', 18),
    //         softCap: toWei('25000', 18),
    //         hardCap: toWei('50000', 18),
    //         minBuy: toWei('1000', 18),
    //         maxBuy: toWei('50000', 18),
    //         idoStartDate: startDate2.toISOString(),
    //         idoEndDate: endDate2.toISOString(),
    //         whiteList: true,
    //         blockchainPlateform: 'MUMBAI',
    //         // chain: idoApply?.blockchainPlateform,       //this is uncomment
    //         telegramUrl: '',
    //         twitterUrl: '',
    //         discordUrl: '',
    //         other: '',
    //         pairCoin: 'TVL',
    //         created: 'MARCH 2023',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );
    // } catch (err) {
    //   console.log('err', err);
    // }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    // await queryInterface.bulkDelete('Idos', null, {});
  },
};
