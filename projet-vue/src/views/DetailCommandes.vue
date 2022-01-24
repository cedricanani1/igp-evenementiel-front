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

     <div class="card mb-3" style="max-width: 540px;">
    <span class="float-end">n <sup>o</sup>{{detailsCommandes.order_number}}</span>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={{detailsCommandes.cart[0].product.photo[0].path}} class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <!-- <span>{{detailsCommandes.cart[0].product.photo[0].path}}</span> -->
        <span class="card-title"> status:{{detailsCommandes.status}}</span>
        <p>Total prix :{{detailsCommandes.total_amount}}</p>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">status de paiement:  <b> {{detailsCommandes.payment_status}}</b> </small></p>
      </div>
    </div>
  </div>
</div>
     
    
</template>


<script>
import '../components/axios.js'
import axios from 'axios'
export default {
   name:'DetailsCommandes',
   data(){
       return{
           detailsCommandes:[],
       }
   },
   methods:{
        getDetails(){ 
        axios.get("api/orders/"+this.$route.params.id)
             .then(rep=>{
                 this.detailsCommandes =rep.data
                 console.log("detail",this.detailsCommandes)
             })
       }
 
   },
   mounted(){
       this.getDetails()
        
   }
}
</script>

<style scoped>




</style>