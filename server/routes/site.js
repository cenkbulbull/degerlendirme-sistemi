const express = require('express')
const router = express.Router()

//Models
const Site = require("../models/Site")


//site tüm kayıtlar
router.get("/",(req,res,next)=>{
	const promise = Site.find({ })
	promise.then((data)=>{
		if (!data) {
			next({message: "Site verisi yok"})
		}
		res.json(data)
	}).catch((err)=>{
		res.json(err)
	})
})

//site top4 kayıtlar
router.get("/top4",(req,res,next)=>{
	const promise = Site.find({ }).limit(4).sort({totalpoint:-1})
	promise.then((data)=>{
		if (!data) {
			next({message: "Site verisi yok"})
		}
		res.json(data)
	}).catch((err)=>{
		res.json(err)
	})
})

//aranan site varmı yokmu (true/false) sorgusu
router.get("/:sitename",(req,res)=>{
	const promise = Site.find({name:req.params.sitename})
	promise.then((data)=>{
		if (!data.length>0) {
			//console.log("veri yok")
			res.send(false)
		}else{
			console.log(data)
			res.send(true)
		}		
	}).catch((err)=>{
		res.json(err)
	})
})

//site ilk değerlendirme
router.post("/",(req,res,next)=>{

	const site = new Site(req.body)

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


//site ikinci ve daha sonraki değerlendirmeler (güncelleme)
router.put("/:sitename",(req,res,next)=>{
	const {name,totalpoint:newpoint,evaluation} = req.body

	const promise = Site.findOneAndUpdate({name:req.params.sitename},{name:name, $inc:{totalpoint: newpoint,evaluation:evaluation} }) //$inc ile artırma işlemi yapıldı

	promise.then((data)=>{
		res.json(data)
	}).catch((err)=>{
		res.json(err)
	})
})

module.exports = router