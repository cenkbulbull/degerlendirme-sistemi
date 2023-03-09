<template>
	<div class="popup">
		<button @click="close"><i class="fa-solid fa-xmark"></i></button>
		<p>{{questions.length>$route.params.id ? questions[$route.params.id].question : "Değerlendirme bitmiştir, kapatabilirsiniz"}}</p>
		<p v-if="!(questions.length>$route.params.id)">Toplam verdiğiniz puan : {{totalPoint}}</p>
		<div v-if="questions.length>$route.params.id" class="input-group">

			<div v-for="(i,index) in 5" class="radio-group">
				<input v-model="currentPoint" type="radio" name="radio" :value="index+1"><label for="radio">{{index+1}}</label>
			</div>
			<!--{{currentPoint}} -- {{totalPoint}}-->
		</div>
		<button @click="next" :disabled="!(questions.length>$route.params.id)">Next <i class="fa-solid fa-chevron-right"></i></button>
	</div>
</template>
<script>
	import {ref,computed} from 'vue'
	import {useRoute,useRouter} from "vue-router"
	import {useStore} from 'vuex'
	import axios from "axios"
	export default{
		setup(){
			const currentPoint = ref(null)
			const totalPoint = ref(null)
			const store = useStore()
			const route = useRoute()
			const router = useRouter()

			const questions = computed(()=>{
				return store.getters.getStateQuestions
			})

			const next = ()=>{
				totalPoint.value += currentPoint.value
				const newid = parseInt(route.params.id)+1
				if (questions.value.length>parseInt(route.params.id)) {
					router.push("/rating/"+route.params.sitename+"/"+newid)
				}
			}

			const close = async()=>{
				if (questions.value.length>parseInt(route.params.id)) {
					router.push("/")
				}
				else{



					const data = {
						name:route.params.sitename,
						totalpoint:totalPoint.value,
						evaluation:1
					}

					await axios.get("http://localhost:3000/api/site/"+route.params.sitename)
					.then((durum)=>{
						//console.log(durum.data)
						if (durum.data == true) {

							if (totalPoint.value<=55) {  //routerda geri ileri yapılıp, puan yükseltme işlemi için kısa süreli kontrol
								axios.put("http://localhost:3000/api/site/"+route.params.sitename,data)
								.then((data)=>{
									console.log(data)
									router.push("/")
								}).catch((err)=>{
									console.log(err)
								})
							}else{
								console.log("Kayıt yapılmadı")
								router.push("/")
							}

						}else{

							if (totalPoint.value<=55) {  //routerda geri ileri yapılıp, puan yükseltme işlemi için kısa süreli kontrol
								axios.post("http://localhost:3000/api/site",data)
								.then((data)=>{
									console.log(data)
									//console.log("veri eklendi")
									router.push("/")
								}).catch((err)=>{
									console.log(err)
								})
							}else{
								console.log("Kayıt yapılmadı")
								router.push("/")
							}

						}
					}).catch((err)=>{
						console.log(err)
					})
					
					/*await axios.post("http://localhost:3000/api/site",data)
					.then((data)=>{
						console.log(data)
						//console.log("veri eklendi")

						router.push("/")
					}).catch((err)=>{
						console.log(err)
					})*/





				}
			}


			return {questions,currentPoint,totalPoint,next,close}
		}
	}
</script>
<style>
	/*
font-family: 'Work Sans', sans-serif;
font-family: 'Poppins', sans-serif;
*/
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans:wght@400;700&display=swap');

	*{
		margin: 0;
		padding: 0;
		outline: none;
		font-family: 'Work Sans', sans-serif;
		text-decoration: none;
		list-style: none;
	}
	body{
		background-color: #C4CCE3;
	}
	.popup{
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content:start;
		background-color:#2D354D ;
		color: #ffffff;
		width: 400px;
		height: 300px;
		margin: 130px auto;
		padding: 50px;
		font-size: 14px;
	}
	.popup .input-group{
		margin-top: 20px;
	}
	.popup .radio-group{
		margin-right: 4px;
	}
	.popup .radio-group label{
		font-size: 12px;
		margin-left: 3px;
	}
	.popup .input-group input[type='radio'] { 
		transform: scale(2); 
		margin: 3px 10px;
	}
	input[type='radio']:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #F39354;
		content: '';
		display: inline-block;
		visibility: visible; 
	} 
	.popup button:first-child{
		position: absolute;
		right: 0;
		top: 0;
		background-color: #495781;
		color: #ffffff;
		font-size: 16px;
		cursor: pointer;
		width: 40px;
		height: 40px;
		border: 0;
		padding: 10px;
	}
	.popup button:last-child{
		position: absolute;
		left: 0;
		bottom: 10px;
		background-color:#F39354 ;
		color:#2D354D;
		font-size: 14px;
		font-weight: 800;
		cursor: pointer;
		width: 100%;
		height: 60px;
		border: 0;
	}
	.popup button:last-child i:after {
		content: '\00bb';
		opacity: 0;
		transition: 0.5s;
	}
	.popup button:last-child:hover i:after {
		opacity: 1;
		right: 0;
	}

	@media screen and (max-width: 425px) {
		.popup{
			width: 270px;
			height: 190px;
			padding: 40px;
		}
	}
</style>