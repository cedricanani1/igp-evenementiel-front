<template>
  <div class="about">

    <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Produits</h2>
                        <ul>
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/page-title2.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <div class="product-details-area pt-100 pb-3">
    
        <div class="container">
            <div class="top">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="outer">
                            <div class="row">
                                <div class="col-sm-3 col-lg-3">
                                    <div class="owl-thumbs" data-slider-id="1">
                                        <div class="item owl-thumb-item" v-for="(item,index) in items.photo" :key="index" v-if="items.photo.length > 0">
                                            <div class="top-img">
                                             <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.path" :alt="items.libelle">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 col-lg-9">
                                    <div class="image-slides owl-theme owl-carousel owl-loaded owl-drag " >
                                        <div class="item" v-for="(item,index) in items.photo" :key="index" v-if="items.photo.length > 0"  >
                                            <div class="top-img">
                                                <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.path" :alt="items.libelle">
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="top-content">
                            <h2>{{items.libelle}}</h2>
                           
                             <h3>{{items.price}} Fcfa</h3>
                            
                            <p>{{items.slug}}</p>
                            <ul class="reviews badge bg-secondary p-3 ">
                            <span class="d-block mb-2 fs-4">{{items.start}}/5</span>
                            <div v-if=" items.start == 5">
                            <i class="bi bi-star-fill start fs-5 " :class="color" title="mauvais"></i>
                            <i class="bi bi-star-fill fs-5" :class="color" title="assez" ></i>
                            <i class="bi bi-star-fill fs-5" :class="color" title="Good" ></i>
                            <i class="bi bi-star-fill fs-5" :class="color" title="Excellent" ></i>
                            <i class="bi bi-star-fill fs-5" :class="color" title="super"></i>
                            </div>
                            <div v-if=" items.start == 4" >
                            <i class="bi bi-star-fill start fs-5" :class="color" title="mauvais"></i>
                           <i class="bi bi-star-fill fs-5" :class="color"  title="assez" ></i>
                           <i class="bi bi-star-fill fs-5" :class="color" title="Good" ></i>
                          <i class="bi bi-star-fill fs-5" :class="color" title="Excellent" ></i>
                           <i class="bi bi-star-fill fs-5" title="super"></i>
                            </div>
                        <div v-if=" items.start == 3">
                        <i class="bi bi-star-fill start fs-5" :class="color" title="mauvais"></i>
                         <i class="bi bi-star-fill fs-5" :class="color" title="assez" ></i>
                         <i class="bi bi-star-fill fs-5" :class="color" title="Good" ></i>
                        <i class="bi bi-star-fill fs-5" title="Excellent" ></i>
                        <i class="bi bi-star-fill fs-5" title="super"></i>
                        </div>
                         <div v-if=" items.start == 2">
                        <i class="bi bi-star-fill start fs-5" :class="color" title="mauvais"></i>
                         <i class="bi bi-star-fill fs-5" :class="color" title="assez" ></i>
                         <i class="bi bi-star-fill fs-5" title="Good" ></i>
                        <i class="bi bi-star-fill fs-5" title="Excellent" ></i>
                        <i class="bi bi-star-fill fs-5" title="super"></i>
                        </div>
                         <div v-if=" items.start == 1">
                        <i class="bi bi-star-fill start fs-5" :class="color" title="mauvais"></i>
                         <i class="bi bi-star-fill fs-5" title="assez" ></i>
                         <i class="bi bi-star-fill fs-5" title="Good" ></i>
                        <i class="bi bi-star-fill fs-5" title="Excellent" ></i>
                        <i class="bi bi-star-fill fs-5" title="super"></i>
                        </div>
                         <div v-if=" items.start == 0">
                        <i class="bi bi-star-fill start fs-5" title="mauvais"></i>
                         <i class="bi bi-star-fill fs-5" title="assez" ></i>
                         <i class="bi bi-star-fill fs-5" title="Good" ></i>
                        <i class="bi bi-star-fill fs-5" title="Excellent" ></i>
                        <i class="bi bi-star-fill fs-5" title="super"></i>
                        </div>
                         
                         </ul>
                            <!-- <ul class="tag">
                                <li>Numero du produit: <span>{{items.id}}</span></li>
                                <li>Categorie: <span>Sofa</span></li>
                                <li>libelle: <span>Furniture</span></li>
                                <li>Status: <span>En Stock</span></li>
                            </ul> -->
                           
                        </div>
                    </div>
                </div>
            </div>
        <div class="checkout-billing w-75 mx-auto">

                            <div class="form-group">
                             <label class="mb-1" for="date-debut">date de debut</label>
                                <input type="date" id="debut" name="date"   v-model="items.from"  :min="this.date" class="form-control date-withicon" placeholder="dd-mm-yyyy" required>
                            </div>

                            <div class="form-group mt-3">
                             <label class="mb-1" for="date-fin">date de fin</label>
                                <input type="date"  v-model="items.to" :min="items.from"   class="form-control" name="date" placeholder="dd-mm-yyyy" required>
                            </div>
                             <div class="form-group mt-3">
                             <label class="mb-1" for="location">Destination</label>
                                <input type="text" v-model="items.location" class="form-control" name="location" placeholder="Destination" required>
                            </div>
                            <div class="form-group mt-3">
                              <label class="mb-1" for="objet">Objectifs</label>
                                <input type="text" v-model="items.objects" class="form-control" name="objet" placeholder="Objectifs" required>
                            </div>

                            <div class="form-group mt-3">
                              <label class="mb-1" for="objet">Quantité</label>
                                <input type="number" v-model="items.quantity" class="form-control" name="objet" placeholder="ex:200" required>
                            </div>

                             <div class="form-group mt-3">
                            <label class="mb-1" for="participants">Participants</label>
                                <input type="number" v-model="items.participant" class="form-control" placeholder="ex:90" required>
                            </div>
                            
                            <div class="form-group mt-3">
                             <label class="mb-1" for="details">Détails</label> <br>
                             <textarea class="w-100 rounded" placeholder="Détails" v-model="items.details"  cols="50" rows="10" required></textarea>
                                <!-- <input type="text"  class="form-control" name="location" placeholder="details" > -->
                            </div>
                            <ul class="cart list-unstyled w-100">
                                <li>
                                    <a class="common-btn" href="#" @click.prevent="$emit('add',items)">
                                        Ajouter au panier
                                        <img src="/assets/images/shape1.png" alt="Shape">
                                        <img src="/assets/images/shape2.png" alt="Shape">
                                    </a>
                                </li>
                            </ul>
                        </div>
        </div>
    </div>
    <div class="container-fluid rating mx-auto  py-4">
     
    
     <form @submit.prevent.stop="postRating" class="bg-dark rounded form mx-auto px-4 py-3">
     <h1 class="text-light">Noter le produit</h1>
     <ul class="reviews w-100" id="stars">
    
        <i class="bi bi-star-fill start fs-2" title="mauvais" :id="1" @click="rated(1,1)"></i>
       <i class="bi bi-star-fill fs-2" title="assez" :id="2" @click="rated(2,2)"></i>
    
        <i class="bi bi-star-fill fs-2" title="Good" :id="3" @click="rated(3,3)"></i>
        <i class="bi bi-star-fill fs-2" title="Excellent" :id="4" @click="rated(4,4)"></i>
        <i class="bi bi-star-fill fs-2" title="super" :id="5" @click="rated(5,5)"></i>
        <span class="badge bg-secondary ms-1 p-2">{{this.rating.rate}} /5</span>
     </ul>
       <!-- <input class="my-2" v-model="rating.rate" type="text" name="rate" placeholder="Rating" > <br>  -->
       <input  class="mb-2 w-100 border-0 rounded" v-model="rating.object"  type="text" name="objet" placeholder="Objet" required autocomplete="off"> <br>
       <textarea class="w-100 border-0 rounded " v-model="rating.message"  name="message" id="" cols="20" rows="5" placeholder="Message" required></textarea> <br>
       <button class="my-2 w-25 rounded" type="submit">Envoyer</button>
     </form>
    
    
    </div>
      
    <div class="products-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2 class="mt-3">Les Produits les plus achetés</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in plusAcheters" 
                      :key="index"
                      >
                            <div class="products-item">
                             <span class="float-end me-2 mt-1">{{items.start}}/5</span>
                            <i class="bi bi-star-fill start float-end me-2 mt-1" :class="color" v-if=" items.start !== 0"></i>
                            <i class="bi bi-star-fill start float-end me-2 mt-1" v-else></i>
                                <div class="top">
                  <router-link to="/produits" v-if="items.photo.length >0">
                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                            </router-link>
                                    <div class="inner">
                                        <h3>
                            <router-link to="/produits">{{items.libelle}}</router-link>
                                        </h3>
                                        <span> {{items.price}} Fcfa</span>
                                    </div>
                            <div>
                            </div>
                                </div>
                             
                            </div>
                        </div>
            </div>
        </div>
    </div>

  </div>
  <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="FullPage" ></loading>
        </div>
   
