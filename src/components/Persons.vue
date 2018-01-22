<template>
	<div class="columns flex-wrap">
	  <div class="column" v-for="(post, index) in posts">
	    <div class="card">
		  <div class="card-image">
		    <figure class="image is-4by3">
		      <img :src="post.img"  alt="Placeholder image">
		    </figure>
		  </div>
		  <div class="card-content">
		    <div class="media">
		      <div class="media-left">
		        
		      </div>
		      <div class="media-content">
		        <p class="title is-4">{{post.title}}</p>
		        
		        <router-link :to ="{name: 'post', params: { id: index }}"><a class="button is-success">Дізнатися більше </a></router-link>
		      </div>
		    </div>

		    <div class="content">
		      
		    </div>
		  </div>
		</div>
	  </div>
	  
	</div>
</template>
<style scoped>
	.flex-wrap{
		flex-wrap:wrap;
	}

		@media (min-width: 1100px) {
	  .columns {
	    max-width: 1100px;
	    margin:auto;
	  }
	}

	.column{
		min-width: 300px;
	}
</style>
<script>
	var posts = require('../posts.js')

	module.exports = {
		data: function(){
			return {
				posts:posts

			}
		}
	}
</script>