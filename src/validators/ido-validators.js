const { validateRouteHandler } = require('../utils/validator');

module.exports.ido = {
  idoCreateValidation: validateRouteHandler({
    idoAddress: {
      in: ['body'],
      exists: { errorMessage: 'idoAddress is require' },
    },
    tokenAddress: {
      in: ['body'],
      exists: { errorMessage: 'tokenAddress is require' },
    },
    ownerAddress: {
      in: ['body'],
      exists: { errorMessage: 'tokenAddress is require' },
    },
    projectCover: {
      in: ['body'],
      exists: { errorMessage: 'projectCover is require' },
    },
    projectName: {
      in: ['body'],
      exists: { errorMessage: 'projectName is require' },
    },
    symbol: {
      in: ['body'],
      exists: { errorMessage: 'symbol is require' },
    },
    websiteUrl: {
      in: ['body'],
      exists: { errorMessage: 'websiteUrl is require' },
    },
    whitePaperUrlPdf: {
      in: ['body'],
      exists: { errorMessage: 'whitePaperUrlPdf is require' },
    },
    blockchainPlateform: {
      in: ['body'],
      exists: { errorMessage: 'blockchainPlateform is require' },
    },
    tokenRate: {
      in: ['body'],
      exists: { errorMessage: 'tokenRate is require' },
    },
    softCap: {
      in: ['body'],
      exists: { errorMessage: 'softCap is require' },
    },
    hardCap: {
      in: ['body'],
      exists: { errorMessage: 'hardCap is require' },
    },
    minBuy: {
      in: ['body'],
      exists: { errorMessage: 'minBuy is require' },
    },
    maxBuy: {
      in: ['body'],
      exists: { errorMessage: 'maxBuy is require' },
    },
    tokenAllocation: {
      in: ['body'],
      exists: { errorMessage: 'tokenAllocation is require' },
    },
    idoStartDate: {
      in: ['body'],
      exists: { errorMessage: 'idoStartDate is require' },
    },
    idoEndDate: {
      in: ['body'],
      exists: { errorMessage: 'idoEndDate is require' },
    },
    whiteList: {
      in: ['body'],
      exists: { errorMessage: 'whiteList is require' },
    },
  }),

  getIdoValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),

  updateIdoValidation: validateRouteHandler({
    id: {
      in: ['body'],
      exists: { errorMessage: 'id is require' },
    },
  }),
};
