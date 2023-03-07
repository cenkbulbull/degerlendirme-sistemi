const express = require('express')
const router = express.Router()

//Models
const Site = require("../models/Site")


//site ilk değerlendirme
router.post("/",(req,res,next)=>{
	const {name,totalpoint} = req.body

	const site = new Site({
		name,
		totalpoint
	})

	/*site.save((err,data)=>{
		if (err) {
			res.json(err)
		}
		res.json(data)
	})*/

	const promise = site.save()
	promise.then((data)=>{
		res.json(data)
	}).catch((err)=>{
		res.json(err)
	})	
})

module.exports = router