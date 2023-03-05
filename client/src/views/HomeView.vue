<template>
	<Input/>
	<div class="container highest-vote">
		<h4 class="mb-5 text-center display-6">En Yüksek Değerlendirme Alanlar</h4>
		<HighestVote/>
	</div>
</template>

<script>
	import Input from "../components/Input.vue"
	import HighestVote from "../components/HighestVote.vue"
	export default{
		components:{
			Input,
			HighestVote
		}
	}
</script>
<style scoped>
	.highest-vote{
		width: 100%;
		position: absolute;
		top: 280px;
		margin-left: 80px;
	}
</style>
