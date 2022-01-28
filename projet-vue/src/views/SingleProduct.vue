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
                            <li>
                                <span>{{items.id}}</span>
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


    <div class="product-details-area ptb-100">
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
                                        <!-- <div class="item owl-thumb-item">
                                           <div class="top-img">
                                               <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div> -->
                                        <!-- <div class="item owl-thumb-item">
                                          <div class="top-img">
                                               <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="col-sm-9 col-lg-9">
                                    <div class="image-slides owl-carousel" >
                                        <div class="item" v-for="(item,index) in items.photo" :key="index" v-if="items.photo.length > 0"  >
                                            <div class="top-img">
                                                <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.path" :alt="items.libelle">
                                             
                                            </div>
                                        </div>
                                        <!-- <div class="top-img" v-if="item[index] === 1">
                                           <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.path" :alt="items.libelle">
                                        </div>
                                        <div class="top-img" v-if="item[index] === 3">
                                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ item.path" :alt="items.libelle">
                                        </div> -->
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
                            <ul class="tag">
                                <li>Numero du produit: <span>{{items.id}}</span></li>
                                <li>Categorie: <span>Sofa</span></li>
                                <li>libelle: <span>Furniture</span></li>
                                <li>Status: <span>En Stock</span></li>
                            </ul>
                             <ul class="reviews" id="stars">
    
                              <i class="bi bi-star-fill start fs-3" title="mauvais" :id="1" @click="rated(1,1)"></i>
    
                              <i class="bi bi-star-fill fs-3" title="assez" :id="2" @click="rated(2,2)"></i>
    
                              <i class="bi bi-star-fill fs-3" title="Good" :id="3" @click="rated(3,3)"></i>
    

                              <i class="bi bi-star-fill fs-3" title="Excellent" :id="4" @click="rated(4,4)"></i>
                              <i class="bi bi-star-fill fs-3" title="super" :id="5" @click="rated(5,5)"></i>
                               <span class="badge bg-secondary ms-1 p-2">{{this.rating.rate}} /5</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <div class="checkout-billing">

                            <div class="form-group">
                             <label for="date-debut">date de debut</label>
                                <input type="date" name="date" v-model="items.from" class="form-control" placeholder="date début" required>
                            </div>

                            <div class="form-group">
                             <label for="date-fin">date de fin</label>
                                <input type="date" v-model="items.to" class="form-control" name="date" placeholder="date fin" required>
                            </div>
                             <div class="form-group">
                             <label for="location">Destination</label>
                                <input type="text" v-model="items.location" class="form-control" name="location" placeholder="Destination" required>
                            </div>
                            <div class="form-group">
                              <label for="objet">Objectifs</label>
                                <input type="text" v-model="items.objects" class="form-control" name="objet" placeholder="Objectifs" required>
                            </div>

                            <div class="form-group">
                              <label for="objet">Quantité</label>
                                <input type="number" v-model="items.quantity" class="form-control" name="objet" placeholder="ex:200" required>
                            </div>

                             <div class="form-group">
                            <label for="participants">Participants</label>
                                <input type="number" v-model="items.participant" class="form-control" placeholder="ex:90" required>
                            </div>
                            
                            <div class="form-group">
                             <label for="details">Détails</label> <br>
                             <textarea placeholder="Détails" v-model="items.details"  cols="50" rows="10" required></textarea>
                                <!-- <input type="text"  class="form-control" name="location" placeholder="details" > -->
                            </div>
                            <ul class="cart list-unstyled">
                                <li >
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


    <div class="products-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Les Produits les plus achetés</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in plusAcheters" 
                      :key="index"
                      >
                            <div class="products-item">
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
// import Rating from './Rating.vue'
export default {
   name:"SingleProduct",

   props:['products','cart','add','removeItem','removeBySign','increase'],

   compoments:{
    Header,Loading
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
           },
            bestSeller:[],
            currentPage:1,
            perPage:3,
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
           this.rating.rate = evaluation
       },  
         getBestSeller(){
           axios.get('https://igp-event-backend.lce-ci.com/api/bestseller')
           .then(resp =>{
                this.bestSeller = resp.data
                console.log("bestSeller",resp.data);
                }) 
        }

    
   },

   created(){   
        this.isLoading = true;
        // location.reload(true)
  axios.get('https://igp-event-backend.lce-ci.com/api/products/'+ this.id)
                  .then(resp =>{
                this.items = resp.data.data
                  this.isLoading =false;
                })
    


   },
   
   mounted() {
  this.getBestSeller();
   },
  
}
</script>

<style scoped>

.reviews li{
 display:inline-block!important;
 margin-right:.5em;
}

</style>
