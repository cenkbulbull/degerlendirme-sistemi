const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SiteSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	totalpoint:{
		type:Number,
		required:true
	}
})

module.exports = mongoose.model("site",SiteSchema)