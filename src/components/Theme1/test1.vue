<template>
 <div class="container" id="quiz">
  <div class="row">
    <div class="col-xs-12">
      <h1 class="title">Futurama Quiz</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div id="userInfo">
        <h2 id="userName">Hello, {{userInfo.userName}}</h2>
        <p id="userScore">You have answered {{userScore}} of {{questions.length}} correctly</p>
      </div>
    </div>
    <div class="col-md-8">
      <div id="questionBlock">
        <h2>Question</h2>
        <div id="questionArea">
          <p id="questionDisplay">{{questions[index].question}}</p>
          <div class="clearfix" id="possibleAnswersDisplay">
            <label class="col-xs-6" v-for="pa in questions[index].possibleAnswers">
              <input type="radio" name="answers" v-model="userAnswer" v-bind:value="pa"/><span>{{pa}}</span>
            </label>
          </div>
        </div><a class="btn btn-block btn-primary" id="finalAnswer" @click="checkAnswer">Final Answer</a>
      </div>
    </div>
  </div>
</div>



</template>

<style scoped>
  
</style>

<script>
var baseUrl = "https://mockapi-unadjzzymg.now.sh";
  export default {

    data() {
      return {
      message: 'asd',
      userInfo: {},
      userScore: 0,
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
      this.$http.get(baseUrl + '/questions?_limit=10')
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
      }
      this.updateIndex();
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