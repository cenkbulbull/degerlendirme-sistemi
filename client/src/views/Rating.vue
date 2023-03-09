<template>
	<div style="width: 350px;text-align: center;margin:30px auto -50px auto">
		<div class="alert alert-warning w-100" role="alert">
			{{this.$route.params.sitename}}
		</div>
	</div>
	<Survey/>
</template>
<script>
	import Survey from "../components/Survey"
	export default{
		components:{
			Survey
		},
		setup(){

		}
	}
</script>