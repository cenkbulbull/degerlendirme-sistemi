<template>
	<div class="inputContainer">
		<div class="input-group flex-nowrap">
			<span class="input-group-text">www.</span>
			<input v-model="site" type="text" class="form-control" placeholder="example.com">
			<button @click="rating" class="buton">Değerlendir</button>
		</div>
	</div>
</template>
<script>
	import {ref,onMounted} from "vue"
	import {useRouter} from "vue-router"
	export default{
		setup(props, context){
			const site = ref(null)
			const router = useRouter()

			const rating =()=>{
				if (site.value!=null) {
					//context.emit("site",site.value)
					//router.push("/rating/"+site.value.toLowerCase().split(".")[0]+site.value.toLowerCase().split(".")[1]+"/0")
					router.push("/rating/"+site.value.toLowerCase()+"/0")
				}
			}



			return {site,rating}
		}
	}
</script>
<style>
	.inputContainer{
		width: 500px !important;
		position: absolute;
		margin: 130px 70px;
	}
	.form-control:focus{
		box-shadow: none !important;
	}
	.buton{
		background-color: #f39354;
		color: white;
		border: 0;
		border-radius: 7px;
		padding: 14px;
	}
</style>