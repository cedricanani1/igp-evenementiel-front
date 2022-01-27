<template>
       
<!-- voici tous ce quui s' affiche lorsque tu viens sur le site -->
    <div class="banner-area-two">
        <div class="banner-slider owl-theme owl-carousel">
            <div class="banner-item one">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="banner-content text-light">
                                <h1 class="text-light">obtenez tous les meubles à la mode dans un seul magasin</h1>
                                <router-link class="common-btn" to="/produits">
                                    Commander Maintenant
                                    <!-- <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape"> -->
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="banner-img">
                    <img class="img-fluid" src="/assets/images/4023_1.jpg" alt="ceremonie">
                    <img src="/assets/images/banner/banner-shape1.png" alt="Shape">
                </div> -->
            </div>
            <div class="banner-item two">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="banner-content text-light">
                                <!-- <h1 class="text-light">plat</h1> -->
                                <h1 class="text-light">Nous rendons vos ceremonie magnifique</h1>
                                <router-link class="common-btn" to="/produits">
                                    Commander Maintenant
                                    <!-- <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape"> -->
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="banner-img">
                    <img src="/assets/images/evenement-d-entreprise.jpg" alt="Banner">
                    <img src="/assets/images/banner/banner-shape1.png" alt="Shape">
                </div> -->
            </div>
        </div>
    </div>
<!-- voici tous ce quui s' affiche lorsque tu viens sur le site -->

  
     <div class="products-area ptb-100">

        <div class="container-fluid pe-5">
            <div class="row">
                <div class="col-lg-2">
     <!-- buttons pour filtrer les produits-->
                    <div class="sorting-menu">
                        <ul class="justify-content-center">
                            <li class="filter" v-for="categorie in categories" :key="categorie.id" >
                                <div class="products-thumb" >
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                                    <span>{{categorie.libelle}}</span>
                                </div>
                            </li>
                             <!-- <li class="filter" @click="userFilterKey = 'sono'">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-armchair"></i>
                                    <span>sono</span>
                                </div>
                            </li> -->
                        </ul>
                    </div>
                </div>
     <!-- buttons pour filtrer les produits-->
     
      
                <div class="col-lg-10">
                    <div id="Container" class="row justify-content-center">
                    <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in products" 
                      :key="index"
                      >
                            <div class="products-item">
                                <div class="top">
                  <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}" v-if="items.photo.length >0">
                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                            </router-link>
                                    <div class="inner">
                                        <h3>
                            <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}">{{items.libelle}}</router-link>
                                        </h3>
                                        <span> {{items.price}} Fcfa</span>
                                    </div>
                            <div>
                            <!-- <span>{{items.stock}}</span> -->
                            </div>
                                </div>
                                <!-- <div class="bottom">
                                    <a class="cart-text" href="#" @click.prevent="$emit('add',items) , getNotif()">{{add}}</a>
                                    <i :class="logoAdd"></i>
                                </div> -->
                            </div>
                        </div>
                       
                    </div>
             <!-- <div>
                    <ul class="pagination" v-if="listData.length > 5 || currentPage > 1">
                       <li>
                      <button @click="onClickFirstPage" :disabled="isInFirstPage" >
                      prev 
                    </button>
                    </li>
         

                    <li>
                <button v-for="(page,index) in pages" :key="index" @click="onClickPage(page.number)" 
                :class="{active:isPageActive(page.number)}"
                > {{page.number}}  
                </button>
                 </li>
                

                 <li>
                 <button @click="onClickNextPage" :disabled="isInLastPage" >
                  next 
                 </button>
                 </li>
                 </ul>
            </div> -->
                    <div class="text-center">
                        <router-link class="common-btn" to="/produits">
                            Voir Plus de produits
                            <img src="/assets/images/shape1.png" alt="Shape">
                            <img src="/assets/images/shape2.png" alt="Shape">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
     

   
    
    <div class="buy-area">
        <div class="buy-shape">
            <img src="/assets/images/shape3.png" alt="Shape">
        </div>
        <div class="container-fluid p-0">
            <div class="row m-0 align-items-center">
                <div class="col-lg-6 p-0">
                    <div class="buy-img">
                        <img src="/assets/images/julian-wallner-KHgSurk57V4-unsplash.jpg" alt="Buy">
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="buy-content ptb-100">
                        <h2>Achetez les meilleurs meubles à un prix moins cher</h2>
                        <p>Canapé double en frêne confortable et doux</p>
                        <ul>
                            <li>16000 Fcfa</li>
                            <li>
                                <del>20000 Fcfa</del>
                            </li>
                        </ul>
                        <router-link class="common-btn" to="/produits">
                                    Commander Maintenant
                                    <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape">
                                </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="products-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2 class="my-5">les Produits les mieux notés</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                           
                            <img src="/assets/images/products/products10.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">White Luxury Wardrobe</a>
                                </h3>
                                <span>$200.00</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <img src="/assets/images/products/products11.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">Wooden Wardrobe</a>
                                </h3>
                                <span>$180.00</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <a class="cart-text" href="#">Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <img src="/assets/images/products/products12.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">Three Door Wardrobe</a>
                                </h3>
                                <span>$170.00</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <a class="cart-text" href="#">Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <img src="/assets/images/products/products13.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">Classic Wooden Table</a>
                                </h3>
                                <span>$190.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="support-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="flaticon-free-delivery"></i>
                        <h3>Livraison gratuite le lendemain</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="flaticon-call-center"></i>
                        <h3>Assistance en ligne 24h/24 et 7j/7</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="flaticon-giftbox"></i>
                        <h3>Chèque-cadeau hebdomadaire</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import axios from 'axios'
