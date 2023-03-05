<template>
	<Input/>
	<div class="desc">
		<p><code style="color:#fff"><em>/* İstediğin bir web siteyi geliştirici ruhuyla değerlendir, en yüksek puanla değerlendirilen siteleri incele, geliştirilirken yapılan hatalarını öğren ve çalışmalarını onlar gibi başarılı bir hale getir. */</em></code></p>
	</div>
	<div class="container highest-vote">
		<h4 class="mb-5 text-center display-6">En Yüksek Değerlendirme Alanlar</h4>
		<HighestVote/>
	</div>
	<!--<Survey/>-->
</template>

<script>
	import Survey from "../components/Survey.vue"
	import Input from "../components/Input.vue"
	import HighestVote from "../components/HighestVote.vue"
	export default{
		components:{
			Input,
			HighestVote,
			Survey
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
	.desc{
		position: absolute;
		top: 0;
		right: 0;
		width: 500px;
		height: 500px;
		background-color: #f39354;
		color: #fff;
		clip-path: circle(80.9% at 92% 11%);
	}
	.desc p{
		width: 350px;
		font-size: 15px;
		position: absolute;
		top: 90px;
		right: 13px;
		line-height: 30px;
		letter-spacing: 1px;
	}
</style>
