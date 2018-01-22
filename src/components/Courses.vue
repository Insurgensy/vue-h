
<template>
	<!-- Header -->
	<div>
	<section>
		<div class="bd-example is-paddingless">
	        <nav class="navbar is-link">
			  <div class="navbar-brand">
			    <a class="navbar-item" href="https://bulma.io">

			        <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
			      
			    </a>
			    <div class="navbar-burger burger" data-target="navMenuColorlink-example" @click="myFunction">
			      <span></span>
			      <span></span>
			      <span></span>
			    </div>
			  </div>

			  <div id="navMenuColorlink-example" class="navbar-menu" :class="{'is-active':isActive}">
			    <div class="navbar-start">
			      <a class="navbar-item" href="https://bulma.io/">
			        Home
			      </a>
			      <div class="navbar-item has-dropdown is-hoverable">
			        
			        <div class="navbar-dropdown">
			          <a class="navbar-item" href="/documentation/overview/start/">
			            Overview
			          </a>
			          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
			            Modifiers
			          </a>
			          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
			            Columns
			          </a>
			          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
			            Layout
			          </a>
			          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
			            Form
			          </a>
			          <hr class="navbar-divider">
			          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
			            Elements
			          </a>
			          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
			            Components
			          </a>
			        </div>
			      </div>
			    </div>

			    <div class="navbar-end">
			      <div class="navbar-item">
			        <div class="field is-grouped">
			          <p class="control">
			            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
			              <span class="icon">
			                <i class="fa fa-twitter"></i>
			              </span>
			              <span>
			                Tweet
			              </span>
			            </a>
			          </p>
			          <p class="control">
			            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
			              <span class="icon">
			                <i class="fa fa-download"></i>
			              </span>
			              <span>Download</span>
			            </a>
			          </p>
			        </div>
			      </div>
			    </div>
			  </div>
			</nav>
	    </div>
	</section>	
	<!-- cards section-->
	<section>
		<div class="columns">
		  <div class="column">
		    <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
			      <img src="http://html-preview.inf.ua/tema1.jpg" alt="Placeholder image">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-left">
			        
			      </div>
			      <div class="media-content">
			        <p class="title is-4">Стародавня Історія України</p>
			        <p class="subtitle is-6"></p>
			      </div>
			    </div>

			    <div class="content">
			      <p>Первісна доба. Трпільська культура
			      	Індоєвропейці. Скіфи і Сармати. Антчні міста держави в Північному прчорномор'ї та криму.
					Походження слов'ян, розселення їх в Україні.
					Господарство, побут, звичаї та вірування слов'ян.
			      </p>
			      <a class="button is-link">Старт</a>
			    </div>
			  </div>
			</div>
		  </div>
		  <div class="column">
		   <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
			      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-left">
			        <figure class="image is-48x48">
			          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
			        </figure>
			      </div>
			      <div class="media-content">
			        <p class="title is-4">John Smith</p>
			        <p class="subtitle is-6">@johnsmith</p>
			      </div>
			    </div>

			    <div class="content">
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
			      <a href="#">#css</a> <a href="#">#responsive</a>
			      <br>
			      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			    </div>
			  </div>
			</div>
		  </div>
		  <div class="column">
		    <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
			      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-left">
			        <figure class="image is-48x48">
			          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
			        </figure>
			      </div>
			      <div class="media-content">
			        <p class="title is-4">John Smith</p>
			        <p class="subtitle is-6">@johnsmith</p>
			      </div>
			    </div>

			    <div class="content">
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
			      <a href="#">#css</a> <a href="#">#responsive</a>
			      <br>
			      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			    </div>
			  </div>
			</div>
		  </div>
		  <div class="column">
		    <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
			      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-left">
			        <figure class="image is-48x48">
			          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
			        </figure>
			      </div>
			      <div class="media-content">
			        <p class="title is-4">John Smith</p>
			        <p class="subtitle is-6">@johnsmith</p>
			      </div>
			    </div>

			    <div class="content">
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
			      <a href="#">#css</a> <a href="#">#responsive</a>
			      <br>
			      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			    </div>
			  </div>
			</div>
		  </div>
		</div>
	</section>

	</div>

	
</div>
</template>
<style scoped>
.column{
	border:1px solid red;
}
.is-link{
	width:100%;
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
