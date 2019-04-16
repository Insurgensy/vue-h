<template>
  <div class="main-wrapper">
    <section class="hero">
      <div class="container is-widescreen">
        <div class="columns">
          <div class="column is-mobile">
            <div class="logo-section">
              <img class="logo-img" src="../assets/homepage/logo-icon.png" alt="">
              <h1 class="logo-text">Play English</h1>
            </div>
            <div class="description">
              <p>Познавать английский можно с</br>удовольствием</p>

              <div class="buttons are-medium">
                <a class="button-registration">Регистрация</a>
                <a class="button-login">Войти</a>
                
              </div>
            </div>
          </div>
          <div class="column  is-one-third">
            <figure class="image image-content is-4by5">
              <img class="" src="../assets/homepage/prev3.png" alt="">
            </figure>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-wrapper{
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.container{
  height:100vh;
  
}
.logo {
  background-image: url(../assets/homepage/logo-icon.png);
  background-repeat: no-repeat;

}
.column{
  border:1px solid #fff;
  margin-top: 80px;
}
.hero{
  background-image: url(../assets/homepage/homepage-bg2.png);
  background-repeat: no-repeat;
  height:100vh;
  min-height:800px;  
  background-size:cover;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;

}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.logo-img{
  float:left;
  margin-top: 247px;
}
.logo-text{
  text-align: left;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 60px;
  margin-left: 10px;
  margin-top: 227px;
  float: left;
  color:#fff;
}
.logo-section{
  height: 278px;
}
.description{
  margin-top: 74px;
  font-family: Roboto;
  font-size: 30px;
  text-align: left;
  color:#fff;
}

.button-registration{
  display: inline-block;
  width: 200px;
  height: 70px;
  border-radius: 30px;
  background-color:#7FA3FF;
  text-align: center;
  padding-top: 16px;
  color:#fff;
  font-size:24px;
  font-family: Roboto;
}

.button-registration:hover{
  background-color:#1557FF;
}
.button-login{
  display: inline-block;
  width: 200px;
  height: 70px;
  border-radius: 30px;
  text-align: center;
  padding-top: 16px;
  color:#fff;
  font-size:24px;
  font-family: Roboto;
  border:3px solid #fff;
  margin-left: 40px;
}

.button-login:hover{
  background-color:#fff;
  color:#363636;

}
.buttons{
  margin-top:55px;
}
.image-content{
  max-width: 400px;
}




/**/
</style>
<script>
 
</script>