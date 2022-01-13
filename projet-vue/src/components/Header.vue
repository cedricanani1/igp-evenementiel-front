<template>

    <!-- <div class="loader">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="pre-load">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            </div>
        </div>
    </div> -->

  <div class="header-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-6 col-lg-7">
                    <div class="left">
                        <ul>
                            <li>
                                <i class="flaticon-delivery-truck"></i>
                                <span>bienvenue</span>
                            </li>
                            <li>
                                <i class="flaticon-quality"></i>
                                <span>Best Price Guarantee</span>
                            </li>
                            <li>
                                <i class="flaticon-call-center"></i>
                                <span>24/7 Customer Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-5">
                    <div class="right">
                        <div class="inner">
                            <select>
                                <option>$ USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                                <option>CAD</option>
                            </select>
                        </div>
                        <div class="inner">
                            <form>
                                <select>
                                    <option>English</option>
                                    <option>العربيّة</option>
                                    <option>Deutsch</option>
                                    <option>Português</option>
                                    <option>简体中文</option>
                                </select>
                            </form>
                        </div>
                        <div class="inner">
                            <div class="call">
                                <i class="flaticon-phone-call"></i>
                                <a href="tel:9905324980">990-532-4980</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="nav-top-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-2">
                    <div class="left">
                        <a href="index.html">
                            <img src="/assets/images/logo.png" alt="Logo">
                        </a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="middle">
                        <form>
                            <div class="form-group">
                                <div class="inner">
                                    <!-- <select style="display:none;">
                                        <option>Categories</option>
                                        <option>Chair</option>
                                        <option>Table</option>
                                        <option>Bed</option>
                                        <option>Sofa</option>
                                        <option>Headphones</option>
                                        <option>Keyboard</option>
                                        <option>MacBook</option>
                                        <option>Vegetable</option>
                                        <option>Fruits</option>
                                        <option>Chicken</option>
                                    </select> -->
<div class="nice-select open" tabindex="0"><span class="current">All Categories</span>
    <ul class="list">
        <li data-value="All Categories" class="option selected focus">All Categories</li>
        <li data-value="Chair" class="option">Chair</li>
        <li data-value="Table" class="option">Table</li>
        <li data-value="Bed" class="option">Bed</li>
        <li data-value="Sofa" class="option">Sofa</li>
        <li data-value="Headphones" class="option">Headphones</li>
        <li data-value="Keyboard" class="option">Keyboard</li>
        <li data-value="MacBook" class="option">MacBook</li>
        <li data-value="Vegetable" class="option">Vegetable</li>
        <li data-value="Fruits" class="option">Fruits</li>
        <li data-value="Chicken" class="option">Chicken</li>
    </ul>
