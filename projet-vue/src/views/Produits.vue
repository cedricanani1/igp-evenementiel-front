<template>
     <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>Shop</h2>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <span>Shop</span>
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


    <div class="products-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="sorting-menu">
                        <ul>
                            <li class="filter active" data-filter="all">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                                    <span>All</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".armchair">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-armchair"></i>
                                    <span>Armchair</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".sofa">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-sofa"></i>
                                    <span>Sofa</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".computer">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-table"></i>
                                    <span>Computer Desk</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".desk">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-desk-chair"></i>
                                    <span>Desk Chair</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".center">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-table-1"></i>
                                    <span>Center Table</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".book">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-shelf"></i>
                                    <span>Book Shelf</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".cabinet">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-cabinet"></i>
                                    <span>Cabinet</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".bed">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-bed"></i>
                                    <span>Bed</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".center-table">
                                <div class="products-thumb">
                                    <img src="assets/images/products/shape1.png" alt="Shape">
                                    <img src="assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-dresser"></i>
                                    <span>Dressing Table</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div id="Container" class="row">
                       <div class="col-sm-6 col-lg-4"
                      v-for="(items,index) in products" 
                      :key="index"
                      >
                            <div class="products-item">
                                <div class="top">
                                    <a class="wishlist" href="#">
                                        <i :class="logoHeart"></i>
                                    </a>
                           <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}">
                            <img :src="'http://192.168.1.3:8000/api/produits/'+items.photo" :alt="items.libelle">
                            </router-link>
                                    <div class="inner">
                                        <h3>
                                                    <router-link 
                            :to="{name:'SingleProduct', params:{id:items.id}}">{{items.libelle}}</router-link>
                                        </h3>
                                        <span> {{items.prix}} Fcfa</span>
                                    </div>
                                </div>
                               <div class="bottom">
                                    <a class="cart-text" href="#" @click.prevent="$emit('add',items) , getNotif()">{{add}}</a>
                                    <i :class="logoAdd"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a class="common-btn" href="shop.html">
                            Afficher plusieurs produits
                            <img src="assets/images/shape1.png" alt="Shape">
                            <img src="assets/images/shape2.png" alt="Shape">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Home from "./Home.vue"
import axios from "axios"
import { Notyf } from 'notyf';
export default {
    name:"Produits",
    props:['cart','add','products','listData','maxVisibleButtons','totalPages','total','perPage','currentPage','pageChanged'],
    data(){
        return{
            products:[],
              logoAdd:'bx bx-plus',
              logoHeart:'bx bx-heart',
              add:'Ajouter au panier',
        }
    },
    components:{
        Home,
    },
    methods:{
   getCart(){
       axios.get('http://192.168.1.3:8000/api/produits')
            .then(resp =>{
                console.log(resp.data.data)
                this.products = resp.data.data
                });
   },
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
mounted(){
     this.getCart()
  }
}
</script>