<template>
  <section>
  <app-header></app-header>
   <div class="quiz-section" id="quiz" v-show="showQuiz">
    <div class="container" >
      <div class="col-md-4">
        <div id="userInfo">
          <!--<h2 id="userName">Hello, {{userInfo.userName}}</h2>
          <p id="userScore">You have answered {{userScore}} of {{questions.length}} correctly</p> -->
          

        </div>
        <div class="box">
          <progress class="progress is-info" v-bind:value="progress"  max="100">60%</progress>
          <img v-bind:src="questions[index].img" alt="">
          <div id="wrap">
            <div id="iWrap">
              <i class="icon-heart" v-show="third"></i>
              <i class="icon-heart" v-show="second"></i>
              <i class="icon-heart" v-show="first"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div id="questionBlock">
          <h2>Question</h2>
          <div id="questionArea">
            <p id="questionDisplay">{{questions[index].question}}</p>
            <div class="answers possibleAnswersDisplay" id="possibleAnswersDisplay" v-for="pa in questions[index].possibleAnswers" >
              
              <input
                type="radio" name="answers"   
                 v-bind:id="pa"
                v-model="userAnswer" 
                v-on:click="av = false"  
                v-bind:value="pa"
                />

              <label class="col-xs-6" v-bind:for="pa">
                {{pa}}
              </label>
              

            </div>
            <p v-bind:id="questions[index].possibleAnswers"></p>
          </div><a class="button is-info next-btn" id="finalAnswer" @click="checkAnswer" v-on:click="av = true" v-bind:class="{av:av}">Final Answer</a>
          
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal" v-bind:class="{'is-active':isActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="http://html-preview.inf.ua/game_over.jpg" alt="">
      <div>
        <a class="button is-danger" v-on:click="reload">Ok</a>
      </div>
    </p>
  </div>
  <button class="modal-close is-large " aria-label="close"></button>
</div>

</section>



</template>

<style scoped>
  .box{
    min-height:250px;
  }
  .is-danger{
    width: 100%;
    height:70px;

  }
  .container{
    max-width: 400px;
  }
  .m-c{
    max-width:300px;
    max-height:300px;
    background-color:#fff;
  }
  .columns{
    border:1px solid blue;
    max-width:600px;

  }
  .av{
    display: none;
  }
  .isActive{
    display:none;
  }

  #questionArea{
    margin:auto;
  }
  

  .possibleAnswersDisplay{
    margin: 10px auto !important;
    padding-bottom: 0px;
  }

  .next-btn{
    width: 100%;
    height:40px;
    margin-top:30px;
  }
  
/* style section for user input*/
body {
  font-family: 'Lato', Arial, sans-serif;
  margin-top: 40px;
}

input[type='radio'] {
  display: none;
}
input[type='radio']:checked ~ label:before {
  background-color: #3994d6;
}
input[type='radio']:checked ~ label:after {
  animation: flash .5s ease;
  border-radius: 50%;
}

.possibleAnswersDisplay {
  transition: background-color 0.2s linear, box-shadow 0.2s linear, transform 0.3s cubic-bezier(0, 1.8, 1, 1.8);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding-left: 40px;
  margin: 0 0 20px 20px;
}
.possibleAnswersDisplay:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.05);
}
.possibleAnswersDisplay:hover label:before {
  box-shadow: 0 0 4px 10px rgba(0, 0, 0, 0.2) inset, 0 0 0 0px white, 0 0 0 1px white, 0 0 0 2px white, 0 0 0 3px white, 0 0 0 4px #3994d6;
}
.possibleAnswersDisplay:active {
  transform: scale(0.99);
  box-shadow: none;
}


label:before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: -30px;
  top: 35%;
  box-shadow: 0 0 0 0px white, 0 0 0 1px white, 0 0 0 2px white, 0 0 0 3px white, 0 0 0 4px #3994d6;
}
label:after {
  content: '';
  position: absolute;
  left: -22px;
  top: 29px;
  border-radius: 100%;
  background-color: #3994d6;
  width: 5px;
  height: 5px;
  z-index: -1;
  opacity: 0;
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 200px;
    height: 200px;
    top: -80px;
    left: -120px;
  }
}
/*icon lives*/
i {
  font-size: 1.5em;
  color: #da0000;
  text-shadow: 0 0 0.25em #da0000;

}

#iWrap{
  transition: 150ms ease;
  animation: spin 1s infinite;
  transform-style: preserve-3d;
}

@keyframes spin {
  0% {
    transform : scale(1.0);
  }
  15% {
    transform : scale(1.2);
  }
  25% {
    transform : scale(1.0);
  }
  50% {
    transform : scale(1.2);
  }
  100% {
    transform : scale(1.2);
  }
}

/* styling */

#wrap{
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  width:400px;
}



  



</style>
 
<script>
var baseUrl = "http://historic.com.ua/allTests/t1.json";
import Header from '@/components/Header'
  export default {
    components:{
      'app-header':Header
    },
    data() {
      return {
      message: 'asd',
      progress: 0,
      first: true,
      second:true,
      third:true,
      showQuiz:true,
      userInfo: {},
      userScore: 0,
      av:true,
      isActive:false,
      lives: 3,
      questions: [{
        question: 'sample',
        possibleAnswers: ['1', '2']
      }],
      index: 0,
      userAnswer: '',
      }
    },

    ready: function() {
    console.log('ready');
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      //console.log('fetch')
      this.$http.get(baseUrl + '')
        .then((data) => {
          this.questions = data.body
        }, (err) => {
          console.log(err)
        });

      this.$http.get(baseUrl + '/users/1')
        .then((data) => {
          this.userInfo = data.body;
        }, (err) => {
          console.log(err);
        });
    },
    checkAnswer: function() {
      if (this.userAnswer == this.questions[this.index].correctAnswer) {
        this.userScore++;
        console.log(this.userScore)
        this.progress += 6.6;

        // add shaking animationg green winner
      }
      else{
        var fail = this.lives--;
        console.log(this.lives)
        this.progress +=6.6;

      }

      if(this.lives === 0){
        this.isActive="true";
      }

      if(this.lives === 2){
        this.third = false;
        localStorage.setItem('firstAchiv', 'yes');

      }
       if(this.lives === 1){
        this.second = false;
      }
       if(this.lives === 0){
        this.first = false;
      }

      this.updateIndex();
    },
    reload: function() {
      setTimeout(function () {
          location.reload()
      }, 100);
    },
    updateIndex: function() {
      if (this.index < this.questions.length - 1) {
        this.index++;
      } else {
        this.displayResults();
      }
    },
    displayResults: function() {
      if( parseInt(this.userScore) / this.questions.length > .7 ){
        alert( 'You got ' + this.userScore + ' answers correct, you pass' );
      } else{
        alert( 'You got only ' + this.userScore + ' answers correct, you need to rewatch all episodes. NOW!' );
      }
      this.restartQuiz();
    },
    restartQuiz: function(){
      this.userScore = 0;
      this.index = 0;
    }
  }

  }
</script>