</div>
                                </div>
                                <input type="text" class="form-control" placeholder="Search Your Keywords">
                                <button type="submit" class="btn">
                                    <i class='bx bx-search'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="right">
                        <ul>
                            <li>
                                <div class="inner">
                                    <i class="flaticon-pin"></i>
                                    <a href="#">Set Location</a>
                                </div>
                            </li>
                            <li>
                                <div class="inner">
                                    <i class="flaticon-question"></i>
                                    <a href="#">Need Help?</a>
                                </div>
                            </li>
                            <li>
                                <button type="button" class="btn wishlist cart-popup-btn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                    <i class='bx bxs-cart'></i>
                                    <span v-if="cart.length  >=  1 ">{{cart.length}}</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn wishlist" data-bs-toggle="modal"
                                    data-bs-target="#exampleModalWishlist" data-bs-whatever="@mdo">
                                    <i class='bx bx-heart'></i>
                                    <span>2</span>
                                </button>
                            </li>
                            <li>
                                <a class="join" href="/">
                                    <i class="flaticon-round-account-button-with-user-inside"></i>
                                    Join
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="navbar-area sticky-top">

        <div class="mobile-nav mean-container">
            <router-link to="/" class="logo">
                <img src="/assets/images/logo.png" alt="Logo">
            </router-link>

            <div class="mean-bar">
                <a href="#" class="meanmenu-reveal" style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;" @click.prevent="showMenu">
                    <span v-if="barre">
                         <span v-if="barre">
                             <span v-if="barre"></span>
                        </span>
                    </span>
                </a>
                <a href="#nav" class="meanmenu-reveal" style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;" v-if="show" @click.prevent="showMenu">X</a>
                <nav class="mean-nav">
                        <ul class="navbar-nav" v-if="show">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link dropdown-toggle active">Home <i class="bx bx-chevron-down"></i></router-link>
                                <!-- <ul class="dropdown-menu" style="display: none;">
                                    <li class="nav-item">
                                        <a href="index.html" class="nav-link active">Home Demo One</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index-2.html" class="nav-link">Home Demo Two</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index-3.html" class="nav-link">Home Demo Three</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index-4.html" class="nav-link">Home Demo Four (Revolution)</a>
                                    </li>
                                </ul> -->
                            <router-link class="mean-expand" to="/" style="font-size: 18px">+</router-link></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Pages <i class="bx bx-chevron-down"></i></a>
                                <ul class="dropdown-menu" style="display: none;">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle">Users <i class="bx bx-chevron-down"></i></a>
                                        <ul class="dropdown-menu" style="display: none;">
                                            <li class="nav-item">
                                                <a href="login.html" class="nav-link">Login</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="register.html" class="nav-link">Register</a>
                                            </li>
                                        </ul>
                                    <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                                    <li class="nav-item">
                                        <a href="faq.html" class="nav-link">FAQ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="404.html" class="nav-link">404 Error Page</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="return-policy.html" class="nav-link">Return Policy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="terms-conditions.html" class="nav-link">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Blog <i class="bx bx-chevron-down"></i></a>
                                <ul class="dropdown-menu" style="display: none;">
                                    <li class="nav-item">
                                        <a href="blog.html" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-left-sidebar.html" class="nav-link">Blog Left Sidebar</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-details.html" class="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Shop <i class="bx bx-chevron-down"></i></a>
                                <ul class="dropdown-menu" style="display: none;">
                                    <li class="nav-item">
                                        <a href="shop.html" class="nav-link">Shop</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="checkout.html" class="nav-link">Checkout</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="single-product.html" class="nav-link">Single Product</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="products-on-sale.html" class="nav-link">Products On Sale</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="order-tracking.html" class="nav-link">Order Tracking</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="customer-service.html" class="nav-link">Customer Service</a>
                                    </li>
                                </ul>
                            <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                            <li class="nav-item mean-last">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div class="side-nav">
                            <h4>Get <span>50%</span> Discount On Black Friday Offer <a href="products-on-sale.html">View
                                    Products On Sale</a></h4>
                        </div>
                    </nav>
                    </div>
        </div>

        <div class="main-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <div class="left">
                        <select style="display:none;">
                            <option >Categories</option>
                            <option>Chair</option>
                            <option>Table</option>
                            <option>Bed</option>
                            <option>Sofa</option>
                            <option>Headphones</option>
                            <option>Keyboard</option>
                            <option>MacBook</option>
                            <option>Vegetable</option>
                            <option>Fruits</option>
                            <option>Chicken</option>
                        </select>
                        <div class="nice-select" tabindex="0"><span class="current">All Categories</span><ul class="list"><li data-value="All Categories" class="option selected focus">All Categories</li><li data-value="Chair" class="option">Chair</li><li data-value="Table" class="option">Table</li><li data-value="Bed" class="option">Bed</li><li data-value="Sofa" class="option">Sofa</li><li data-value="Headphones" class="option">Headphones</li><li data-value="Keyboard" class="option">Keyboard</li><li data-value="MacBook" class="option">MacBook</li><li data-value="Vegetable" class="option">Vegetable</li><li data-value="Fruits" class="option">Fruits</li><li data-value="Chicken" class="option">Chicken</li></ul></div>
                    </div>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link dropdown-toggle active">Accueil</router-link>
                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/page2" class="nav-link active">Home Demo One</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">Home Demo Two</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index-3.html" class="nav-link">Home Demo Three</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="index-4.html" class="nav-link">Home Demo Four (Revolution)</a>
                                    </li>
                                </ul> -->
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Connexion<i
                                        class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle">Utilisateurs<span class="iconify" data-icon="bx:bx-chevron-down-circle" data-rotate="270deg"></span> </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/login" class="nav-link">Se Connecter</router-link>
                                            </li>
                                            <li class="nav-item">
                                    <router-link to="/register" class="nav-link">Inscription</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <a href="faq.html" class="nav-link">FAQ</a>
                                    </li> -->
                                    <!-- <li class="nav-item">
                                        <a href="404.html" class="nav-link">404 Error Page</a>
                                    </li> -->
                                    <!-- <li class="nav-item">
                                        <a href="return-policy.html" class="nav-link">Return Policy</a>
                                    </li> -->
                                    <!-- <li class="nav-item">
                                        <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="terms-conditions.html" class="nav-link">Terms & Conditions</a>
                                    </li> -->
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">A propos de nous</router-link>
                            </li>
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Blog <i class='bx bx-chevron-down'></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="blog.html" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-left-sidebar.html" class="nav-link">Blog Left Sidebar</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-details.html" class="nav-link">Blog Details</a>
                                    </li>
                                </ul>
                            </li> -->
                            <li class="nav-item">
                                <router-link to="/produits" class="nav-link dropdown-toggle">Shop <i class='bx bx-chevron-down'></i></router-link>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/produits" class="nav-link">Shop</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/commander" class="nav-link">Commander</router-link>
                                    </li>
                                    <!-- <li class="nav-item">
                                        <router-link to="/single-product" class="nav-link">voir produit</router-link>
                                    </li> -->
                                    <!-- <li class="nav-item">
                                        <a href="products-on-sale.html" class="nav-link">Products On Sale</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="order-tracking.html" class="nav-link">Order Tracking</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="customer-service.html" class="nav-link">Customer Service</a>
                                    </li> -->
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contacts" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
                        <div class="side-nav">
                            <h4>Get <span>50%</span> Discount On Black Friday Offer <a href="products-on-sale.html">View
                                    Products On Sale</a></h4>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>


     <div class="modal fade modal-right popup-modal" id="exampleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
         <!-- cart -->
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Panier<span>{{cart.length}} items</span></h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="cart-table">
                        <table class="table">
                            <tbody>
                                <tr  
                                v-for="items in cart"
                                 :key="items.index">
                                    <th scope="row">
                                       <img :src="items.photo" :alt="items.libelle">
                                    </th>
                                    <td>
                                        <h3>{{items.libelle}}</h3>
                                        <span class="rate">{{items.prix}} Fcfa</span>
                                    </td>
                                    <td>
                                        <ul class="number">
                                            <li>
                                                <span class="minus" @click="$emit('removeBySign',items)">-</span>
                                                <span class="text-light fw-b">{{items.quantity}}</span>
                                                <span class="plus" @click="$emit('increase',items)" >+</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="close" href="#" @click.prevent="$emit('removeItem',items)">
                                            <i class='bx bx-x'></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="total-amount">
                            <h3>Total: <span>{{item_cost.toFixed()}}</span></h3>
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
            </div>
        <!-- cart -->
        </div>
    </div>


</template>

<script>
import axios from 'axios'
export default {

    name:"Header",
    data(){
        return{
            show:false,
            barre:true,
        }
    },
    props:['cart','add','products','removeItem','removeBySign','increase'],
    methods:{
        showMenu(){
            this.show = !this.show;
            this.barre= !this.barre;
        },

    //     getCart(){
    //    axios.get('http://192.168.1.2:8000/api/produits')
    //         .then(resp =>{
    //             console.log(resp.data.data)
    //             this.products = resp.data.data
    //             });}
   },
 computed:{
     // afficher le total des produits
     item_cost(){
         let count =0
         this.cart.forEach( item =>{
             count+= item.prix * item.quantity
         })
         return count;
     },
    

   },
 
}
</script>

<style scoped>
.selected-categorie{
    background: #434e6e;
    color: white;
}

@media only screen and (max-width: 991px){
.mean-container .mean-bar{
background: white;
      }
.selected-categorie{
    width:100% !important;
    background: #434e6e;
    color: white;
}

}

</style>