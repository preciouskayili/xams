const express = require("express");
const router = express.Router();
const Create = require("../models/Create");

router.get("/", (req, res) => {
	Create.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			console.log("Successful");
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
			console.log("Failed");
			res.send(err);
		});
});

router.get("/search/:query", (req, res) => {
	const { query } = req.params;
	Create.find({ title: query })
		.sort({ createdAt: -1 })
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
			console.log("Failed");
			res.send(err);
		});
});

router.post("/", (req, res) => {
	const create = new Create(req.body);
	create
		.save()
		.then((result) => {
			console.log("Successful");
			res.redirect("http://localhost:3000");
		})
		.catch((err) => {
			console.log("Failed");
			res.send({ error: err });
		});
});
module.exports = router;
