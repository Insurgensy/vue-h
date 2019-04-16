<template>
	
	<section>
		<div class="bd-example is-paddingless">
	        <nav class="navbar is-link">
			  <div class="navbar-brand">
			    

			        <router-link to="/" class="navbar-item"><h2 class="c-name">Historic BETA v0.06</h2></router-link>
			      
			    </a>
			    <div class="navbar-burger burger" data-target="navMenuColorlink-example" @click="myFunction">
			       <span></span>
			       <span></span>
			       <span></span>
			    </div>
			  </div>

			  <div id="navMenuColorlink-example" class="navbar-menu" :class="{'is-active':isActive}">
			    <div class="navbar-start">
			      
			        
			      </a>
			      <router-link to="courses" class="navbar-item">Теми</router-link>
			      <router-link to="persons" class="navbar-item">Персони</router-link>
			      <router-link to="/" class="navbar-item">Головна</router-link>
			      <div class="navbar-item has-dropdown is-hoverable">
			        
			        <div class="navbar-dropdown">
			          
			        </div>
			      </div>
			    </div>

			    <div class="navbar-end">
			      <div class="navbar-item">
			        <div class="field is-grouped">
			          <p class="control">
			            
			          </p>
			          <p class="control">
			            
			          </p>
			        </div>
			      </div>
			    </div>
			  </div>
			</nav>
	    </div>
	</section>	
</template>
<style>
	.c-name{
		color:#fff;
		font-weight: bold;

	}
</style>
<script>
	export default {
	data: function (){
		return {
			isActive:false
		}
	},


	methods: {
		myFunction: function(){
			this.isActive = !this.isActive
		}
	}


}
</script>