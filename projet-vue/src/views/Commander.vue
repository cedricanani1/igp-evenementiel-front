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
                             <label for="date-debut">date de debut</label>
                                <input type="date" name="date" v-model="to" class="form-control" placeholder="date début">
                            </div>

                            <div class="form-group">
                             <label for="date-fin">date de fin</label>
                                <input type="date" v-model="from" class="form-control" name="date" placeholder="date fin">
                            </div>

                            <div class="form-group">
                             <label for="phone">Télephone</label> <br>
                                <input  type="tel" id="phone" name="phone" v-model="phone" pattern="[+]{1}[0-9]{11,14}" placeholder="ex : 0765909878" required>
                            </div>

                            <div class="form-group">
                              <label for="objet">objet</label>
                                <input type="text" v-model="objet" class="form-control" name="objet" placeholder="Objet">
                            </div>

                            <div class="form-group">
                             <label for="location">Location</label>
                                <input type="text" v-model="location" class="form-control" name="location" placeholder="location">
                            </div>

                            <div class="form-group">
                            <label for="participants">Participants</label>
                                <input type="number" v-model="participants" class="form-control" placeholder="ex:90">
                            </div>
                            <div class="form-group">
                            <label for="participants">Détails</label>
                                <input type="text" v-model="details" class="form-control" placeholder="Details">
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
                        <div class="checkout-method">
                            <h3>Mode Paiement:</h3>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option" type="radio" name="exampleRadios" id="exampleRadios1"
                                    value="bancaire" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                    Virement bancaire direct
                                </label>
                                <p>Effectuez votre paiement directement sur notre compte bancaire. Veuillez utiliser votre numéro de commande comme référence de paiement. Votre commande ne sera pas expédiée tant que les fonds n'auront pas été compensés sur votre compte.</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option" type="radio" name="exampleRadios" id="exampleRadios2"
                                    value="livraison">
                                <label class="form-check-label" for="exampleRadios2">
                                    Paiement à la livraison
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" v-model="option" type="radio" name="exampleRadios" id="exampleRadios3"
                                    value="orange">
                                <label class="form-check-label" for="exampleRadios3">
                                    Orange
                                </label>
                            </div>
                            <div class="form-check two">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault2">
                                <label class="form-check-label" for="flexCheckDefault2">
                                    J'ai lu et j'accepte<router-link to="/"> les termes et conditions *</router-link>
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
import store from 'store'
export default {
  name:'Commander',
  data(){
       return{
           items:null,
           itemTotal:"",
           commandes:[],
           to:"",
           from:"",
           location:"",
           objet:"",
           participants:"",
           details:"",
           phone:"",
           mydate:"",
           days:"",
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
         
           if(localStorage.commandes) {
               let lesCommandes = localStorage.commandes;
               this.commandes = JSON.parse(lesCommandes);   
           }
           let commande = {
           phone:this.phone,
           option:this.option,
           to:this.to,
           from:this.from,
           participants:this.participants,
           details:this.details,
           objet:this.objet,
           location:this.location,
           };
            //    Swal.fire({
            // position: 'center',
            //    icon: 'success',
            //    title: 'votre commande à été prise en compte',
            //   showConfirmButton: false,
            //   timer: 2000,
            //       });
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
