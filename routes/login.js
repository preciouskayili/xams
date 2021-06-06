const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
	res.send({
		name: "Api is fetching",
		author: "Precious Solomon",
		class: "SSS1"
	});
});

module.exports = router;
