<template>
	<div class="inputContainer">
		<div class="input-group flex-nowrap">
			<span class="input-group-text">www.</span>
			<input type="text" class="form-control" placeholder="example.com">
			<button class="buton">Değerlendir</button>
		</div>
	</div>
</template>
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