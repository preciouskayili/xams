const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		question: {
			type: {},
			required: true,
		},
		optionA: {
			type: {},
			required: true,
		},
		optionB: {
			type: {},
			required: true,
		},
		optionC: {
			type: {},
			required: true,
		},
		optionD: {
			type: {},
			required: true,
		},
		correctOption: {
			type: {},
			required: true,
		},
	},
	{ timestamps: true }
);

const create = mongoose.model("exam", createSchema);
module.exports = create;
