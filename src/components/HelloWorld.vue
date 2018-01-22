<template>
    <div>
  <section class="hero is-info is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h2 class="c-name" >Historic</h2>
            </a>
            <router-link to="/Courses">
              <a class=" xs-btn navbar-item button is-primary is-inverted is-outlined action-b">
              Вивчити Історію </a>
            </router-link>
            
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <router-link to="/Courses">
                <a class=" navbar-item button is-primary is-inverted is-outlined action-b">
                Вивчити Історію </a>
              </router-link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body hero-custom">
      <div class="container has-text-centered">
        <p class="title">
          
        </p>
        <p class="subtitle">
          <h1 class="main-h">HISTORIC</h1>
          <p class="main-p">Простий спосіб вивчити історію України</p>
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li>
              <router-link to="/courses">
                <a class=" second-action navbar-item button is-primary is-inverted is-outlined action-b">
                  Вивчити Історію 
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <section>
    <div class="my-container">
      <div class="fixed-container">
        <h1 class="h1-main">Historic Feature</h1>
        <p  class="h1-text">Додаток створено студентами для студентів і для тих, </br>хто хоче більше дізнатися про Україну. Ми зібрали для вас найактуальніші тести за всі роки ЗНО. </p>
        <div class="main-contant">
          <div class="columns">
            <div class="column is-3 br">
              <p class="advantage-h">Абсолютно безкоштовно!</p>
              <p class="advantage-p">Все що вам потрібно це інтернет та браузер.</p>
              <p class="advantage-h second-h">Ігри</p>
              <p class="advantage-p padding-p">Ігрові механіки не дадуть вам заснути</p>
            </div>
            <div class="column br">
              <img src="../assets/device.png" alt="">
            </div>
            <div class="column br is-3">
              <p class="advantage-h">Навчайтесь де завгодно</p>
              <p class="advantage-p advantage ">Перевіряйте свої знання відразу після вивченої теми</p>
              <p class="advantage-h second-h">Матеріали</p>
              <p class="advantage-p padding-p">Містить персоналії, карти, картини, місця битв, та багато іншого</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="my-container-footer">
      <div class="fixed-container foter">
        <h3 class="contact-us">Зв'яжіться з нами</h3>
        <p class="contact-text">Ми хочемо спілкуватися з нашими користувачами. </br>Слідкуйте за нами в соц мережах</p>
        <div class="icon-container">
          <div class="icon facebook eclipse">&#xf09a;</div>
          <div class="icon twitter eclipse">&#xf099;</div>
        </div>
        <div class="clear"></div>

        <p class="write-us">Напишіть нам: historik@gmail.com</p>
      </div>
    </div>
  </section>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    background-color: #f0f0f0;
  }
  .hero-custom {
    background-image: url(../assets/leleka1080.jpg);
    
    background-repeat: no-repeat;
     background-attachment: fixed;
     width: 100%;
     height: auto;
     background-size: cover;
  }

  .my-container{
    height: auto;
    max-width:auto;
    margin:auto;
   
    margin-top:0px;
  }
  .fixed-container{
    max-width: 1400px;
    background-color:#fff;
    min-height:840px;
    margin-top:-78px;
    margin: auto;

  }

  .h1-main{
    font-size: 32px;
    font-family: 'Roboto';
    font-weight: bold;
    padding-top: 120px;
  }

  .h1-text{
    color: #313841;
    font-size: 20px;
    font-family: Roboto;
  }
  .main-contant{
    max-width: 960px;
    min-height: 574px;
    border: 1px solid blue;
    margin: auto;
  }
  .br{
    
    border: 1px solid #ccc;
  }

  .advantage-h {
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 22px;
    padding-top: 57px;
    line-height: 25px;
  }
  
  .advantage-p {
    padding-top: 11px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
  .second-h{
    padding-top:78px;
  }
  
  .main-h{
    font-size: 174px;
  }

  .main-p{
    font-size: 51px;
  }

  .main-contant {
    margin-top:57px;
  }

  .c-name {
    font-size: 24px;
    font-weight: bold;

    font-family: 'PT sans';
  }

  .action-b{
    margin-top:7px;
  }
  .xs-btn{
    float:right;
  }

  .second-action{
    width: 300px;
    margin: auto;
    padding: 31px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .my-container-footer{
    height:500px;
    background-image: url(../assets/second-bg.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: auto;
    background-size: cover;


  }

  .contact-us{
    font-size: 45px;
    color:#fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    padding-top: 116px;
  }
  
  .contact-text {
    font-size: 20px;
    font-weight: 300;
    color:#fff;
    padding-top:45px;
  }
  .foter{
    background-color: transparent;
  }
  
  .icon {
  width: 60px;
  height: 60px;
  margin: 10px;
  position: relative;
  float: left;
  overflow: hidden;
  line-height: 65px;
  text-align: center;
  color: white;
  font-family: 'FontAwesome';
  font-size: 35px;
  text-align: center;
  }
  .eclipse{
  width: 63px;
  height: 63px;
  margin: 8.5px;
  border-radius: 50px;
  }
  .rounded{
  border-radius: 5%;
  }
  .icon-container {
    margin:auto;
    width:170px;
    margin-top: 60px;
    text-align: center;
    
  }

  .write-us{
    font-size:15px;
    font-weight: 300;
    font-family: 'Roboto', serif;
    text-align: center;
    color:#fff;
    padding-top: 63px;
  }
  .facebook{
  text-shadow: 40px 40px 0 #1a336f, 39px 39px 0 #1a336f, 38px 38px 0 #1a336f, 37px 37px 0 #1a336f, 36px 36px 0 #1a336f, 35px 35px 0 #1a336f, 34px 34px 0 #1a336f, 33px 33px 0 #1a336f, 32px 32px 0 #1a336f, 31px 31px 0 #1a336f, 30px 30px 0 #1a336f, 29px 29px 0 #1a336f, 28px 28px 0 #1a336f, 27px 27px 0 #1a336f, 26px 26px 0 #1a336f, 25px 25px 0 #1a336f, 24px 24px 0 #1a336f, 23px 23px 0 #1a336f, 22px 22px 0 #1a336f, 21px 21px 0 #1a336f, 20px 20px 0 #1a336f, 19px 19px 0 #1a336f, 18px 18px 0 #1a336f, 17px 17px 0 #1a336f, 16px 16px 0 #1a336f, 15px 15px 0 #1a336f, 14px 14px 0 #1a336f, 13px 13px 0 #1a336f, 12px 12px 0 #1a336f, 11px 11px 0 #1a336f, 10px 10px 0 #1a336f, 9px 9px 0 #1a336f, 8px 8px 0 #1a336f, 7px 7px 0 #1a336f, 6px 6px 0 #1a336f, 5px 5px 0 #1a336f, 4px 4px 0 #1a336f, 3px 3px 0 #1a336f, 2px 2px 0 #1a336f, 1px 1px 0 #1a336f;

  background-color: #2850ad;
  }
  .twitter{
  text-shadow: 40px 40px 0 #28a6e6, 39px 39px 0 #28a6e6, 38px 38px 0 #28a6e6, 37px 37px 0 #28a6e6, 36px 36px 0 #28a6e6, 35px 35px 0 #28a6e6, 34px 34px 0 #28a6e6, 33px 33px 0 #28a6e6, 32px 32px 0 #28a6e6, 31px 31px 0 #28a6e6, 30px 30px 0 #28a6e6, 29px 29px 0 #28a6e6, 28px 28px 0 #28a6e6, 27px 27px 0 #28a6e6, 26px 26px 0 #28a6e6, 25px 25px 0 #28a6e6, 24px 24px 0 #28a6e6, 23px 23px 0 #28a6e6, 22px 22px 0 #28a6e6, 21px 21px 0 #28a6e6, 20px 20px 0 #28a6e6, 19px 19px 0 #28a6e6, 18px 18px 0 #28a6e6, 17px 17px 0 #28a6e6, 16px 16px 0 #28a6e6, 15px 15px 0 #28a6e6, 14px 14px 0 #28a6e6, 13px 13px 0 #28a6e6, 12px 12px 0 #28a6e6, 11px 11px 0 #28a6e6, 10px 10px 0 #28a6e6, 9px 9px 0 #28a6e6, 8px 8px 0 #28a6e6, 7px 7px 0 #28a6e6, 6px 6px 0 #28a6e6, 5px 5px 0 #28a6e6, 4px 4px 0 #28a6e6, 3px 3px 0 #28a6e6, 2px 2px 0 #28a6e6, 1px 1px 0 #28a6e6;

  background-color: #29c5f6;
  }
  
  .clear{
          clear:both;
        }
  
 
  
  @media only screen and (min-width: 1023px) {
    .xs-btn {
        display: none;
        margin:auto;
    }
  }

   @media only screen and (max-width: 905px) {
    .main-h {
      font-size: 40px;
    }

    .main-p{
      font-size:24px;
    }

    .padding-p{
      padding-bottom:40px;
    }
  }

  
</style>
<script>
 
</script>