<template>
	<div class="row align-items-start">
		<div v-for="t in top4[0]" class="col-3">
			<div class="card">
				<div class="tools">
					<div class="circle">
						<span class="red box"></span>
					</div>
					<div class="circle">
						<span class="yellow box"></span>
					</div>
					<div class="circle">
						<span class="green box"></span>
					</div>
				</div>
				<div class="card__content mt-1">
					<p class="text-center"><a :href="'http://www.'+t.name" target="_blank">www.{{t.name}}</a></p>
					<div class="divdaire">
						<p class="mt-3">{{t.totalpoint}} p</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	import {computed} from "vue"
	import {useStore} from "vuex"	
	export default{
		setup(){
			const store = useStore()

			const top4 = computed(()=>{
				return store.getters.getStateSitetop4
			})

			return {top4}
		}
	}
</script>
<style>
	.card {
		width: 190px;
		height: 254px;
		margin: 0 auto;
		background-color: #F8FBFE;
		border-radius: 8px;
		z-index: 1;
	}

	.tools {
		display: flex;
		align-items: center;
		padding: 9px;
	}

	.circle {
		padding: 0 4px;
	}
	.card__content .divdaire{
		text-align: center;
		width: 90px;
		height: 90px;
		padding: 10px;
		margin: 20px auto 40px auto;
		border-radius: 50%;
		background-color: #F39354;
		color: #fff;
		font-weight: bold;
	}
	.card__content p a{
		text-decoration: none;
	}

	.box {
		display: inline-block;
		align-items: center;
		width: 10px;
		height: 10px;
		padding: 1px;
		border-radius: 50%;
	}

	.red {
		background-color: #ff605c;
	}

	.yellow {
		background-color: #ffbd44;
	}

	.green {
		background-color: #00ca4e;
	}

</style>