const express = require("express");
const router = express.Router();
const Create = require("../models/Create");

router.get("/:id", (req, res) => {
	const { id } = req.params;
	Create.findById(id)
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

router.get("/details/:title", (req, res) => {
	const { id } = req.params;
	Create.findById(id)
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
module.exports = router;
