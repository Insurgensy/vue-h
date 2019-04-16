<template>
	<div >
		<div v-for="(pervisnaDoba, index) in pervisnaDoba">
			<div class="tile is-ancestor">
			  <div class="tile is-vertical is-8">
			    <div class="tile">

			      <div class="tile is-parent is-vertical">
			        <article class="tile is-child notification is-primary">
			          <p class="title">{{pervisnaDoba.pTitle}}</p>
			          
						<div class="content">
				            <img v-bind:src="pervisnaDoba.img" alt="Палеоліт">
				          
				          <p>{{pervisnaDoba.pText}}</p>
				        </div>

			        </article>

			        <article class="tile is-child notification is-warning">
			          <p class="title">{{pervisnaDoba.mTitle}}</p>
			          <p class="subtitle"></p></br>
			          <div class="content">
			          <p>{{pervisnaDoba.mText}}</p>
			          <figure class="image is-2by1">
			            <img v-bind:src="pervisnaDoba.imgm" alt="Палеоліт">
			          </figure>
			        </div>
			        </article>
			      </div>

			      <div class="tile is-parent">
			        <article class="tile is-child notification is-info">
			          <p class="title">{{pervisnaDoba.nTitle}}</p>
			          </br>
			          <div class="content">
					  
			            <img v-bind:src="pervisnaDoba.imgn" alt="Палеоліт">
			          
			          <p>{{pervisnaDoba.eText}}</p>
			        </div>
			        </article>
			      </div>
			    </div>
			   <div class="tile is-parent">
				    <article class="tile is-child notification is-success">
				    	<p class="title">{{pervisnaDoba.zTitle}}</p>
				      <div class="content">
				      	<p>{{pervisnaDoba.zText}}</p>
				      </div>
				    </article>
			  	</div>
			  </div>
			  <div class="tile is-parent">
			    <article class="tile is-child notification is-success">
			      <p class="title">{{pervisnaDoba.bTitle}}</p>
			      <div class="content">
			        <div class="content">
			          <p>{{pervisnaDoba.bText}}</p>
			          <img v-bind:src="pervisnaDoba.imgb" alt="">
			        </div>
			      </div>
			    </article>
			  </div>
			</div>
		</div>

		<div class="box">
			
		</div>
		


	</div>
</template>
<style>
.notification{
	background-color: #FFF !important;
	border:1px solid #ccc;
}
.content p{
	color:#4a4a4a;
	text-align: left;
    padding: 1.25rem;

}

.title {
	color:#363636 !important;
}
.tile{
	padding:0px;
}
.fade-enter{
opacity:0;
}

.fade-enter-active{
	transition:opacity 0.5s;
}

.fade-leave{

}

.fade-leave-active{
	transition:opacity 1s;
	opacity:0;
}
</style>
<script>
	var pervisnaDoba = require('../pervisnaDoba.js')

	module.exports = {
		data: function(){
			return {
				pervisnaDoba:pervisnaDoba,
				show:false

			}
		},

		mounted: function() {
			this.show = true;
		}
	}
</script>

