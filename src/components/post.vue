<template>
	<div>
		<div v-if="personDat">
			<div class="card card-single">
			  <div class="card-image">
			    <figure class="image is-4by3">
			      <img :src="personDat.img" alt="Placeholder image">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-left">
			        <figure class="image is-48x48">
			          <img :src="personDat.img" alt="Placeholder image">
			        </figure>
			      </div>
			      <div class="media-content">
			        <p class="title is-4">{{personDat.name}}</p>
			        
			      </div>
			    </div>

			    <div class="content content-single">
			      {{personDat.body}}
				  <br>
			      <router-link :to="{path:'../persons'}"><a class="button is-success back-btn">Повернутися до персон</a></router-link>
			      
			    </div>
			  </div>
			</div>

		</div>
	</div>
</template>

<style >
	.content-single{
		text-align: left;
		font-family: 'Roboto', sans-serif;
		color:#000000;
		font-size: 18px;
	}

	.card-single{
		max-width: 400px;
		margin:auto;
		margin: 20px auto;
	}

	.back-btn{
		width: 100%;
		margin-top:20px;
	}
</style>

<script>
	var personData = require('../personData.js')
	module.exports = {
		data: function(){
			return {
				personData:personData

			}
		},
		created: function(){
			var personDatId = this.$route.params.id
			this.personDat = this.personData[personDatId]
		}
	}
</script>