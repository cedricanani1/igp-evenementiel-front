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
                                <input type="text" v-model="nom" class="form-control" placeholder="Nom:">
                            </div>
                            <div class="form-group">
                                <input type="email" v-model="email" class="form-control" placeholder="Email:">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="phone" class="form-control" placeholder="Telephone:">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="ville" class="form-control" placeholder="Ville">
                            </div>
                            <!-- <div class="form-group">
                                <select>
                                    <option>Town*</option>
                                    <option>Some Option</option>
                                    <option>Another Option</option>
                                    <option>Potato</option>
                                </select>
                            </div> -->
                            <!-- <div class="form-group">
                                <select>
                                    <option>State*</option>
                                    <option>Some Option</option>
                                    <option>Another Option</option>
                                    <option>Potato</option>
                                </select>
                            </div> -->
                            <!-- <div class="form-group">
                                <select>
                                    <option>Country*</option>
                                    <option>Some Option</option>
                                    <option>Another Option</option>
                                    <option>Potato</option>
                                </select>
                            </div> -->
                            <!-- <div class="form-group">
                                <textarea id="your-notes" rows="4" class="form-control"
                                    placeholder="Other Notes (Optional)"></textarea>
                            </div> -->
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"  id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Ship To A Different Address
                                    </label>
                                </div>
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
                                <li>
                                    <img :src="item.photo" :alt="item.libelle">
                                </li>
                                <li>
                                    <h4>{{item.libelle}}</h4>
                                </li>
                                <li >
                                    <span>{{item.prix}} * {{item.quantity}} </span>
                                    
                                </li>
                            </ul>
                            <!-- <ul class="align-items-center">
                                <li>
                                    <img src="assets/images/checkout/checkout2.png" alt="Checkout">
                                </li>
                                <li>
                                    <h4>Yellow Armchair</h4>
                                </li>
                                <li>
                                    <span>$180.00</span>
                                </li>
                            </ul> -->
                            <div class="inner">
                                <!-- <h3>Shipping: <span>$15.00</span></h3> -->
                                <h4>Total: <span>{{itemTotal}} Fcfa</span></h4>
                            </div>
                        </div>
                        <div class="checkout-method">
                            <h3>Mode Paiement:</h3>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option1" type="radio" name="exampleRadios" id="exampleRadios1"
                                    value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Direct Bank Transfer
                                </label>
                                <p>Make your payment directly into our bank account. Please use your Order ID as the
                                    payment reference. Your order will not be shipped until the funds have cleared in
                                    your account.</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option2" type="radio" name="exampleRadios" id="exampleRadios2"
                                    value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                    Cash On Delivery
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option3" type="radio" name="exampleRadios" id="exampleRadios3"
                                    value="option3">
                                <label class="form-check-label" for="exampleRadios3">
                                    Paypal
                                </label>
                            </div>
                            <div class="form-check two">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault2">
                                <label class="form-check-label" for="flexCheckDefault2">
                                    I've read and accept <a href="terms-conditions.html">terms & conditions*</a>
                                </label>
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
import store from 'store'
export default {
  name:'Commander',
  data(){
       return{
           items:null,
           itemTotal:"",
           commandes:[],
           nom:"",
           email:"",
           phone:"",
           ville:"",
           option1:"",
           option2:"",
           option3:"",
           mydate:"",
       }
  },
   created(){
     this.items = JSON.parse(localStorage.getItem('mycart'));

   },
    props:['cart','add','products','removeItem','removeBySign','increase'],
//    mounted(){
//        console.log(localStorage.getItem('total'));
//    },
   computed:{
   itemTotal(){
         let count = localStorage.getItem('total')
         console.log(count);
         return count;

     },
     getCurrentDate(){
         const browserLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.languages;
         const initDateTime = new Intl.DateTimeFormat(browserLocale,{
             year:'numeric',
             month:'numeric',
             day: 'numeric',
             hour:'numeric',
             minute:'numeric'
         });
         return initDateTime.format(new Date());
     },
   },
   mounted(){
    //    localStorage.getItem('total')
    //    localStorage.setItem('date', this.getCurrentDate)
    //    console.log(localStorage.getItem('commandes'));
    //    console.log(localStorage.getItem('date'))
    // localStorage.getItem('date')   
   },
   methods:{

       sendCommande(){ 
        localStorage.setItem('date', this.getCurrentDate)
         
           if(localStorage.commandes){
               let lesCommandes = localStorage.commandes;
               this.commandes = JSON.parse(lesCommandes);   
           }
           let commande = {
            nom:this.nom,
           email:this.email,
           phone:this.phone,
           ville:this.ville,
           option1:this.option1,
           option2:this.option2,
           option3:this.option3,

           };
               Swal.fire({
            position: 'center',
               icon: 'success',
               title: 'votre commande à été prise en compte',
              showConfirmButton: false,
              timer: 2000,
                  });
           console.log(commande);
           this.commandes.push(commande);
           localStorage.setItem('commandes',JSON.stringify(this.commandes))
           //localStorage.getItem('date')
           this.$router.push('/commande')
        //    window.location.href='/commande'

       }

   }

}
</script>
