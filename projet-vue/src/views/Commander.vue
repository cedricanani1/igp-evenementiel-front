<template>
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Commander</h2>
                        <ul>
                            <li>
                                <route-link to="/">Accueil</route-link>
                            </li>
                            <li>
                                <span>Commander</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="assets/images/page-title1.jpg" alt="About">
            <img src="assets/images/shape16.png" alt="Shape">
            <img src="assets/images/shape17.png" alt="Shape">
            <img src="assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <div class="checkout-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Détails</h2>
            </div>
            <form @submit.prevent="sendCommande">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="checkout-billing">

                             <div class="form-group">
                             <label for="date-debut">nom</label>
                                <input type="text" v-model="this.user.nom" class="form-control"  required>
                            </div>
                            <div class="form-group">
                             <label for="prenoms">prenoms</label>
                                <input type="text"  v-model="this.user.prenoms" class="form-control" required>
                            </div>
                             <div class="form-group">
                             <label for="raison">raison social</label>
                                <input type="text" name="raison" v-model="raison_social" class="form-control" required>
                            </div>
                           <div class="form-group">
                             <label for="email">email</label>
                                <input type="text" name="email" v-model="this.user.email" class="form-control" required>
                            </div>
                           
                            <div class="form-group">
                             <label for="phone">phone</label>
                                <input type="tel" name="phone" v-model="this.user.phone" class="form-control" required>
                            </div>
                            <div class="form-group">
                             <label for="shipping">expedition</label>
                                <input type="text" name="shipping" v-model="shipping" class="form-control" required>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn common-btn">
                                    Commander
                                    <img src="assets/images/shape1.png" alt="Shape">
                                    <img src="assets/images/shape2.png" alt="Shape">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="checkout-order">
                            <h3>Votre Commande:</h3>
                <ul class="align-items-center"  v-for="(item,index) in items" 
                      :key="index">
                                <li v-if="item.photo.length > 0">
                                 <img :src="item.photo" :alt="item.libelle">
                                </li>
                                <li>
                                    <h4>{{item.libelle}}</h4>
                                </li>
                                <li >
                                    <span>{{item.price}} * {{item.quant}} </span>
                                    
                                </li>
                            </ul>
                            <div class="inner">
                                <h4>Total: <span>{{itemTotal}} Fcfa</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<style scoped>

.checkout-order ul li span{

margin-left:-1em;

}
#phone{
width:100%;
border:none;
}
@media screen and (max-width:1114px){
.checkout-order ul li span{

margin-left:-1.5em;

}
}
@media screen and (max-width:991px){
.checkout-order ul li span{

margin-left:2.656em;

}
}
@media screen and (max-width:768px){
.checkout-order ul li span{

margin-left:0;

}
}


</style>
<script>
import '../components/axios.js'
import axios from 'axios'
import store from "../store";
export default {
  name:'Commander',
  props:['cart','add','products','removeItem','removeBySign','increase'],
  data(){
       return{
           items:[],
           itemTotal:"",
           commandes:[],
        //    infoCommandes:[],
           cart:localStorage.getItem('mycart'),
           nom:"",
           prenoms:"",
           email:"",
          raison_social:"",
           shipping:"",
           phone:"",
           user:store.state.user,
          token:localStorage.getItem("token"),
       }
  },
   created(){
     this.items = JSON.parse(localStorage.getItem('mycart'));
   },

   computed:{
   itemTotal(){
         let count =0
         this.items.forEach( item =>{
             count+= item.price * item.quant
         })
       
         return count;

     },
   },
   methods:{

       sendCommande(){ 
            let commande = {
                nom:this.user.nom,
                prenoms:this.user.prenoms,
                email:this.user.email,
                raison_social:this.raison_social,
                shipping:this.shipping,
                phone:parseInt(this.user.phone),
                cart:JSON.parse(this.cart),
           };
            this.commandes = commande;
           axios.post('api/orders',this.commandes)
                .then(reponse => {
                    if(!localStorage.getItem('token')){
                        // this.$router.push('/login')
                        window.location.href = '/login'
                    }else{
                        console.log(reponse);
                        Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Commande effectuée', 
                        showConfirmButton: false,
                         timer: 1500
                    })
                    localStorage.removeItem('mycart')
                    //  this.$router.push('/')
                    window.location.href ='/'
                    }
                   
                })
                .catch(error =>{
                    if(error){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                     title: 'Désole votre commande n\'a pas été validée',
                    showConfirmButton: false,
                    timer: 1500,})
                    }
                    

                })
         
        //    if(localStorage.commandes) {
        //        let lesCommandes = localStorage.commandes;
        //        this.commandes = JSON.parse(lesCommandes);   
        //    }
          
            //    Swal.fire({
            // position: 'center',
            //    icon: 'success',
            //    title: 'votre commande à été prise en compte',
            //   showConfirmButton: false,
            //   timer: 2000,
            //       });
        //    console.log(this.commandes);
        //    this.commandes.push(commande);
        //    localStorage.setItem('commandes',JSON.stringify(this.commandes))
           //localStorage.getItem('date')
        //    this.$router.push('/commande')
        //    window.location.href='/commande'

       }

   },
   mounted(){
    //    console.log('test', JSON.parse(localStorage.getItem('info')))
    //    console.log('car', JSON.parse(localStorage.getItem('mycart')))
    console.log("cart",this.cart);

   }

}
</script>
