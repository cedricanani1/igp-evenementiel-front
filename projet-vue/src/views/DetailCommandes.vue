<template>
    
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Details Commandes</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
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

     <div>

     <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">libelle</th>  
      <th scope="col">prix</th> 
      <th scope="col">quantite</th> 
    </tr>
  </thead>
  <tbody>
 <tr v-for="items in detailsCommandes" :key="items.id">
      <td>{{items.libelle}}</td>
     <td>{{items.prix}}</td>
      <td>{{items.quantity}}</td>
    </tr>
    <th colspan="3">total :{{total}} Fcfa</th>
  </tbody>
</table>

      
     </div>
     
    
</template>


<script>
import axios from 'axios'
export default {
   name:'DetailsCommandes',
   data(){
       return{
           detailsCommandes:[],
           total:"",
       }
   },
   methods:{
 
   },
   mounted(){
     
    //    localStorage.getItem('commandes')
       this.detailsCommandes = JSON.parse(localStorage.getItem('mycart'))
       this.total = localStorage.getItem('total');
   }
}
</script>

<style scoped>




</style>