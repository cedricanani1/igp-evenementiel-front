<template>
    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Commandes</h2>
                        <ul>
                            <li>
                                <route-link to="/">Home</route-link>
                            </li>
                            <li>
                                <span>Commandes</span>
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
                                <input type="text" name="date" v-model="nom" class="form-control">
                            </div>
                            <div class="form-group">
                             <label for="prenoms">prenoms</label>
                                <input type="text" name="date" v-model="prenoms" class="form-control" >
                            </div>
                             <div class="form-group">
                             <label for="raison">raison social</label>
                                <input type="text" name="raison" v-model="raison_social" class="form-control" >
                            </div>
                           <div class="form-group">
                             <label for="email">email</label>
                                <input type="text" name="email" v-model="email" class="form-control" >
                            </div>
                           
                            <div class="form-group">
                             <label for="phone">phone</label>
                                <input type="tel" name="phone" v-model="phone" class="form-control" >
                            </div>
                            <div class="form-group">
                             <label for="shipping">expedition</label>
                                <input type="text" name="shipping" v-model="shipping" class="form-control">
                            </div>
                            <!-- <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"  id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Ship To A Different Address
                                    </label>
                                </div>
                            </div> -->
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
                                 <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.photo[0].path" :alt="item.libelle">
                                </li>
                                <li>
                                    <h4>{{item.libelle}}</h4>
                                </li>
                                <li >
                                    <span>{{item.price}} * {{item.quantity}} </span>
                                    
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
export default {
  name:'Commander',
  props:['cart','add','products','removeItem','removeBySign','increase'],
  data(){
       return{
           items:null,
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
       }
  },
   created(){
     this.items = JSON.parse(localStorage.getItem('mycart'));
   },

   computed:{
   itemTotal(){
         let count = localStorage.getItem('total')
         console.log(count);
         return count;

     },
    //  days(){

    //      let date1 = new Date("20/01/2022");
    //      let date2 = new Date("28/01/2022")

    //      let time =date2.getTime() - date1.getTime();

    //      let diff = time / (1000*60*60*24);
    //      return diff.toFixed(0);

    //  },
    //  getCurrentDate(){
    //      const browserLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.languages;
    //      const initDateTime = new Intl.DateTimeFormat(browserLocale,{
    //          year:'numeric',
    //          month:'numeric',
    //          day: 'numeric',
    //          hour:'numeric',
    //          minute:'numeric'
    //      });
    //      return initDateTime.format(new Date());
    //  },
   },
   methods:{

       sendCommande(){ 
            let commande = {
                nom:this.nom,
                prenoms:this.prenoms,
                email:this.email,
                raison_social:this.raison_social,
                shipping:this.shipping,
                phone:parseInt(this.phone),
                cart:JSON.parse(this.cart),
           };
            this.commandes = commande;
           axios.post('api/orders',this.commandes)
                .then(reponse => {
                    console.log(reponse);
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
