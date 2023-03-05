<template>
	<div class="popup">
		<button><i class="fa-solid fa-xmark"></i></button>
		<p>Would you like to receive updates when we post new upcoming webinars?</p>
		<div class="input-group">
			<input type="radio" name="radio"> <label for="radio">Yes, please</label>
			<input type="radio" name="radio"> <label for="radio">Nope</label>
		</div>
		<button>Next <i class="fa-solid fa-chevron-right"></i></button>
	</div>
</template>
<script>
	
</script>
<style scoped>
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
		width: 300px;
		height: 200px;
		margin: 160px auto;
		padding: 50px;
		font-size: 14px;
	}
	.popup .input-group{
		margin-top: 50px;
	}
	.popup .input-group input[type='radio'] { 
		transform: scale(2); 
		margin: 0 10px;
	}
	input[type='radio']:checked:after {
		width: 13px;
		height: 13px;
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