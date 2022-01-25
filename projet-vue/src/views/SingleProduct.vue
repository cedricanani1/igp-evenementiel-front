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
                                        <div class="item owl-thumb-item">
                                            <div class="top-img">
                                             <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div>
                                        <div class="item owl-thumb-item">
                                           <div class="top-img">
                                               <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div>
                                        <div class="item owl-thumb-item">
                                          <div class="top-img">
                                               <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 col-lg-9">
                                    <div class="image-slides owl-carousel owl-theme" data-slider-id="1">
                                        <div class="item">
                                            <div class="top-img">
                                                <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                            </div>
                                        </div>
                                        <div class="top-img">
                                           <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                        </div>
                                        <div class="top-img">
                                            <img :src="'https://igp-event-backend.lce-ci.com/public/'+ items.photo[0].path" :alt="items.libelle">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="top-content">
                            <h2>{{items.libelle}}</h2>
                            <ul class="reviews">
                                <li>
                                    <i class="bx bxs-star" :class="checked" @click="giveStars" ></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star "></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star "></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <h3>{{items.price}} Fcfa</h3>
                                </li>
                            </ul>
                            <p>{{items.slug}}</p>
                            <ul class="tag">
                                <li>Numero du produit: <span>{{items.id}}</span></li>
                                <li>Categorie: <span>Sofa</span></li>
                                <li>libelle: <span>Furniture</span></li>
                                <li>Status: <span>En Stock</span></li>
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
                             <label for="location">location</label>
                                <input type="text" v-model="items.location" class="form-control" name="location" placeholder="location" required>
                            </div>
                            <div class="form-group">
                              <label for="objet">objets</label>
                                <input type="text" v-model="items.objects" class="form-control" name="objet" placeholder="Objet" required>
                            </div>
                             <div class="form-group">
                            <label for="participants">Participant</label>
                                <input type="number" v-model="items.participant" class="form-control" placeholder="ex:90" required>
                            </div>
                            <div class="form-group">
                             <label for="location">details</label>
                                <input type="text" v-model="items.details" class="form-control" name="location" placeholder="location" required>
                            </div>
                            <ul class="cart float-end">
                                <li>
                                    <a class="common-btn" href="#" @click.prevent="$emit('add',items)">
                                        Add To Cart
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
                <h2>Related Products</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <a class="wishlist" href="#">
                                <i class='bx bx-heart'></i>
                            </a>
                            <img src="/assets/images/products/products10.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">White Luxury Wardrobe</a>
                                </h3>
                                <span>$200.00</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <a class="cart-text" href="#">Add To Cart</a>
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <a class="wishlist" href="#">
                                <i class='bx bx-heart'></i>
                            </a>
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
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <a class="wishlist" href="#">
                                <i class='bx bx-heart'></i>
                            </a>
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
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="products-item">
                        <div class="top">
                            <a class="wishlist" href="#">
                                <i class='bx bx-heart'></i>
                            </a>
                            <img src="/assets/images/products/products13.png" alt="Products">
                            <div class="inner">
                                <h3>
                                    <a href="single-product.html">Classic Wooden Table</a>
                                </h3>
                                <span>$190.00</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <a class="cart-text" href="#">Add To Cart</a>
                            <i class='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Header from "@/components/Header.vue"
import { Notyf } from 'notyf';
export default {
   name:"SingleProduct",

   props:['products','cart','add','removeItem','removeBySign','increase'],

   compoments:{
    Header
   },

   data(){
       return{
            checked:"",
            
            id:this.$route.params.id,
            items:{
                to:"",
                from:"",
                location:"",
                object:"",
                participants:"",
                details:"",
            },
       }
   },
   computed:{
       days(){
            
             return jours
       },
   },
    
   methods:{
    //    giveStars(){
    //     let verf=this.checked;
    //     if(verf === ""){
    //        this.checked ="checked"
    //     }else{
    //         this.checked=""
    //     }
          
    //    },  
       
    getNotif(){
  let noty = new Notyf({
      duration:4000,
      position :{
          x:'right',
          y:'top',
      }
  })
  noty.success('produit ajoutee')
  setTimeout(()=>{
      noty.dismissAll()
  },1000)
   },
    
   },

   created(){   
  axios.get('https://igp-event-backend.lce-ci.com/api/products/'+ this.id)
                  .then(resp =>{
                this.items = resp.data.data
                })


   },
   
   mounted() {

   },
  
}
</script>
