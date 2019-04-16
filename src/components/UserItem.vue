<template>
<div>
	<p id="demo">awd</p>
</div>
</template>

<script>
	export default {
	data: function (){
		return {
			isActive:false
		}
	},


	methods: {
		FirstAchiv: function(){
			alert("something")
		},

		

	},
	mounted: function() {
		this.FirstAchiv()
	}



}
</script>