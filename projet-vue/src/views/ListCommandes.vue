<template>
    
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Liste des commandes</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>se connecter</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/page-title1.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>

     <div class="box" v-for="items in listCommandes" :key="items.id">
      <h5> {{items.to}}</h5>       
      <h5>  {{items.from}}</h5>
      <h5> {{items.participants}}</h5>
      <h5> {{items.details}}</h5>
    <h5> {{items.objet}}</h5>
    <h5> {{items.location}}</h5>
    <h5> {{items.option}}</h5>
     <!-- <h6>  {{date}}</h6> -->
      <router-link to="/" class="btn btn-lg bg-primary" @click.prevent="getDetailsCommandes">details commande</router-link>
      
     </div>
     
    
</template>

<script>
import axios from 'axios'
// import store from 'store'
export default {
   name:'ListCommandes',
   data(){
       return{
           listCommandes:[],
           date:"",
       }
   },
   methods:{
       getDetailsCommandes(){
         localStorage.getItem('mycart') 
        if(localStorage.mycart){
               let lesCommandes = localStorage.mycart;
               this.listCommandes = JSON.parse(lesCommandes);
           }
        // localStorage.getItem('mycart')  
        this.$router.push('/detailcommande')
       }
 
   },
   mounted(){
       localStorage.getItem('commandes')
       this.listCommandes = JSON.parse(localStorage.getItem('commandes'))
        // this.date = store.state.date     
   }
}
</script>

<style scoped>
.box{
    width:300px;
    height:auto;
    margin:1em auto;
    background-color:rgb(235, 233, 233);
    text-align:center;
    padding:1em;
}



</style>