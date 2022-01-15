<template>
<!-- voici tous ce quui s' affiche lorsque tu viens sur le site -->
    <div class="banner-area-two">
        <div class="banner-slider owl-theme owl-carousel">
            <div class="banner-item">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="banner-content">
                                <h1>PRODUITS</h1>
                               
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <a class="common-btn" href="#">
                                    Shop Now
                                    <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-img">
                    <img src="/assets/images/banner/banner1.png" alt="Banner">
                    <img src="/assets/images/banner/banner-shape1.png" alt="Shape">
                </div>
            </div>
            <div class="banner-item">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="banner-content">
                                <h1>Get All Trendy Furniture In One Store</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                <a class="common-btn" href="/">
                                    Shop Now
                                    <img src="/assets/images/shape1.png" alt="Shape">
                                    <img src="/assets/images/shape2.png" alt="Shape">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-img">
                    <img src="/assets/images/banner/banner2.png" alt="Banner">
                    <img src="/assets/images/banner/banner-shape1.png" alt="Shape">
                </div>
            </div>
        </div>
    </div>
<!-- voici tous ce quui s' affiche lorsque tu viens sur le site -->

  
     <div class="products-area ptb-100">

        <div class="container">
            <div class="row">
                <div class="col-lg-3">
     <!-- buttons pour filtrer les produits-->
                    <div class="sorting-menu">
                        <ul class="justify-content-center">
                            <li class="filter active" data-filter="all">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-square"></i>
                                    <span>All</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".armchair">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-armchair"></i>
                                    <span>Armchair</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".sofa">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-sofa"></i>
                                    <span>Sofa</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".computer">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-table"></i>
                                    <span>Computer Desk</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".desk">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-desk-chair"></i>
                                    <span>Desk Chair</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".center">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-table-1"></i>
                                    <span>Center Table</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".book">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-shelf"></i>
                                    <span>Book Shelf</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".cabinet">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-cabinet"></i>
                                    <span>Cabinet</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".bed">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-bed"></i>
                                    <span>Bed</span>
                                </div>
                            </li>
                            <li class="filter" data-filter=".center-table">
                                <div class="products-thumb">
                                    <img src="/assets/images/products/shape1.png" alt="Shape">
                                    <img src="/assets/images/products/shape2.png" alt="Shape">
                                    <i class="flaticon-dresser"></i>
                                    <span>Dressing Table</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
     <!-- buttons pour filtrer les produits-->
     
      
                <div class="col-lg-9">
                    <div id="Container" class="row justify-content-center">
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
                            <img :src="items.photo" :alt="items.libelle">
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
                        <img src="/assets/images/buy-main1.png" alt="Buy">
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="buy-content ptb-100">
                        <h2>Buy Best Furniture At A Cheaper Rate</h2>
                        <p>Soft Comfy Ash Dual Sofa</p>
                        <ul>
                            <li>$160.00</li>
                            <li>
                                <del>$200.00</del>
                            </li>
                        </ul>
                        <a class="common-btn" href="shop.html">
                            Shop Now
                            <img src="/assets/images/shape1.png" alt="Shape">
                            <img src="/assets/images/shape2.png" alt="Shape">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="products-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Best Selling Products</h2>
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



     <div class="testimonials-area pb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our Client Testimonials</h2>
            </div>
            <div class="testimonials-slider owl-theme owl-carousel">
                <div class="testimonials-item">
                    <i class="flaticon-quote"></i>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam volu ptua</p>
                    <h3>Adam Smith</h3>
                    <span>Co-Founder Of Company</span>
                    <img src="/assets/images/testimonial1.jpg" alt="Testimonial">
                </div>
                <div class="testimonials-item">
                    <i class="flaticon-quote"></i>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum</p>
                    <h3>Jonathon Ronan</h3>
                    <span>Director Of Company</span>
                    <img src="/assets/images/testimonial2.jpg" alt="Testimonial">
                </div>
                <div class="testimonials-item">
                    <i class="flaticon-quote"></i>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old</p>
                    <h3>Sarp Cesmeli</h3>
                    <span>Engineer Of Company</span>
                    <img src="/assets/images/testimonial3.jpg" alt="Testimonial">
                </div>
                <div class="testimonials-item">
                    <i class="flaticon-quote"></i>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words </p>
                    <h3>Tom Henry</h3>
                    <span>Staff Of Company</span>
                    <img src="/assets/images/testimonial4.jpg" alt="Testimonial">
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
                        <h3>Free Next Day Delivery</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="flaticon-call-center"></i>
                        <h3>24/7 Online Support</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="support-item">
                        <i class="flaticon-giftbox"></i>
                        <h3>Weekly Gift Voucher</h3>
                        <p>Lorem ipsum dolor sit amet, cons etetur sadipscing elitr</p>
                        <img src="/assets/images/support-shape1.png" alt="Shape">
                    </div>
                </div>
            </div>
        </div>
    </div>



    <section class="blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Read Latest Our News</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="blog-item">
                        <div class="top">
                            <a href="blog-details.html">
                                <img src="/assets/images/blog/blog1.jpg" alt="Blog">
                            </a>
                            <span>26 Nov</span>
                        </div>
                        <div class="bottom">
                            <h3>
                                <a href="blog-details.html">How To Decorate Your Living Room With Minimal Furniture</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae praesentium
                                dolor atque debitis aspernatur quaerat</p>
                            <a class="blog-btn" href="blog-details.html">
                                Read More
                                <i class='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="blog-item">
                        <div class="top">
                            <a href="blog-details.html">
                                <img src="/assets/images/blog/blog2.jpg" alt="Blog">
                            </a>
                            <span>27 Nov</span>
                        </div>
                        <div class="bottom">
                            <h3>
                                <a href="blog-details.html">Luxurious Furniture Aren't Expensive All The Time</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae praesentium
                                dolor atque debitis aspernatur quaerat</p>
                            <a class="blog-btn" href="blog-details.html">
                                Read More
                                <i class='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="blog-item">
                        <div class="top">
                            <a href="blog-details.html">
                                <img src="/assets/images/blog/blog3.jpg" alt="Blog">
                            </a>
                            <span>28 Nov</span>
                        </div>
                        <div class="bottom">
                            <h3>
                                <a href="blog-details.html">How Can I Choose A Comfortable Bed For My Bedroom</a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae praesentium
                                dolor atque debitis aspernatur quaerat</p>
                            <a class="blog-btn" href="blog-details.html">
                                Read More
                                <i class='bx bx-plus'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <div class="go-top " id="lift">
        <i class='bx bxs-up-arrow-circle'></i>
    </div>

   
</template>

<script>
import Header from "@/components/Header.vue"
import axios from 'axios'
import { Notyf } from 'notyf';
export default{

  name:'Home',

  props:['cart','add','products'],
  data(){
      return{
          logoAdd:'bx bx-plus',
          logoHeart:'bx bx-heart',
          add:'Ajouter au panier',
          showProducts:false,
      }
  }, 
  components:{
      Header,
  },
methods:{
//    getCart(){
//        axios.get('http://192.168.1.2:8000/api/produits')
//             .then(resp =>{
//                 console.log(resp.data.data)
//                 this.products = resp.data.data
//                 });
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
   onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
},
}
</script>
