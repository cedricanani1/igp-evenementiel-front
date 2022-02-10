<template>
  <div class="header-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-6 col-lg-7">
                    <div class="left">
                        <ul>
                            <li>
                                <i class="bi bi-geo-alt"></i>
                                <!-- <span>Disponible 24/7</span> -->
                                 <span class="my-1">Riviera BONOUMIN LAURIER 6 VILLA N 151-Cocody </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-5">
                    <div class="right">
                        <div class="inner">
                            <div class="call">
                               
                                <a href="tel:2722499504"> <i class="bi bi-telephone"></i> <b>Tel : (+225) 27 22 49 95 04</b> </a>
                                <a class="d-block text-light"  href="mailto:info@igp.ci"> <i class="bi bi-mailbox"></i>Email : info@igp.ci</a>
                                
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
                       
                            <router-link to="/">
                              <img src="/assets/images/LOGO IGP.jpeg" alt="Logo">
                              </router-link>  
                      
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="middle">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="right">
                        <ul>
                            <li class="container-user" v-if="user">
                             <a class="user" href="#" @click.prevent="showCompte"> <i class="bi bi-person-circle mx-2"></i> {{user.nom}} {{user.prenoms}} <i class="bi bi-caret-down-fill mx-1" v-if="!compte"></i> <i class="bi bi-caret-up-fill" v-if="compte"></i></a>
                                 
                                <div class="compte" v-if="compte">  
                                  <router-link to="/modify"> <i class="bi bi-person-badge"></i> Votre compte</router-link>
                                   <router-link to="/commande" class="nav-link"> <i class="bi bi-bag-fill"></i> Vos commandes</router-link>
                                  <a href="#" @click.prevent="deconnexion">
                                    <i class="bi bi-box-arrow-in-left"></i> Se deconnecter
                                </a>
                               
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
            

            <div class="mean-bar">
            
                <a href="#" class="meanmenu-reveal" style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;" @click.prevent="showMenu">
                    <span v-if="barre">
                         <span v-if="barre">
                             <span v-if="barre"></span>
                        </span>
                    </span>
                </a>
                <router-link to="/" class="image position-absolute ms-3" >
                 <img class="img-fluid"  src="/assets/images/LOGO IGP.jpeg" alt="Logo">
                 </router-link>
                <a href="#nav" class="meanmenu-reveal" style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;" v-if="show" @click.prevent="showMenu">X</a>
                <nav class="mean-nav">
                        <ul class="navbar-nav" v-if="show">
                            <li class="nav-item">
                                <router-link to="/"  class="nav-link dropdown-toggle active" @click.prevent="showMenu">Home <i class="bx bx-chevron-down"></i></router-link>
                    
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" @click.prevent="showMenu" class="nav-link">A propos de Nous</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/produits" @click.prevent="showMenu"  class="nav-link dropdown-toggle">Produits</router-link>
                            </li>
                            <li class="nav-item mean-last">
                                <router-link to="/contacts" @click.prevent="showMenu" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
                    </nav>
                    </div>
                  <!--  <a href="index.html" class="logo">
                    <img src="assets/images/logo.png" alt="Logo">
                     </a> -->
        </div>

        <div class="main-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <div class="left">
                    </div>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link dropdown-toggle active">Accueil</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/produits" class="nav-link">Produits</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">A propos de nous</router-link>
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
                                v-for="(items,index) in cart"
                                 :key="index">
                                    <th scope="row">
                                       <img :src="items.photo" :alt="items.libelle">
                                    </th>
                                    <td>
                                        <h3>{{items.libelle}}</h3>
                                        <span class="rate">{{items.price}} Fcfa</span>
                                    </td>
                                    <td>
                                        <ul class="number">
                                            <li>
                                                <span class="minus" @click="$emit('removeBySign',items)">-</span>
                                                <span class="text-light fw-b">{{items.quant}}</span>
                                                <span class="plus" @click="$emit('increase',items)" >+</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="close" href="#" @click.prevent="$emit('removeItem',index)">
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
                <div class="modal-footer" v-if="cart.length > 0" >
                <button  class="btn common-btn"   data-bs-dismiss="modal"   @click="passedCommand"  >
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
import axios from 'axios'
export default {

    name:"Header",
    props:['cart','add','products','removeItem','removeBySign','increase','search'],
    data(){
        return{
            show:false,
            barre:true,
            user:null,
            token:"",
            compte:false,
            libelle:"",
        }
    },

    methods:{
        showMenu(){
            this.show = !this.show;
            this.barre= !this.barre;
        },
        deconnexion(){
        axios.get('https://igp-auth.lce-ci.com/api/auth/logout',
            { headers:{"Authorization" : 'Bearer ' +  localStorage.getItem('token')}})
            .then( function(reponse){
                 Swal.fire({
                    position: 'center',
                    icon:'success',
                     title: 'Vous êtes deconnecter',
                    showConfirmButton: false,
                    timer: 1500,
             })
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('info')
                localStorage.removeItem('mycart')
                  window.location.href ='/';
                  
                console.log(reponse);
            })
            this.user= null;
            this.$router.push("/")
             
           
        },
    passedCommand(){
        this.$router.push("/commander")
        // if( localStorage.token){
        //  localStorage.setItem('mycart',JSON.stringify(this.cart))
        //  console.log(localStorage.getItem('total'))
        // //  this.$router.push('/commander')
        //  localStorage.getItem('total')
        // //  this.$router.push("/commander")
        // window.location.href = '/commander'
        // }else{
        //     Swal.fire({
        //             position: 'center',
        //              title: 'Veuillez-vous connecter merci',
        //             showConfirmButton: false,
        //             timer: 1500,
        //      })
        //      this.$router.push('/login')
        // }
    },
    showCompte(){
        let user = document.getElementsByClassName("user")[0]
        this.compte = !this.compte
        if(this.compte == true){
        user.style.backgroundColor ="rgba(192,192,192,0.7)"
        user.style.padding ="10px 5px"
        user.style.borderRadius="5px"
        }else{
            user.style.backgroundColor = "transparent"
            user.style.padding ="0px"
        }
        
    },
   },
 computed:{
     // afficher le total des produits
     item_cost(){
         let count =0
         this.cart.forEach( item =>{
             count+= item.price * item.quant
         })
       
         return count;
          
     },
    

   },
   created(){
   this.user =JSON.parse(localStorage.getItem('user')) ;

  },
  mounted(){
    localStorage.setItem('total',this.item_cost);
  }
 
}
</script>

<style scoped>
.nav-item a:active{
color:orange !important;
}
.nav-item a:hover{
color:orange !important;
}
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
.container-user{

    position:relative;
}

.compte{
    width:200px;
    background-color:#435d96;
    text-align:center;
    position:absolute;
    top:40px;
    left:5px;

}
.image img{
    width:130px;
}
.compte a{
    display:block;
    margin:1em 0;
    color:rgb(250, 250, 250);
    font-size:1.1em;
    font-weight:400;
}
.compte a:hover{
    color:orange;
}
.all a:hover{
  text-decoration: none !important;
  border:none;
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