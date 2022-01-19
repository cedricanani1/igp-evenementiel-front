<template>
  <div class="header-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-6 col-lg-7">
                    <div class="left">
                        <ul>
                            <li>
                                <i class="flaticon-call-center"></i>
                                <span>Disponible 24/7</span>
                                 <span class="d-block my-1">Riviera BONOUMIN  <br> LAURIER 6 VILLA N 151-Cocody </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-5">
                    <div class="right">
                        <div class="inner">
                            <div class="call">
                                <i class="flaticon-phone-call"></i>
                                <a href="tel:2722499504">Tel : (+225) 27 22 49 95 04</a>
                                <a class="d-block text-light"  href="mailto:info@igp.ci">mail : info@igp.ci</a>
                                
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

                            <router-link to="/">
                              <h1>IGP </h1>
                              </router-link>  
                        </a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="middle">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="faire une recherche">
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
                            <li v-if="user">
                             <a class="user" href="#" @click.prevent="showCompte"> <i class="bi bi-person-circle mx-2"></i> {{user.nom}} {{user.prenoms}} <i class="bi bi-caret-down-fill mx-1" v-if="!compte"></i> <i class="bi bi-caret-up-fill" v-if="compte"></i></a>
                                 
                                <div class="compte" v-if="compte">  
                                  <router-link to="/modify"> Votre compte</router-link>
                                  <a href="#" @click.prevent="deconnexion">
                                    Se deconnecter
                                </a>
                                <router-link to="/commande" class="nav-link">listes des commandes</router-link>
                                </div>
                            </li>
                             <li v-if="!user"> 
                              <router-link to="/login" class="text-decoration-none register mx-2">
                                  Se Connecter
                                  </router-link>
                                <router-link to="/register" class="text-decoration-none register" >
                                    Inscription
                                  </router-link>
                             
                             </li>
 
                            <li v-if="user || !user">
                               
                                 <button type="button" class="btn wishlist cart-popup-btn user" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                    <i class='bx bxs-cart'></i>
                                    <span v-if="cart.length  >=  1 ">{{cart.length}}</span>
                                </button>
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
                            <router-link class="mean-expand" to="/" style="font-size: 18px">+</router-link></li>
                            <li class="nav-item">
                            <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">A propos de Nous</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Shop <i class="bx bx-chevron-down"></i></a>
    
                            <a class="mean-expand" href="#" style="font-size: 18px">+</a></li>
                            <li class="nav-item mean-last">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>
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
                        <div class="nice-select" tabindex="0"><span class="current">Categories</span><ul class="list"><li data-value="All Categories" class="option selected focus">All Categories</li><li data-value="Chair" class="option">Chair</li><li data-value="Table" class="option">Table</li><li data-value="Bed" class="option">Bed</li><li data-value="Sofa" class="option">Sofa</li><li data-value="Headphones" class="option">Headphones</li><li data-value="Keyboard" class="option">Keyboard</li><li data-value="MacBook" class="option">MacBook</li><li data-value="Vegetable" class="option">Vegetable</li><li data-value="Fruits" class="option">Fruits</li><li data-value="Chicken" class="option">Chicken</li></ul></div>
                    </div>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link dropdown-toggle active">Accueil</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">A propos de nous</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/produits" class="nav-link">Produits</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contacts" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
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
                    <h2>Panier<span>{{cart.length}} Article<b v-if="cart.length > 1 ">s</b> </span> </h2>
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
                <button class="btn common-btn"   data-bs-dismiss="modal"   @click="passedCommand"  >
                            FINALISER LA COMMANDE
                            <img src="/assets/images/shape1.png" alt="Shape">
                            <img src="/assets/images/shape2.png" alt="Shape">
                </button>
                </div>
            </div>
        <!-- cart -->
        </div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {

    name:"Header",
    data(){
        return{
            show:false,
            barre:true,
            user:null,
            token:"",
            compte:false,
        }
    },
    props:['cart','add','products','removeItem','removeBySign','increase'],
    methods:{
        showMenu(){
            this.show = !this.show;
            this.barre= !this.barre;
        },
        deconnexion(){
        axios.get('https://igp-auth.lce-ci.com/api/auth/logout',
            { headers:{"Authorization" : 'Bearer ' +  localStorage.getItem('token')}})
            .then( function(reponse){
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                console.log(reponse);
            });
            this.$router.push("/")
            //  window.location.href = '/'
             this.user= null;
           
        },
    passedCommand(){
        if( localStorage.token){
         localStorage.setItem('mycart',JSON.stringify(this.cart))
         console.log(localStorage.getItem('total'))
        //  this.$router.push('/commander')
         localStorage.getItem('total')
        window.location.href = '/commander'
        }else{
            Swal.fire({
                    position: 'center',
                    //  icon: 'success',
                     title: 'Veuillez vous-connectez merci',
                    showConfirmButton: false,
                    timer: 1500
             })
             this.$router.push('/login')
        }
    },
    showCompte(){
        this.compte = !this.compte
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
     
    //  ...mapGetters(['user'])
    

   },
   created(){
   this.user =JSON.parse(localStorage.getItem('user')) ;
//    this.token = localStorage.getItem('token') ;
//    console.log(this.user)

  },
  mounted(){
    localStorage.setItem('total',this.item_cost);
    //  localStorage.removeItem('token')
    //    localStorage.removeItem('user')
    // localStorage.clear()
  }
 
}
</script>

<style scoped>
.selected-categorie{
    background: #434e6e;
    color: white;
}
.register{
    color:#434e6e;
    font-size:1.2em;
}
.user{
    font-size:1.3em;
    margin:0.5em;
    color:black;
}
.compte{
    width:200px;
    background-color:rgb(248, 248, 248);
    text-align:center;
    position:absolute;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.678);
}
.compte a{
    display:block;
    margin:1em 0;
    color:rgb(255, 166, 0);
    font-size:1.1em
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