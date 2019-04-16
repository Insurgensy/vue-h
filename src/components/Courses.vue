<template>
   <!-- Header -->
   <div>
      <section>
         <app-header></app-header>
      </section>
         
      <div class="container">
          <div class="columns">
           <div class="column">
             <div class="card blue-hover">
                 <div class="card-image">
                   <figure class="image is-4by3">
                     <img src="../assets/ted.jpg" alt="Placeholder image">
                   </figure>
                 </div>

                 <div class="card-content">
                   <div class="media">
                     <div class="media-content content-left">
                       <p class="title is-4">John Smith</p>
                       <p class="subtitle is-6">@johnsmith</p>
                     </div>
                   </div>

                   <div class="content">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Phasellus nec iaculis mauris. 
                   </div>
                   <button class="button is-link is-large">
                    <img class="btn-img" src="../assets/album2.png">
                    Play
                  </button>
                 </div>
               </div>
           </div>
           
           <div class="column">
             Third column
           </div>
           <div class="column">
             Fourth column
           </div>
         </div>
      </div>
     
      
   </div>
</template>
<style scoped>
.btn-img{
   padding-right:15px;
}
.content{
   text-align: left;
}
.is-link{
   background-color: none;
}

.button.is-link {
   background-color:transparent;
    border-color: transparent;
    color: #3273dc;
    font-weight: bold;
}
.button:hover{
background: #3273dc;
color:#fff;
}
.blue-hover {
  transition: all 0.25s ease-in;
  border-bottom: 5px solid transparent;
}
.blue-hover:hover {
  transform: translateY(-5px);
  mar
  border: none;
  border-bottom: 5px solid #2196fe;
}
  
</style>
<script>
import Header from '@/components/Header'
   export default {

      components:{
      'app-header':Header
      },
   	data: function (){
   		return {

   			isActive:false,
   			showModal:false,
   			showModal2:false,
   			showModal3:false,
   			showModal4:false,
   			showModal5:false,
   			showModal6:false,
   			showModal7:false,
   			showModal8:false,
   			showModal9:false,
   			showModal10:false,
   			showModal11:false,
            showModal12:false,
            showModal13:false,
            showModal14:false,
            showModal15:false,
            showModal16:false,
            showModal17:false,
            showModal18:false,
            showModal19:false,
            showModal20:false,
            showModal21:false,
            showModal22:false,
            showModal23:false,
            showModal24:false,
            showModal25:false,
            showModal26:false,
            showModal27:false,
            showModal28:false,
            showModal29:false,
            showModal30:false,
   
   		}
   	},
   
   
   	methods: {
   		myFunction: function(){
   			this.isActive = !this.isActive
   		}
   	}
   
   
   }
   
</script>