import { Notyf } from 'notyf';

export default{

  name:'Home',
  props:['products','cart','add','listData','maxVisibleButtons','totalPages',
  'total','perPage','currentPage','pageChanged',
  'paginatedData','filtrerProducts'],
  data(){
      return{
          logoAdd:'bx bx-plus',
          logoHeart:'bx bx-heart',
          add:'Ajouter au panier',
          showProducts:false,
          userFilterkey:"all",
        categories:[],
         
      }
  }, 
  components:{
      Header,
  },
methods:{

},
computed:{

        paginatedData(){
            let start = (this.currentPage * this.perPage) - this.perPage;
            let end = start + this.perPage;
         return this.listData.slice(start,end);
        },
        startPage(){
            if(this.currentPage === 1) return 1
            if(this.currentPage === this.totalPages)return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons-1)
             return  this.currentPage - 1;
        },
        endPage(){
            return Math.min(this.startPage + this.maxVisibleButtons-1 , this.totalPages)
        },
        pages(){
            let range =[]
            for (let i = this.startPage; i <= this.endPage ; i++) {
                range.push({ number:i, isDisabled: i === this.currentPage
                });
            }
            return range;
        },
        isInFirstPage(){
            return this.currentPage === 1
        },
        isInLastPage(){
            return this.currentPage === this.totalPages
        },
         getCategories(){
            axios.get('https://igp-event-backend.lce-ci.com/api/categories')
                 .then(resp =>{
                this.categories = resp.data
                })   
          }

        // chargement(){
        //     if(document.DOMContentLoaded){
        //         this.isLoading = false;
        //     }else{
        //         this.isLoading = true;
        //     }
        // }
   
  },
  mounted(){
    //   this.isLoading=!this.isLoading    //   this.$store.dispatch("obtenirProduits")
    // this.chargement
    this.getCategories
    
  },
}
</script>

<style scoped>

.pagination{
    margin-left:-50%;
    transform:translateX(50%)
}
.pagination li{
    display: inline-block;
    margin:0 .5em;
  
}
/*.one{
   background-image:url("/assets/images/ibrahim-boran-m8YjB0noWiY-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.two{
        background-image:url("/assets/images/andra-c-taylor-jr-Zts17DjhMjk-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}*/

</style>
