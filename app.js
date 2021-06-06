const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv/config");

const app = express();

// Import routes
const loginRoute = require("./routes/login");
const createRoute = require("./routes/create");
const teamRoute = require("./routes/team");
const statisticsRoute = require("./routes/statistics");
const profileRoute = require("./routes/profile");
const examRoute = require("./routes/examination");

// Register view engine
app.set("view engine", "ejs");

// Middleware and static files
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/login", loginRoute);
app.use("/create", createRoute);
app.use("/team", teamRoute);
app.use("/statistics", statisticsRoute);
app.use("/profile", profileRoute);
app.use("/examination", examRoute);

app.use(morgan("dev"));

app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// Routes
app.get("/", (req, res) => {
	res.send("index");
});

// Connect to DB
mongoose
	.connect(process.env.DB_CONNECTION, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then((result) => {
		app.listen(9000);
		console.log("Database connected");
		console.log("Server started");
	})
	.catch((err) => {
		console.log("Failed to connect to database");
	});

// 404
app.use((req, res) => {
	res.status(404).send("404");
});
