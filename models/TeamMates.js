const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamMatesSchema = new Schema(
	{
		friendsName: {
			type: String,
			required: true,
		},
		friendsId: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const teamMates = mongoose.model("TeamMates", teamMatesSchema);
module.exports = teamMates;
