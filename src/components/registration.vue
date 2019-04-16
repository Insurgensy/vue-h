<template>
<section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container box">
    	<img class="svg" src="../assets/open-padlock.svg">
      <div class="field">
	  <p class="control has-icons-left has-icons-right">
	    <input class="input is-medium" type="email" placeholder="Email">
	    <span class="icon is-small is-left">
	      <img src="../assets/email-2.png">
	    </span>
	    <span class="icon is-small is-right">
	      <i class="fas fa-check"></i>
	    </span>
	  </p>
	</div>
	<div class="field">
	  <p class="control has-icons-left">
	    <input class="input is-medium" type="password" placeholder="Password">
	    <span class="icon is-small is-left">
	      <img src="../assets/lock.png">
	    </span>
	  </p>
	</div>
	<a class="button is-link is-large">Link</a>
    </div>
  </div>
</section>
</template>


<style type="text/css" scoped>
	.is-link{
		background-color: #3273dc;
		width: 100%;
	    margin-top: 25px;

	}
	.box{
		max-width: 390px;
		min-height:200px;
	}

	.hero{
		background-image: url(../assets/login-bg.jpeg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.svg{
		width: 150px;
		padding:15px;
		color: #3273dc;
		padding-bottom: 25px;
	}


</style>