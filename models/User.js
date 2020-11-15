// User DB model
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	googleId: String,
	email: String,
	displayName: String,
	firstName: String,
	lastName: String,
	image: String,
	created_at: {
		type: Date,
		default: Date.now,
	},
	isRegistered: Boolean,
});

module.exports = model('User', userSchema);
