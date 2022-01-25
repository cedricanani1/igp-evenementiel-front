<template>
 <!-- <PageLoader /> -->
 <div class="page-loader" v-if="!isLoaded">
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
</div>
     <div class="page-title-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-content">
                        <h2>A propos de Nous</h2>
                        <ul>
                            <li>
                                <router-link to="/">Accueil</router-link>
                            </li>
                            <li>
                                <span>A propos Nous</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-img">
            <img src="/assets/images/page-title1.jpg" alt="About">
            <img src="/assets/images/shape16.png" alt="Shape">
            <img src="/assets/images/shape17.png" alt="Shape">
            <img src="/assets/images/shape18.png" alt="Shape">
        </div>
    </div>


    <section class="about-area pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="top">
                            <h2>A propos de Nous</h2>
                            <p>IVOIRE GOODIES PERFORMANCES</p>
                            <p>Ivoire Goodies Performances (IGP) est une entreprise spécialisée dans le Marketing Opérationnel, la Régie Publicitaire, Affichage Publicitaire Indoor & Outdoor, le Placement de Personnel Temporaire, la Confection de Gadgets d’entreprise et l’Evénementiel. IGP, c’est plus de 100 projets réalisés sur tout le territoire. Notre groupe est en pleine expansion avec à ce jour, 4 agences sur le territoire ivoirien. En effet, dans l’optique de se rapprocher de nos partenaires… Nous sommes présents à ABIDJAN, BOUAKE, KORHOGO & DIVO.</p>
                        </div>
                        <div class="middle">
                            <ul>
                                <li>
                                    <img src="/assets/images/about-icon1.png" alt="Icon">
                                    <h3>25 ans d experience</h3>
                                </li>
                                <li>
                                    <img src="/assets/images/about-icon2.png" alt="Icon">
                                    <h3>Trusted Brand In City</h3>
                                </li>
                                <li>
                                    <img src="/assets/images/about-icon3.png" alt="Icon">
                                    <h3>32+ Award Winner</h3>
                                </li>
                                <li>
                                    <img src="/assets/images/about-icon4.png" alt="Icon">
                                    <h3>Best Quality Brand</h3>
                                </li>
                            </ul>
                            <p>CHEZ IVOIRE GOODIES PERFORMANCES, VOUS ETES PLUS QU’UN CLIENT… UN VERITABLE PARTENAIRE</p>
                            <a class="common-btn" href="shop.html">
                                Commander Maintenant
                                <img src="/assets/images/shape1.png" alt="Shape">
                                <img src="/assets/images/shape2.png" alt="Shape">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-img">
                        <img src="/assets/images/about-main1.jpg" alt="About">
                        <img src="/assets/images/about-main2.jpg" alt="About">
                        <img src="/assets/images/about-main3.jpg" alt="About">
                    </div>
                </div>
            </div>
        </div>
    </section>


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
                        <h2>Achetez les meilleurs meubles à un prix moins cher</h2>
                        <p>Canapé double en frêne confortable et doux</p>
                        <ul>
                            <li>16000 Fcfa</li>
                            <li>
                                <del>20000 Fcfa</del>
                            </li>
                        </ul>
                        <a class="common-btn" href="shop.html">
                            Commander Maintenant
                            <img src="/assets/images/shape1.png" alt="Shape">
                            <img src="/assets/images/shape2.png" alt="Shape">
                        </a>
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
import PageLoader from '@/components/PageLoader.vue';
export default {
    name:'AproposDeNous',
    components:{
        PageLoader,
    },
    data(){
       return{
           isLoaded:false,

       }
   },
   mounted(){
      document.onload = () =>{
         this.isLoaded = true;
       }
   }
}
</script>
<style scoped>

.page-loader{
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top:0;
left:0;
width:100vw;
height:100vh;
background-color:rgba(0, 0, 0, 0.582); 
z-index:999;
    
 }
 .cube{
 width:40px;
 height:40px;
 margin-right:10px;
 background-color:rgb(46, 46, 141);

    
 }
 .cube:first-child{
       animation:left 1s infinite;
     }
.cube:last-child{
       animation:right 1s infinite .5s;
     }
 @keyframes left {
     40%{
     transform:translateX(-60px);
    }
      50%{
      transform:translateX(0);
     }
     
 }

  @keyframes right {
     40%{
         transform:translateX(60px);
         }
     50%{
    transform:translateX(0);
    }
     
 }



</style>