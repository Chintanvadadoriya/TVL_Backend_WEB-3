npx sequelize-cli model:generate --name Igoapply --attributes tokenAddress:string,projectCover:string,projectName:string,symbol:string,description:string,websiteUrl:string,whitePaperUrlPdf:string,blockchainPlateform:string,tokenRate:float,softCap:float,hardCap:float,minBuy:float,maxBuy:float,liquidity:float,tokenallocation:float,idoStartDate:date,idoEndDate:date,whiteList:boolean,telegramUrl:string,twitterUrl:string,discordUrl:string,other:string,created:string,kycVerifyed:boolean,kycToken:string,userId:integer

npx sequelize-cli model:generate --name Category --attributes name:string

npx sequelize-cli model:generate --name Blog --attributes title:string,image:string,imageCid:string,description:text,highlightContent:text,feature:text,quote:string,categoryId:integer,featureContent:text,igoApplyId:integer,igoFacts:text,aboutIgo:text

npx sequelize-cli model:generate --name Ido --attributes tokenAddress:string,tokenName:string,tokenSymbol:string,idoAddress:string,tokenDecimal:integer,tokenAllocation:string,tokenRate:string,softCap:string,hardCap:string,minBuyPerUser:string,maxBuyPerUser:string,startTime:date,endTime:date,useWhiteList:boolean,chain:string,telegramUrl:string,twitterUrl:string,discordUrl:string,otherUrl:string

#migration
npx sequelize-cli model:generate --name Comment --attributes comment:string,blogId:integer,userId:integer

npx sequelize-cli model:generate --name Replay --attributes replay:string,commentId:integer,userId:integer

npx sequelize-cli model:generate --name Whitelist --attributes idoId:integer,address:string,status:string

npx sequelize-cli model:generate --name Otp --attributes email:string,otp:string

npx sequelize-cli model:generate --name Tokens --attributes name:string,symbol:string,decimals:integer,logoURI:string,address:string

npx sequelize-cli model:generate --name Pairs --attributes token0:string,token1:string
#new routes
POST : http://localhost:1337/admin/ido

      tokenAddress: DataTypes.STRING,
      tokenName: DataTypes.STRING,
      tokenSymbol: DataTypes.STRING,
      idoAddress: DataTypes.STRING,
      tokenDecimal: DataTypes.INTEGER,
      tokenAllocation: DataTypes.STRING,
      logoUrl: DataTypes.STRING,
      tokenRate: DataTypes.STRING,
      softCap: DataTypes.STRING,
      hardCap: DataTypes.STRING,
      minBuyPerUser: DataTypes.STRING,
      maxBuyPerUser: DataTypes.STRING,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      useWhiteList: DataTypes.BOOLEAN,
      chain: DataTypes.STRING,
      telegramUrl: DataTypes.STRING,
      twitterUrl: DataTypes.STRING,
      discordUrl: DataTypes.STRING,
      otherUrl: DataTypes.STRING,

PATCH : http://localhost:1337/ido

     id require in body

GET : http://localhost:1337/ido/1

     1 is id to get DEtails

GET : http://localhost:1337/ido

     get all idos

//category

POST : http://localhost:4000/admin/category

PATCH : http://localhost:4000/admin/category

DELETE: http://localhost:4000/admin/category/:id

GET : http://localhost:4000/category

//blog
GET : http://localhost:4000/blog

//get single blog details
GET : http://localhost:4000/blog/:id

POST : http://localhost:4000/admin/blog

PATCH : http://localhost:4000/admin/blog

DELETE: http://localhost:4000/admin/blog/:id
