require("dotenv").config();
const errorHandler = require("./src/middlewares/error-handling-middleware");

const routes = require("./src/routes");

const express = require("express");

process.on("uncaughtException", (err) => {
	console.log("err.message", err.message);
	process.exit(1);
});

const app = express();

app.use(express.static("public"));

app.use(routes);

app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
	server.close(() => {
		console.log("err", err);
		process.exit(1);
	});
});