</template>

<script>
import axios from 'axios'
import Header from "@/components/Header.vue"
import { Notyf } from 'notyf';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
   name:"SingleProduct",

   props:['products','cart','add','removeItem','removeBySign','increase'],

   compoments:{
    Header,Loading,
   },

   data(){
       return{
             checked:"",
             isLoading: false,
             fullPage: true,
             id:this.$route.params.id,
             items:{
                to:"",
                from:"",
                location:"",
                object:"",
                participants:"",
                details:"",
                quantity:"",
            },
           rating:{
              rate:0,
              object:"",
              message:"",
              product_id:this.$route.params.id,
           },
            bestSeller:[],
            currentPage:1,
            perPage:3,
            color:"orange",
            date:new Date().toLocaleDateString("fr"),
            // date:new Date().toJSON().slice(0,10),
       }
   },
   computed:{
      
       days(){
            
             return jours
       },
        plusAcheters(){
           let start = (this.currentPage * this.perPage) - this.perPage;
            let end = start + this.perPage;
         return this.bestSeller.slice(start,end);
       }
   },
    
   methods:{
       
       rated(evaluation,star){
           let i 
           if(document.getElementById(star).style.color != 'orange'){
               for(i=0 ; i<star ; i++){
                   document.getElementById(i+1).style.color = 'orange'
               }
           }else{
               for(i=5 ; i> star ; i--){
                   document.getElementById(i).style.color = 'gray'
               }
           }
         return this.rating.rate = evaluation
       },  
         getBestSeller(){
             this.isLoading =true;
           axios.get('https://igp-event-backend.lce-ci.com/api/bestseller')
           .then(resp =>{
                this.bestSeller = resp.data
                console.log("bestSeller",resp.data);
                this.isLoading =false;
                }) 
        },
        postRating(){
            axios.post('https://igp-event-backend.lce-ci.com/api/rating',this.rating)
             .then(
             reponse =>{
                 if(localStorage.getItem('token') == null){
                     Swal.fire({
                         position: 'center',
                         icon: 'success',
                        title: 'veuillez-vous inscrire avant de noter',
                        showConfirmButton: false,
                        timer: 1000,
                  })
                 }
                 if(localStorage.getItem('token')){
                     Swal.fire({
                          position: 'center',
                           icon: 'success',
                           title: 'Produit noté',
                         showConfirmButton: false,
                         timer: 1500,
                  })
                console.log(reponse)
                // this.$router.push("/")
                 window.location.href="/";
                 } 
            })
            .catch(err =>{
                console.log(err);
                 Swal.fire({
                         position: 'center',
                         icon: 'error',
                        title: 'veuillez-vous inscrire avant de noter',
                        showConfirmButton: false,
                        timer:1500,
                  })
            })
            console.log("rating",this.rating)
           
        }

    
   },

   created(){   
        // this.isLoading = true;
        // location.reload(true)
       axios.get('https://igp-event-backend.lce-ci.com/api/products/'+ this.id)
                  .then(resp =>{
                this.items = resp.data.data
                  this.isLoading =true;
                });
        
   },
   
   mounted() {
  this.getBestSeller();
  this.date;
   },
  
}
</script>

<style scoped>
.owl-prev span{
padding:1em;
}

.reviews li{
 display:inline-block!important;
 margin-right:.5em;

}
.rating{
text-align:center;
background-color:#f5f5f5;

}
.rating button{
background: #eb6435;
border: none;
color:white;
padding: .5em;
}
.orange{
color:orange;
}
input,textarea {
padding-left:1.5em;
}
.form{
    max-width:50% !important;
    }


@media screen and (max-width:621px) {
    .form{
    max-width:100% !important;
    }
}


</style>
