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
                                                <img :src="items.photo"  alt="Product">
                                            </div>
                                        </div>
                                        <div class="item owl-thumb-item">
                                            <div class="top-img">
                                                <img :src="items.photo"  alt="Product">
                                            </div>
                                        </div>
                                        <div class="item owl-thumb-item">
                                            <div class="top-img">
                                                <img :src="items.photo"  alt="Product">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-9 col-lg-9">
                                    <div class="image-slides owl-carousel owl-theme" data-slider-id="1">
                                        <div class="item">
                                            <div class="top-img">
                                                <img :src="items.photo"  alt="Product">
                                            </div>
                                        </div>
                                        <div class="top-img">
                                            <img :src="items.photo" alt="Product">
                                        </div>
                                        <div class="top-img">
                                            <img :src="items.photo" alt="Product">
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
                                    <h3>{{items.prix}} Fcfa</h3>
                                </li>
                            </ul>
                            <p>{{items.desc}}</p>
                            <ul class="tag">
                                <li>Numero du produit: <span>{{items.id}}</span></li>
                                <li>Categorie: <span>Sofa</span></li>
                                <li>libelle: <span>Furniture</span></li>
                                <li>Status: <span>En Stock</span></li>
                            </ul>
                            <ul class="cart">
                                <!-- <li>
                                    <ul class="number">
                                        <li>
                                         <span class="minus">-</span>
                                                <span class="text-light fw-b">1</span>
                                                <span class="plus">+</span>
                                        </li>
                                    </ul>
                                </li> -->
                                <li>
                                    <a class="common-btn" href="#" @click.prevent="$emit('add',items) , getNotif()">
                                        Add To Cart
                                        <img src="/assets/images/shape1.png" alt="Shape">
                                        <img src="/assets/images/shape2.png" alt="Shape">
                                    </a>
                                </li>
                            </ul>
                            <a class="wishlist-btn" href="#">
                                <i class='bx bx-heart'></i>
                                Add To Heart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home"
                            role="tab" aria-controls="pills-home" aria-selected="true">Description</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile"
                            role="tab" aria-controls="pills-profile" aria-selected="false">Reviews</a>
                    </li>
                    <li class="nav-item" role="presentation"> </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div class="bottom-description">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                here', making it look like readable English</p>
                            <ul>
                                <li><span></span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy</li>
                                <li><span></span> Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                    diam voluptua</li>
                                <li><span></span> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren</li>
                                <li><span></span> No sea takimata sanctus est Lorem ipsum dolor sit amet</li>
                                <li><span></span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="bottom-comment">
                            <ul class="comments">
                                <li>
                                    <img src="/assets/images/blog/comment1.jpg" alt="Blog">
                                    <h4>Tom Henry</h4>
                                    <span>01 December, 2020</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
                                    </p>
                                    <ul class="reviews">
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <img src="/assets/images/blog/comment2.jpg" alt="Blog">
                                    <h4>Angele Carter</h4>
                                    <span>02 December, 2020</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
                                    </p>
                                    <ul class="reviews">
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star checked"></i>
                                        </li>
                                        <li>
                                            <i class="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="bottom-review">
                            <h3>Leave A Review</h3>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <textarea id="your-comments" rows="8" class="form-control"
                                        placeholder="Comments"></textarea>
                                </div>
                                <button type="submit" class="btn common-btn">
                                    Post A Review
                                    <img src="assets/images/shape1.png" alt="Shape">
                                    <img src="assets/images/shape2.png" alt="Shape">
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
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



    <!-- <div class="modal fade modal-right popup-modal" id="exampleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog"> -->
        <!-- cart -->
            <!-- <div class="modal-content">
                <div class="modal-header">
                    <h2>Shopping Cart <span>{{items}}</span></h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="cart-table">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <img src="/assets/images/cart/cart1.png" alt="Cart">
                                    </th>
                                    <td>
                                        <h3>White Comfy Stool</h3>
                                        <span class="rate">$200.00 x 1</span>
                                    </td>
                                    <td>
                                        <ul class="number">
                                            <li>
                                                <span class="minus">-</span>
                                                <input type="text" value="1" />
                                                <span class="plus">+</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="close" href="#">
                                            <i class='bx bx-x'></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img src="/assets/images/cart/cart2.png" alt="Cart">
                                    </th>
                                    <td>
                                        <h3>Yellow Armchair</h3>
                                        <span class="rate">$180.00 x 1</span>
                                    </td>
                                    <td>
                                        <ul class="number">
                                            <li>
                                                <span class="minus">-</span>
                                                <input type="text" value="1" />
                                                <span class="plus">+</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="close" href="#">
                                            <i class='bx bx-x'></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="total-amount">
                            <h3>Total: <span>$380.00</span></h3>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <form>
                        <input type="text" class="form-control" placeholder="Enter Coupon Code">
                        <button type="submit" class="btn common-btn">
                            Proceed To Checkout
                            <img src="/assets/images/shape1.png" alt="Shape">
                            <img src="/assets/images/shape2.png" alt="Shape">
                        </button>
                    </form>
                </div>
            </div> -->
        <!-- cart -->
        <!-- </div>
    </div> -->



    <div class="go-top">
        <i class='bx bxs-up-arrow-circle'></i>
        <i class='bx bxs-up-arrow-circle'></i>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import { Notyf } from 'notyf';
export default {
   name:"SingleProduct",
   data(){
       return{
           checked:"",
       }
   },
   compoments:{
    Header
   },
   computed:{
     items(){
         return this.$store.getters.items(parseInt(this.$route.params.id));
     },
   },
    props:['cart','add','products','removeItem','removeBySign','increase'],
   methods:{
       giveStars(){
        let verf=this.checked;
        if(verf === ""){
           this.checked ="checked"
        }else{
            this.checked=""
        }
          
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
   }
   }
  
}
</script>
