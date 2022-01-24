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
<div class="card w-50 mx-auto mt-3" v-for="(command,index) in listCommandes" :key="index">
  <div class="card-body">
    <span class="card-title d-block">commande n<sup>o</sup><b>{{command.order_number}}</b> </span>
    <span class="card-text d-block">Article <i>{{command.id}}</i></span>
      <span class="card-text d-block">Status : <b>{{command.payment_status}}</b></span>
    <!-- <span class="d-block">commander le : <b>{{(command.created_at.substring(0, 10))}}</b> </span> -->
    <router-link :to="{name:'detailcommande', params:{id:command.id}}" class="btn btn-primary float-end">DETAILS</router-link>
    
  </div>
</div>
     
    
</template>

<script>
import axios from 'axios'
import '../components/axios.js'
// import store from 'store'
export default {
   name:'ListCommandes',
   data(){
       return{
           listCommandes:[],
       }
   },
   methods:{
       getDetailsCommandes(){ 
        axios.get("api/orders-client")
             .then(rep=>{
                 console.log("ListCommand:",JSON.stringify(rep.data))
                 this.listCommandes = rep.data
             })
       },
   },
   mounted(){
       this.getDetailsCommandes()
   
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