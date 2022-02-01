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

     <div class="card mx-auto px-3 pb-1" style="max-width: 540px;">
     
    <h3 class="text-center"> <b>Commande</b>  n <sup>o</sup>{{detailsCommandes.order_number}}</h3>
    <hr>
  <div class="row g-0">
    <div class="col-md-12" v-for="item in detailsCommandes.cart" :key="item.id">
    <h5 class="mb-2">{{item.product.libelle}}</h5>
    
      <img  :src="'https://igp-event-backend.lce-ci.com/public/'+ item.product.photo[0].path" class="img-fluid rounded-start " alt="">
      <p class="mt-2">Quantite : {{item.quantity}}</p>
      <p>Pour le : {{(item.from).slice(0,10).split('-').reverse().join('/')}} au :  {{(item.to).slice(0,10).split('-').reverse().join('/')}}</p>
    </div>
    <div class="col-md-12">
      <div class="card-body p-0">
       
        <p class="card-title"> status:{{detailsCommandes.status}}</p>
        <p><b>{{detailsCommandes.total_amount}} Fcfa</b></p>  
        <p class="card-text">status de paiement: <b> {{detailsCommandes.payment_status}}</b></p>
         <router-link to='/commande' class="btn btn-primary float-end  w-25">Retour</router-link>
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
           detailsCommandes:{},
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
    //    console.log("img",this.detailsCommandes.order_number)
    //    console.log("photo",detailsCommandes.cart[0].product.photo[0].path)
        
   }
}
</script>

<style scoped>




</style>